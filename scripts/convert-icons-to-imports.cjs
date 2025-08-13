// scripts/convert-icons-to-imports.js
// Ejecutar: node scripts/convert-icons-to-imports.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT = process.cwd();
const SRC_DIR = path.join(ROOT, 'src');
const PUBLIC_ICONS_DIR = path.join(ROOT, 'public', 'icons');
const ASSETS_ICONS_DIR = path.join(SRC_DIR, 'assets', 'icons');

if (!fs.existsSync(ASSETS_ICONS_DIR)) fs.mkdirSync(ASSETS_ICONS_DIR, { recursive: true });

function normalizeFilename(name) {
  const noDiacritics = name.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const safe = noDiacritics.replace(/ñ/g, 'n').replace(/Ñ/g, 'N');
  const cleaned = safe.replace(/[^a-zA-Z0-9._-]/g, '-');
  return cleaned.replace(/-+/g, '-').toLowerCase();
}

function makeVarName(filenameNoExt) {
  let s = filenameNoExt.replace(/[^a-zA-Z0-9]/g, ' ');
  const parts = s.split(/\s+/).filter(Boolean);
  if (parts.length === 0) return '_icon';
  const camel = parts
    .map((p, i) => (i === 0 ? p.toLowerCase() : p[0].toUpperCase() + p.slice(1).toLowerCase()))
    .join('');
  return /^[0-9]/.test(camel) ? '_' + camel : camel;
}

function getAllFiles(dir, exts = ['.tsx', '.ts', '.jsx', '.js']) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...getAllFiles(full, exts));
    else if (exts.includes(path.extname(entry.name))) out.push(full);
  }
  return out;
}

function ensureUniqueVarName(base, used) {
  let name = base;
  let i = 1;
  while (used.has(name)) {
    name = `${base}${i++}`;
  }
  used.add(name);
  return name;
}

// Regex para /icons/archivo.ext (extensiones comunes)
const iconsRegex = /\/icons\/[A-Za-z0-9ñÑáéíóúÁÉÍÓÚüÜ\-\._%() ]+\.(?:png|jpe?g|webp|svg|gif|ico)/g;

const files = getAllFiles(SRC_DIR, ['.tsx', '.ts', '.jsx', '.js']);
console.log(`Analizando ${files.length} archivos en src/ ...`);

files.forEach((filePath) => {
  let content = fs.readFileSync(filePath, 'utf8');
  const matches = content.match(iconsRegex);
  if (!matches) return;

  const localMap = new Map(); // publicPath -> { normalized, varName, importPath }
  const usedVarNames = new Set();

  // Insert imports after last import statement (si existe)
  const allImports = [...content.matchAll(/^import .*;?$/gm)];
  let insertPos = 0;
  if (allImports.length) {
    const lastImport = allImports[allImports.length - 1];
    insertPos = lastImport.index + lastImport[0].length;
  }

  matches.forEach((match) => {
    const publicPath = match; // e.g. /icons/cocinero.png
    const basename = path.basename(publicPath);
    const normalized = normalizeFilename(basename);
    const ext = path.extname(normalized);
    const nameNoExt = normalized.replace(ext, '');

    const sourceExact = path.join(PUBLIC_ICONS_DIR, basename);
    const targetDir = ASSETS_ICONS_DIR;
    const targetPath = path.join(targetDir, normalized);

    // copiar con fallback case-insensitive
    if (!fs.existsSync(sourceExact)) {
      const dirFiles = fs.existsSync(PUBLIC_ICONS_DIR) ? fs.readdirSync(PUBLIC_ICONS_DIR) : [];
      const found = dirFiles.find(f => f.toLowerCase() === basename.toLowerCase());
      if (found) {
        const alt = path.join(PUBLIC_ICONS_DIR, found);
        fs.copyFileSync(alt, targetPath);
        console.log(`Copiado (case-insensitive) ${found} -> ${targetPath}`);
      } else {
        console.warn(`AVISO: no se encontró ${sourceExact}. Revisa public/icons/`);
      }
    } else {
      if (!fs.existsSync(targetPath)) {
        fs.copyFileSync(sourceExact, targetPath);
        console.log(`Copiado ${sourceExact} -> ${targetPath}`);
      }
    }

    if (!localMap.has(publicPath)) {
      const baseVar = makeVarName(nameNoExt);
      const varName = ensureUniqueVarName(baseVar, usedVarNames);
      const rel = path.relative(path.dirname(filePath), targetDir).split(path.sep).join('/');
      let importPath = rel.startsWith('.') ? `${rel}/${normalized}` : `./${rel}/${normalized}`;
      if (rel === '') importPath = `./${normalized}`;
      localMap.set(publicPath, { normalized, varName, importPath });
    }
  });

  if (localMap.size === 0) return;

  // construir imports
  const imports = [];
  for (const [publicPath, info] of localMap) {
    imports.push(`import ${info.varName} from '${info.importPath}';`);
  }
  const importBlock = imports.join('\n') + '\n';

  // insertar imports
  content = content.slice(0, insertPos) + '\n' + importBlock + content.slice(insertPos);

  // reemplazar src="..." y src={'...'} por src={varName}
  for (const [publicPath, info] of localMap) {
    const re1 = new RegExp(`src=\\s*["']${escapeRegExp(publicPath)}["']`, 'g');
    const re2 = new RegExp(`src=\\s*\\{\\s*["']${escapeRegExp(publicPath)}["']\\s*\\}`, 'g');
    content = content.replace(re1, `src={${info.varName}}`);
    content = content.replace(re2, `src={${info.varName}}`);
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Actualizado: ${filePath}`);
});

console.log('Proceso terminado. Revisa los archivos modificados antes de commitear.');

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

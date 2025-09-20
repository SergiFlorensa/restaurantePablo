// src/componentes/seccion-carta/SeccionCarta.tsx
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

type Categoria = {
  id: string
  title: string
  subtitle: string
  description: string
  image: string
  badge: string
}

const base = import.meta.env.BASE_URL // '' en dev  | '/restaurantePablo/' en Pages

const categorias: Categoria[] = [
  {
    id: 'entrantes',
    title: 'Entrantes',
    subtitle: 'Bocados que despiertan el paladar',
    description:
      'Empanadas selladas a mano, provoleta con tomate seco y ensaladas frescas que preparan el camino para la brasa.',
    image: `${base}images/carnca.jpg`,
    badge: 'Encendemos el apetito',
  },
  {
    id: 'principales',
    title: 'Plato principal',
    subtitle: 'Cortes al punto y guarniciones de temporada',
    description:
      'Asado banderita, entraña, milanesas y guarniciones que combinan tradición argentina con producto mediterráneo.',
    image: `${base}images/milanesa.jpg`,
    badge: 'El ritual del fuego',
  },
  {
    id: 'postres',
    title: 'Postres',
    subtitle: 'Final dulce con identidad propia',
    description:
      'Flan con dulce de leche, panqueques y otras recetas caseras para cerrar la sobremesa con calma.',
    image: `${base}images/burrata.png`,
    badge: 'Dulce despedida',
  },
]

export default function SeccionCarta() {
  const [indiceActivo, setIndiceActivo] = useState(0)
  const categoriaActiva = categorias[indiceActivo]

  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <AnimatePresence mode="wait">
        <motion.div
          key={categoriaActiva.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.45 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0"
          style={{
            backgroundImage: `url('${categoriaActiva.image}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'grayscale(15%)',
          }}
          aria-hidden
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-br from-[#d8c5ad] via-[#d8c5ad]/80 to-[#14212B]/60 mix-blend-multiply" aria-hidden />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.05fr,0.95fr] items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.35em] text-[#265b4d]/80">La carta</p>
              <h2
                className="text-4xl sm:text-5xl font-light text-[#14212B]"
                style={{ letterSpacing: '0.08em' }}
              >
                Tres momentos, un mismo fuego
              </h2>
              <p className="max-w-xl text-lg sm:text-xl text-[#1f2727]/80">
                Selecciona una etapa y descubre cómo llevamos el ritual argentino a la mesa. Cada bloque conecta
                directo con su sección de la carta para que la explores sin perderte.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/carta#top"
                className="inline-flex items-center gap-2 rounded-full bg-[#14212B] text-white px-6 py-3 text-sm sm:text-base tracking-[0.18em] uppercase hover:brightness-110 transition"
              >
                Ver carta completa
              </Link>
              <Link
                to={`/carta#${categoriaActiva.id}`}
                className="inline-flex items-center gap-2 rounded-full bg-white/80 text-[#14212B] px-6 py-3 text-sm sm:text-base tracking-[0.14em] uppercase shadow hover:bg-white transition"
              >
                Ir a {categoriaActiva.title.toLowerCase()}
              </Link>
            </div>
          </motion.div>

          <div className="backdrop-blur-md bg-white/70 border border-white/40 rounded-3xl shadow-xl p-6 sm:p-8">
            <div className="flex flex-col gap-4" role="tablist" aria-label="Secciones de la carta">
              {categorias.map((categoria, index) => {
                const activo = indiceActivo === index
                return (
                  <button
                    key={categoria.id}
                    type="button"
                    onClick={() => setIndiceActivo(index)}
                    onFocus={() => setIndiceActivo(index)}
                    className={`group relative flex flex-col gap-2 rounded-2xl border px-5 py-4 text-left transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#14212B] ${
                      activo
                        ? 'border-[#14212B] bg-white shadow-lg text-[#14212B]'
                        : 'border-white/60 bg-white/40 hover:border-[#14212B]/60 text-[#1f2727]/80'
                    }`}
                    role="tab"
                    aria-selected={activo}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[#14212B]/70">
                        0{index + 1}
                      </span>
                      <span className="text-xs rounded-full border border-[#14212B]/25 px-2 py-0.5 text-[#14212B]/60">
                        {categoria.badge}
                      </span>
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-2xl font-semibold text-[#14212B]">{categoria.title}</h3>
                      <p className="text-sm uppercase tracking-[0.18em] text-[#265b4d]">
                        {categoria.subtitle}
                      </p>
                    </div>
                  </button>
                )
              })}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={categoriaActiva.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
                className="mt-6 space-y-4"
              >
                <p className="text-base text-[#1f2727] leading-relaxed">
                  {categoriaActiva.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    to={`/carta#${categoriaActiva.id}`}
                    className="inline-flex items-center gap-2 rounded-full bg-[#14212B] text-white px-4 py-2 text-xs tracking-[0.22em] uppercase hover:brightness-110 transition"
                  >
                    Abrir sección
                  </Link>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-xs tracking-[0.2em] uppercase text-[#14212B]/80">
                    {categoriaActiva.badge}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

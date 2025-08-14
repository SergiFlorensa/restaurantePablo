// src/paginas/carta/Carta.tsx
import { useNavigate } from 'react-router-dom'

type Item = { nombre: string; precio: string }

const entrantes: Item[] = [
  { nombre: 'Provoleta rúcula y tomate seco', precio: '12€' },
  { nombre: 'Chorizo criollo y morcilla', precio: '11,5€' },
  { nombre: 'Ensalada César', precio: '13€' },
  { nombre: 'Ensalada tropical', precio: '14€' },
  { nombre: 'Empanada criolla', precio: '3,5€' },
  { nombre: 'Empanada jamón y queso', precio: '3,5€' },
  { nombre: 'Burrata con romesco', precio: '12€' },
  { nombre: 'Nachos con guacamole y chilli con carne', precio: '13€' },
  { nombre: 'Salmorejo', precio: '9€' },
]

const principales: Item[] = [
  { nombre: 'Asado banderita', precio: '18€' },
  { nombre: 'Entraña a la brasa', precio: '17€' },
  { nombre: 'Entrecot de ternera', precio: '22€' },
  { nombre: 'Milanesa clásica', precio: '15€' },
  { nombre: 'Milanesa a caballo (con dos huevos)', precio: '17€' },
  { nombre: 'Milanesa napolitana', precio: '17€' },
  { nombre: 'Milanesa peperoni', precio: '17€' },
  { nombre: 'Milanesa a la fugazzeta', precio: '16€' },
  { nombre: 'Milanesa a los 4 quesos', precio: '17€' },
]

const postres: Item[] = [
  { nombre: 'Flan con dulce de leche', precio: '6€' },
  { nombre: 'Panqueque', precio: '6€' },
]

export default function Carta() {
  const navigate = useNavigate()
  const bg = `${import.meta.env.BASE_URL}images/fotocart.jpg`

  return (
    <main
      className="relative min-h-screen overflow-hidden"
      style={{
        backgroundImage: `url('${bg}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: '#1f2937',
      }}
    >
      {/* Velo para contraste */}
      <div className="absolute inset-0 bg-black/30 z-0" />

      {/* Botón volver atrás */}
      <button
        onClick={() => navigate('/')}
        className="absolute top-5 left-5 z-20 flex items-center gap-2 text-white hover:text-yellow-300 transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        <span className="hidden sm:inline">Volver</span>
      </button>

      {/* Contenedor principal ensanchado con panel translúcido */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 pt-28 pb-24 text-white">
        <div className="rounded-3xl bg-white/10 backdrop-blur-sm ring-1 ring-white/15 shadow-2xl px-6 sm:px-10 md:px-12 py-10 md:py-12">
          {/* Título */}
          <header className="text-center md:text-left mb-10">
            <h1
              className="tracking-wider mb-3"
              style={{
                fontFamily: 'RockSalt',
                fontSize: 'clamp(3rem, 3.8vw, 3.2rem)',
                lineHeight: 1.1,
              }}
            >
              Nuestra carta
            </h1>
            <p className="opacity-90 text-xl sm:text-lg md:text-xl">
              Producto seleccionado, punto exacto y tradición argentina.
            </p>
          </header>

          {/* Grid de bloques: 1 col en móvil, 2 en md, 3 en xl */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 md:gap-12">
            <Bloque titulo="Entrantes" items={entrantes} />
            <Bloque titulo="Plato principal" items={principales} />
            <Bloque titulo="Postres" items={postres} />
          </div>

          <p className="mt-10 text-center text-sm md:text-base opacity-80">
            * Precios en euros. Consulta alergénicos con nuestro equipo.
          </p>
        </div>
      </section>
    </main>
  )
}

function Bloque({ titulo, items }: { titulo: string; items: Item[] }) {
  return (
    <section>
      <h2 className="text-center md:text-left text-4xl md:text-3xl font-semibold mb-5">
        {titulo}
      </h2>

      <div className="divide-y divide-white/20">
        {items.map((it) => (
          <Fila key={`${titulo}-${it.nombre}`} nombre={it.nombre} precio={it.precio} />
        ))}
      </div>
    </section>
  )
}

function Fila({ nombre, precio }: Item) {
  return (
    <div className="flex items-baseline gap-4 py-3.5 md:py-4">
      {/* Nombre + puntos de guía */}
      <div className="flex-1 pr-3">
        <div className="flex items-baseline">
          <span className="text-lg md:text-xl xl:text-[22px] leading-tight">{nombre}</span>
          <span className="mx-3 flex-1 border-b border-dotted border-white/35 translate-y-[8px]" />
        </div>
      </div>

      {/* Precio con numerales tabulares */}
      <div className="shrink-0 pl-1">
        <span className="text-lg md:text-xl xl:text-[22px] font-semibold tabular-nums tracking-tight">
          {precio}
        </span>
      </div>
    </div>
  )
}

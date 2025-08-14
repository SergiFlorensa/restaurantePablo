// src/paginas/carta/Carta.tsx
import React from 'react'
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
  const bg = `${import.meta.env.BASE_URL}images/pi.jpg`

  return (
    <main
      className="relative min-h-screen overflow-hidden"
      style={{
        backgroundImage: `url('${bg}')`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundColor: '#1f2937',
      }}
    >
      {/* Velo para contraste */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Botón volver atrás */}
      <button
        onClick={() => navigate('/')}
        className="absolute top-5 left-5 z-20 flex items-center gap-2 text-white hover:text-yellow-300 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-7 h-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        <span className="hidden sm:inline">Volver</span>
      </button>

      <section className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 pt-28 pb-24 text-white">
        {/* Título */}
        <header className="text-center mb-10">
          <h1
            className="tracking-wider mb-2"
            style={{
              fontFamily: 'RockSalt',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              lineHeight: 1.1,
            }}
          >
            Nuestra carta
          </h1>
          <p className="opacity-90 text-base sm:text-lg">
            Producto seleccionado, punto exacto y tradición argentina.
          </p>
        </header>

        {/* Entradas */}
        <Bloque titulo="Entrantes" items={entrantes} />
        {/* Principales */}
        <Bloque titulo="Plato principal" items={principales} />
        {/* Postres */}
        <Bloque titulo="Postres" items={postres} />

        <p className="mt-10 text-center text-sm opacity-80">
          * Precios en euros. Consulta alergénicos con nuestro equipo.
        </p>
      </section>
    </main>
  )
}

function Bloque({ titulo, items }: { titulo: string; items: Item[] }) {
  return (
    <section className="mb-10">
      <h2 className="text-center sm:text-left text-2xl sm:text-3xl font-semibold mb-4">
        {titulo}
      </h2>
      <div className="divide-y divide-white/25">
        {items.map((it) => (
          <Fila key={`${titulo}-${it.nombre}`} nombre={it.nombre} precio={it.precio} />
        ))}
      </div>
    </section>
  )
}

function Fila({ nombre, precio }: Item) {
  return (
    <div className="flex items-baseline gap-3 py-3 sm:py-3.5">
      <div className="flex-1 pr-3">
        <div className="flex items-baseline">
          <span className="text-[17px] sm:text-[18px]">{nombre}</span>
          <span className="mx-2 flex-1 border-b border-dotted border-white/40 translate-y-[6px]" />
        </div>
      </div>
      <div className="shrink-0 pl-3">
        <span className="text-[17px] sm:text-[18px] font-medium tabular-nums">
          {precio}
        </span>
      </div>
    </div>
  )
}

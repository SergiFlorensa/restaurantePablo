// src/componentes/seccion-carta/SeccionCarta.tsx
import { Link } from 'react-router-dom'

type Categoria = {
  id: string
  title: string
  subtitle?: string
  image: string
}

const base = import.meta.env.BASE_URL // '' en dev  | '/restaurantePablo/' en Pages

const categorias: Categoria[] = [
  { id: 'entrantes', title: 'Entrantes', subtitle: 'Para compartir y empezar', image: `${base}images/nachos.jpg` },
  { id: 'principales', title: 'Plato principal', subtitle: 'Carnes y clásicos', image: `${base}images/milanesa.jpg` },
  { id: 'postres', title: 'Postres', subtitle: 'Dulces tradicionales', image: `${base}images/burrata.png` },
]

export default function SeccionCarta() {
  return (
    <section className="py-16 px-4 bg-[#d8c5ad]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-4xl tracking-widest text-[#265b4d]">La carta</h3>
          <h2
            className="text-3xl md:text-4xl font-bold text-[#265b4d] mt-2"
            style={{ fontFamily: 'RockSalt' }}
          >
            Sabores que te llevan de viaje
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categorias.map((c) => (
            <article
              key={c.id}
              className="relative group rounded-2xl overflow-hidden shadow-lg"
              role="button"
              tabIndex={0}
              aria-label={`Ir a ${c.title}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  const link = document.getElementById(`link-${c.id}`) as HTMLAnchorElement | null
                  link?.click()
                }
              }}
            >
              {/* ratio fijo para consistencia visual */}
              <div className="aspect-[4/5] w-full overflow-hidden bg-gray-100">
                <img
                  src={c.image}
                  alt={c.title}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                />
              </div>

              {/* overlay con CTA */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/45 to-transparent">
                <div className="mb-4">
                  <h4 className="text-xl font-semibold text-white">{c.title}</h4>
                  {c.subtitle && <p className="text-sm text-white/90">{c.subtitle}</p>}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-white/80">Ver sección</span>

                  <Link
                    id={`link-${c.id}`}
                    to={`/carta#${c.id}`}
                    onKeyDown={(_e) => {
  if (_e.key === 'Enter' || _e.key === ' ') {
    const link = document.getElementById(`link-${c.id}`) as HTMLAnchorElement | null
    link?.click()
  }
}}

                    className="inline-flex items-center gap-2 rounded-full bg-white/90 text-[#265b4d] px-3 py-1 text-sm font-medium shadow-sm hover:scale-105 transition-transform"
                    aria-label={`Ver sección ${c.title}`}
                  >
                    Ver
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/carta"
            className="inline-block px-6 py-3 rounded-full bg-[#265b4d] text-white font-semibold shadow hover:brightness-105 transition"
            aria-label="Ver carta completa"
          >
            Ver carta completa
          </Link>
        </div>
      </div>
    </section>
  )
}

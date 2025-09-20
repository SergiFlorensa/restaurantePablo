import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

const base = import.meta.env.BASE_URL // '' en dev | '/restaurantePablo/' en Pages

const productos = [
  {
    id: 'asado',
    nombre: 'Asado banderita',
    descripcion: 'Costilla superficial con grasa dorada lentamente para un corte suave y jugoso.',
    imagen: `${base}images/asabande.webp`,
    badge: 'Costilla',
    puntos: [
      'Doramos a fuego directo y terminamos a altura media para un interior meloso.',
      'Servimos con chimichurri verde y sal ahumada.',
      'Maridaje sugerido: Malbec reserva.',
    ],
  },
  {
    id: 'entrana',
    nombre: 'Entraña a la brasa',
    descripcion: 'Corte del diafragma con sabor intenso y textura delicada, sellado en brasa viva.',
    imagen: `${base}images/entraña.jpg`,
    badge: 'Diafragma',
    puntos: [
      'Sellado rapido para encerrar jugos, reposo controlado antes de servir.',
      'Acompanada con manteca de hierbas y maiz asado.',
      'Maridaje sugerido: Cabernet Franc.',
    ],
  },
  {
    id: 'vacio',
    nombre: 'Vacio madurado',
    descripcion: 'Parte abdominal con fibras marcadas, madurada y cortada al momento.',
    imagen: `${base}images/vacio.webp`,
    badge: 'Abdominal',
    puntos: [
      'Maduracion 21 dias en camara controlada.',
      'Glaseado final con reduccion de Malbec y aji molido.',
      'Maridaje sugerido: Bonarda joven.',
    ],
  },
] as const

const intervalMs = 8000
const bulletActivo = '\u25CF'
const bulletInactivo = '\u25CB'

export default function SeccionCortes() {
  const [indiceActivo, setIndiceActivo] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndiceActivo((actual) => (actual + 1) % productos.length)
    }, intervalMs)
    return () => clearInterval(id)
  }, [])

  const productoActivo = productos[indiceActivo]

  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at top left, rgba(38,91,77,0.18), transparent 50%), radial-gradient(circle at bottom right, rgba(201,151,69,0.22), transparent 55%)',
        }}
        aria-hidden
      />
      <div className="absolute -top-24 right-1/3 h-56 w-56 rounded-full bg-[#14212B]/25 blur-3xl" aria-hidden />
      <div className="absolute bottom-[-12rem] left-1/4 h-72 w-72 rounded-full bg-[#c99745]/25 blur-3xl" aria-hidden />

      <div className="relative z-10 max-w-6xl mx-auto grid gap-12 lg:grid-cols-[1.05fr,0.95fr] items-center px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/80 text-[#14212B] px-5 py-2 text-xs tracking-[0.32em] uppercase shadow-sm">
            Cortes insignia
          </div>

          <h2 className="text-4xl sm:text-5xl font-light text-[#14212B] leading-tight">
            Carne seleccionada, textura precisa y fuego que respeta cada fibra.
          </h2>

          <p className="max-w-xl text-lg sm:text-xl text-[#1f2727]/80 leading-relaxed">
            Tres cortes que cuentan quienes somos: tiempo, paciencia y una parrilla que escucha. Selecciona un corte
            para descubrir como lo trabajamos antes de llegar a tu mesa.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              to="/carta#principales"
              className="inline-flex items-center gap-2 rounded-full bg-[#14212B] text-white px-6 py-3 text-sm sm:text-base tracking-[0.18em] uppercase hover:brightness-110 transition"
            >
              Ver principales
            </Link>
            <Link
              to="/nuestro-concepto"
              className="inline-flex items-center gap-2 rounded-full bg-white/80 text-[#14212B] px-6 py-3 text-sm sm:text-base tracking-[0.18em] uppercase shadow hover:bg-white transition"
            >
              Nuestro ritual
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 text-xs uppercase tracking-[0.28em] text-[#265b4d]/70">
            <span>Origen controlado</span>
            <span>Maduracion dirigida</span>
            <span>Punto exacto</span>
          </div>
        </div>

        <div className="grid gap-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={productoActivo.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden rounded-[2.5rem] border border-white/50 bg-white/80 shadow-2xl backdrop-blur-md"
            >
              <motion.div
                key={`${productoActivo.id}-bg`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0"
                style={{
                  backgroundImage: `url('${productoActivo.imagen}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  filter: 'saturate(95%) brightness(0.9)',
                }}
                aria-hidden
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#14212B]/80 via-black/40 to-black/50" aria-hidden />

              <div className="relative z-10 p-8 sm:p-10 text-white space-y-6">
                <div className="flex items-center gap-3">
                  <span className="rounded-full border border-white/50 px-3 py-1 text-xs tracking-[0.3em] uppercase">
                    {productoActivo.badge}
                  </span>
                  <span className="h-px flex-1 bg-white/30" aria-hidden />
                </div>

                <div className="space-y-3">
                  <h3 className="text-3xl sm:text-4xl font-semibold tracking-tight">{productoActivo.nombre}</h3>
                  <p className="text-base sm:text-lg text-white/85 leading-relaxed">
                    {productoActivo.descripcion}
                  </p>
                </div>

                <ul className="space-y-3 text-sm sm:text-base">
                  {productoActivo.puntos.map((punto) => (
                    <li key={punto} className="flex items-start gap-3 text-white/80">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#c99745]" aria-hidden />
                      <span>{punto}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex flex-col gap-4">
            {productos.map((producto, index) => {
              const activo = indiceActivo === index
              return (
                <motion.button
                  key={producto.id}
                  type="button"
                  onClick={() => setIndiceActivo(index)}
                  onMouseEnter={() => setIndiceActivo(index)}
                  className={`group flex items-center gap-4 rounded-2xl border px-4 py-3 text-left transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#14212B] ${
                    activo
                      ? 'border-[#14212B] bg-white shadow-lg text-[#14212B]'
                      : 'border-white/70 bg-white/60 hover:border-[#14212B]/50 text-[#1f2727]/70'
                  }`}
                  whileHover={{ scale: 1.01 }}
                >
                  <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[#265b4d]/70">
                    0{index + 1}
                  </span>
                  <div className="flex-1">
                    <p className="text-lg font-semibold text-[#14212B]">{producto.nombre}</p>
                    <p className="text-xs uppercase tracking-[0.2em] text-[#265b4d]">{producto.badge}</p>
                  </div>
                  <span className="h-8 w-8 rounded-full border border-[#14212B]/30 flex items-center justify-center text-[#14212B]/70">
                    {activo ? bulletActivo : bulletInactivo}
                  </span>
                </motion.button>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

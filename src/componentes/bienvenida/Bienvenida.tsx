import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Flame, Sparkles, UtensilsCrossed } from 'lucide-react'

const fondo = `${import.meta.env.BASE_URL}images/patagonia.jpg`

const pilares = [
  {
    titulo: 'Parrilla paciente',
    descripcion:
      'Cada servicio comienza encendiendo quebracho y encina. Las brasas dictan el ritmo y nosotros solo acompañamos.',
    Icono: Flame,
  },
  {
    titulo: 'Producto con origen',
    descripcion:
      'Seleccionamos cortes argentinos y productores locales de temporada para mantener viva la memoria del sabor.',
    Icono: UtensilsCrossed,
  },
  {
    titulo: 'Sobremesa viva',
    descripcion:
      'Luz cálida, música criolla y un servicio cercano que se toma tiempo para contar la historia de cada plato.',
    Icono: Sparkles,
  },
] as const

const datos = [
  { etiqueta: 'Fundado', valor: '2015' },
  { etiqueta: 'Cortes madurados', valor: '21 días' },
  { etiqueta: 'Plazas', valor: '45 comensales' },
] as const

export default function Bienvenida() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundImage: `url('${fondo}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-white/45" aria-hidden />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, transparent 55%, #d8c5ad 100%)',
        }}
        aria-hidden
      />
      <div
        className="absolute top-0 left-0 h-32 w-full bg-gradient-to-b from-[#d8c5ad] to-transparent pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-[#d8c5ad] to-transparent pointer-events-none"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.05fr,0.95fr] items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="space-y-8 max-w-xl mx-auto lg:mx-0 text-[#14212B]"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-5 py-2 text-xs uppercase tracking-[0.32em] text-[#14212B] shadow-sm">
              Sobre nosotros
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light leading-tight">
              Pasión, fuego y raíces argentinas en el corazón de Reus
            </h2>

            <p className="text-lg sm:text-xl leading-relaxed text-[#1f2727]/85">
              Somos una parrilla argentina contemporánea: respetamos el ritmo de las brasas, honramos el producto y
              diseñamos cada servicio para que te sientas en casa desde que cruzas la puerta.
            </p>

            <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.24em] text-[#265b4d]">
              {datos.map(({ etiqueta, valor }) => (
                <span key={etiqueta} className="rounded-full bg-white/70 px-4 py-2 shadow-sm">
                  <strong className="mr-2 text-[#14212B]">{valor}</strong>
                  {etiqueta}
                </span>
              ))}
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {pilares.map(({ titulo, descripcion, Icono }) => (
                <motion.article
                  key={titulo}
                  whileHover={{ translateY: -4 }}
                  className="rounded-3xl border border-white/50 bg-white/75 p-5 shadow backdrop-blur-sm"
                >
                  <div className="flex items-center gap-3 text-[#265b4d]">
                    <Icono className="h-5 w-5" />
                    <h3 className="text-lg font-semibold text-[#14212B]">{titulo}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-[#1f2727]/80">{descripcion}</p>
                </motion.article>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-[2.5rem] border border-white/60 bg-white/70 p-6 sm:p-8 shadow-xl backdrop-blur-md text-[#14212B] space-y-6 max-w-lg mx-auto"
          >
            <div className="space-y-3">
              <h3 className="text-2xl sm:text-3xl font-semibold">Nuestra historia</h3>
              <p className="text-sm sm:text-base leading-relaxed text-[#1f2727]/80">
                Nacimos en 2015 con una idea simple: traer la sobremesa argentina a una casa abierta en Reus. Elegimos
                cada detalle —de la luz a la vajilla— para que puedas desconectar, compartir y recordar.
              </p>
            </div>

            <ul className="space-y-4 text-sm sm:text-base text-[#1f2727]/80">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#c99745]" aria-hidden />
                Cortes seleccionados de productores argentinos y catalanes, madurados el tiempo justo.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#c99745]" aria-hidden />
                Carta líquida con vinos del Cono Sur y la DO Montsant, pensada para conversar sin prisas.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#c99745]" aria-hidden />
                Equipo de sala cercano que acompaña y explica cada punto de la parrilla.
              </li>
            </ul>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                to="/nuestro-concepto"
                className="inline-flex items-center gap-2 rounded-full bg-[#14212B] px-5 py-3 text-xs uppercase tracking-[0.24em] text-white hover:brightness-110 transition"
              >
                Conocer más
              </Link>
              <Link
                to="/carta#top"
                className="inline-flex items-center gap-2 rounded-full border border-[#14212B]/30 bg-white/80 px-5 py-3 text-xs uppercase tracking-[0.24em] text-[#14212B] shadow hover:bg-white transition"
              >
                Ver carta
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

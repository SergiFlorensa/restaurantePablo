import { ReactTyped } from 'react-typed'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const detalles = [
  {
    titulo: 'Fuego paciente',
    descripcion:
      'Encendemos quebracho y encina con tiempo. La brasa dicta el ritmo y cada corte se cocina sin prisas.',
  },
  {
    titulo: 'Producto con historia',
    descripcion:
      'Cortes argentinos seleccionados, verduras de temporada y especias que viajaron en maletas familiares.',
  },
  {
    titulo: 'Sobremesa viva',
    descripcion:
      'Luz cálida, música criolla y un servicio que se toma tiempo para contar el porqué de cada plato.',
  },
]

const valores = ['Parrilla argentina', 'Bodega curada', 'Empanadas a mano']

export default function SeccionConcepto() {
  return (
    <section className="group relative overflow-hidden py-24 px-4 sm:px-6">
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at top left, rgba(201,151,69,0.25), transparent 55%), radial-gradient(circle at bottom right, rgba(20,33,43,0.25), transparent 50%)',
        }}
        aria-hidden
      />

      <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-[#14212B]/20 blur-3xl" aria-hidden />
      <div className="absolute -bottom-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[#c99745]/20 blur-3xl" aria-hidden />

      <div className="relative z-10 max-w-6xl mx-auto grid gap-14 lg:grid-cols-[1.15fr,0.85fr] items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/80 text-[#14212B] px-5 py-2 text-xs tracking-[0.32em] uppercase shadow-sm">
            Nuestro concepto
          </div>

          <h2 className="text-4xl sm:text-5xl font-light text-[#14212B] leading-snug">
            Una casa donde el fuego, el producto y la hospitalidad hablan por sí mismos. Aquí vivirás{' '}
            <span className="text-[#265b4d]">
              <ReactTyped
                strings={[
                  'parrilla auténtica.',
                  'cortes elegidos con cariño.',
                  'sobremesas que no miran el reloj.',
                  'un viaje sensorial por Argentina.',
                  'un servicio cercano y atento.',
                ]}
                typeSpeed={55}
                backSpeed={30}
                backDelay={2200}
                loop
              />
            </span>
          </h2>

          <p className="max-w-xl text-lg sm:text-xl text-[#1f2727]/80 leading-relaxed">
            Tradición argentina sin prisas, técnica afinada en Reus y una carta que evoluciona según el mercado. Trae
            apetito: nosotros ponemos el fuego y las historias.
          </p>

          <div className="flex flex-wrap gap-3">
            {valores.map((valor) => (
              <span
                key={valor}
                className="inline-flex items-center gap-2 rounded-full border border-[#265b4d]/20 bg-white/70 px-4 py-2 text-xs uppercase tracking-[0.18em] text-[#265b4d]"
              >
                {valor}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              to="/nuestro-concepto"
              className="inline-flex items-center gap-2 rounded-full bg-[#14212B] text-white px-6 py-3 text-sm sm:text-base tracking-[0.18em] uppercase hover:brightness-110 transition"
            >
              Conoce el concepto
            </Link>
            <Link
              to="/carta#top"
              className="inline-flex items-center gap-2 rounded-full bg-white/80 text-[#14212B] px-6 py-3 text-sm sm:text-base tracking-[0.18em] uppercase shadow hover:bg-white transition"
            >
              Ver la carta
            </Link>
          </div>
        </motion.div>

        <div className="grid gap-5">
          {detalles.map((detalle, index) => (
            <motion.article
              key={detalle.titulo}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="group relative overflow-hidden rounded-3xl border border-white/60 bg-white/75 p-6 sm:p-7 shadow-lg backdrop-blur-md"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
              <div className="relative z-10 space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#265b4d]/70">0{index + 1}</p>
                <h3 className="text-2xl font-semibold text-[#14212B]">{detalle.titulo}</h3>
                <p className="text-sm sm:text-base text-[#1f2727]/80 leading-relaxed">
                  {detalle.descripcion}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}


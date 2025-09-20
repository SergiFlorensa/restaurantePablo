import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Flame, Mountain, Sparkles } from 'lucide-react'

import parrillaImg from '../../assets/carne.jpg'
import mercadoImg from '../../assets/baires.jpg'
import chefImg from '../../assets/cocinerooo.png'

const pilares = [
  {
    titulo: 'Fuego y tecnica',
    icono: Flame,
    resumen: 'Domamos la brasa con maderas nobles y paciencia argentina.',
    detalle:
      'Cada servicio arranca encendiendo quebracho y encina. Controlamos brasa y altura para marcar el punto exacto sin prisas.',
  },
  {
    titulo: 'Producto con origen',
    icono: Mountain,
    resumen: 'Seleccionamos cortes argentinos y productores locales afines.',
    detalle:
      'Buscamos vacunos criados en libertad y complementamos con temporada mediterranea. Las empanadas se rellenan y sellan a mano.',
  },
  {
    titulo: 'Hospitalidad cercana',
    icono: Sparkles,
    resumen: 'Queremos sobremesas largas, charlas y una sala que abrace.',
    detalle:
      'Iluminacion tenue, musica criolla y un equipo que explica, recomienda y comparte historias de cada plato.',
  },
] as const

const hitos = [
  {
    anio: '2004',
    titulo: 'Raices en Buenos Aires',
    descripcion:
      'Pablo aprende el oficio en parrillas de barrio, cuidando brasas y escuchando a los viejos maestros.',
  },
  {
    anio: '2012',
    titulo: 'Llegada a Cataluna',
    descripcion:
      'Viaja a Reus con cuadernos de recetas y la idea de compartir el ritual argentino con nuevos amigos.',
  },
  {
    anio: '2020',
    titulo: 'Nace Victoria Nueva',
    descripcion:
      'Reunimos cocina, vino y sobremesa en un espacio intimo, pensado para disfrutar sin prisa.',
  },
  {
    anio: 'Hoy',
    titulo: 'Concepto vivo',
    descripcion:
      'Seguimos afinando la carta segun los cortes disponibles, la estacion y lo que nos inspira cada semana.',
  },
] as const

const experiencia = [
  'Cortes madurados un minimo de 21 dias.',
  'Empanadas selladas a mano cada manana.',
  'Bodega con etiquetas argentinas y catalanas.',
  'Postres caseros con dulce de leche y citricos.',
] as const

export default function NuestroConcepto() {
  const navigate = useNavigate()
  const [pilarActivo, setPilarActivo] = useState(0)
  const heroBg = `${import.meta.env.BASE_URL}images/fireee.jpg`

  return (
    <div className="bg-[#f7f2e5] text-[#1f2727]">
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <button
          onClick={() => navigate('/')}
          className="absolute top-5 left-5 z-20 flex items-center gap-2 text-white hover:text-orange-300 transition-colors"
          type="button"
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
        <img
          src={heroBg}
          alt="Brasas encendidas"
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-3xl text-center px-6 py-24 text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl font-light tracking-[0.35em] uppercase"
            style={{ letterSpacing: '0.35em' }}
          >
            Nuestro concepto
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 text-xl sm:text-2xl font-light"
          >
            Fuego lento, memoria argentina y una sala pensada para quedarse.
          </motion.p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#265b4d]" style={{ fontFamily: 'RockSalt' }}>
              Tres pilares que nos definen
            </h2>
            <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-[#1f2727]/80">
              Cada plato nace de un equilibrio entre tecnica, producto y hospitalidad. Asi entendemos la experiencia Victoria.
            </p>
          </header>

          <div className="grid gap-6 md:grid-cols-3">
            {pilares.map((pilar, index) => {
              const Icono = pilar.icono
              const activo = pilarActivo === index

              return (
                <article
                  key={pilar.titulo}
                  role="button"
                  tabIndex={0}
                  aria-pressed={activo}
                  aria-expanded={activo}
                  onMouseEnter={() => setPilarActivo(index)}
                  onFocus={() => setPilarActivo(index)}
                  onClick={() => setPilarActivo(index)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      event.preventDefault()
                      setPilarActivo(index)
                    }
                  }}
                  className={`relative rounded-3xl border border-transparent bg-white/80 px-6 py-8 shadow-lg transition duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-[#c99745] md:min-h-[320px] ${activo ? 'border-[#c99745] bg-white shadow-xl' : 'hover:border-[#c99745]/60 hover:-translate-y-1'}`}
                >
                  <div className={`flex items-center justify-center w-14 h-14 rounded-full mb-6 transition-colors ${activo ? 'bg-[#c99745] text-white' : 'bg-[#265b4d]/10 text-[#265b4d]'}`}>
                    <Icono className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-semibold text-[#265b4d]">{pilar.titulo}</h3>
                  <p className="mt-4 text-base text-[#1f2727]/80">{pilar.resumen}</p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: activo ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`mt-4 text-sm sm:text-base text-[#1f2727]/70 leading-relaxed ${activo ? 'max-h-40' : 'max-h-0 overflow-hidden md:max-h-40'}`}
                  >
                    {pilar.detalle}
                  </motion.p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl shadow-xl"
          >
            <img
              src={parrillaImg}
              alt="Parrilla argentina"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <p
              className="absolute bottom-6 left-6 right-6 text-lg text-white"
              style={{ fontFamily: 'RockSalt' }}
            >
              El fuego es nuestro ingrediente secreto
            </p>
          </motion.div>

          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#265b4d]">
              De Argentina a Reus
            </h2>
            <p className="mt-4 text-lg text-[#1f2727]/80">
              Nuestro concepto reune el legado parrillero de Buenos Aires con la temporada mediterranea. Cada paso tiene historia.
            </p>

            <div className="mt-8 relative border-l border-[#c99745]/50 pl-6 space-y-10">
              {hitos.map((hito, index) => (
                <motion.article
                  key={hito.anio}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="relative"
                >
                  <span className="absolute -left-3 top-1 flex h-6 w-6 items-center justify-center rounded-full border border-[#c99745] bg-white text-xs font-semibold text-[#c99745]">
                    {hito.anio}
                  </span>
                  <h3 className="text-xl font-semibold text-[#265b4d]">{hito.titulo}</h3>
                  <p className="mt-2 text-base text-[#1f2727]/75 leading-relaxed">{hito.descripcion}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-[0.9fr_1.1fr] items-center">
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden rounded-3xl shadow-xl"
          >
            <img
              src={mercadoImg}
              alt="Mercado argentino"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="bg-white/90 rounded-3xl p-8 shadow-lg"
          >
            <h2 className="text-3xl font-semibold text-[#265b4d]">
              Experiencia sensorial
            </h2>
            <p className="mt-4 text-lg text-[#1f2727]/80">
              Queremos que cada visita cuente una historia distinta. Estos son algunos detalles que siempre vas a encontrar:
            </p>
            <ul className="mt-6 space-y-4 text-base text-[#1f2727]/80">
              {experiencia.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-2 w-2 flex-shrink-0 rounded-full bg-[#c99745]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#265b4d] text-white py-16 px-4">
        <div className="max-w-5xl mx-auto grid gap-10 md:grid-cols-[auto,1fr] items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4 }}
            className="relative mx-auto h-44 w-44 overflow-hidden rounded-full border-4 border-[#c99745] shadow-xl"
          >
            <img src={chefImg} alt="Chef Pablo" className="h-full w-full object-cover" loading="lazy" />
          </motion.div>

          <div>
            <p className="text-xl md:text-2xl font-light italic leading-relaxed">
              "Aprendi que el fuego nunca se apura. Las brasas hablan, solo hay que saber escucharlas."
            </p>
            <p className="mt-6 text-base text-white/80">
              Pablo trae recuerdos de las reuniones familiares en Argentina, donde el asado era excusa para compartir. Hoy sigue cuidando cada corte con la misma dedicacion.
            </p>
            <Link
              to="/carta"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-sm font-semibold uppercase tracking-[0.15em] transition hover:bg-white/20"
            >
              Ver carta
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto rounded-3xl border border-[#c99745]/40 bg-white/90 p-10 text-center shadow-xl">
          <p className="text-2xl md:text-3xl text-[#265b4d]" style={{ fontFamily: 'RockSalt' }}>
            Trae apetito. Nosotros ponemos el fuego, las historias y la sobremesa.
          </p>
          <p className="mt-6 text-base text-[#1f2727]/70">
            Si quieres saber que estamos preparando esta semana, acercate por nuestra barra o echale un vistazo a la carta.
          </p>
          <Link
            to="/carta"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-[#265b4d] px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:brightness-105"
          >
            Carta Victoria
          </Link>
        </div>
      </section>
    </div>
  )
}

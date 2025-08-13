import { ReactTyped } from 'react-typed'
import { Link } from 'react-router-dom'

export default function SeccionConcepto() {
  return (
    <section className="py-20 px-4 text-center bg-transparent text-black">
      <div className="max-w-3xl mx-auto">
        <h2
          className="text-3xl sm:text-4xl font-bold mb-6"
          style={{ color: '#265b4d' }}
        >
          En nuestro restaurante vivirás{' '}
          <ReactTyped
            strings={[
              'sabor auténtico de parrilla.',
              'cortes seleccionados y fuego paciente.',
              'momentos para compartir y recordar.',
              'recetas que cuentan historias.',
              'vino, charla y buena compañía.',
            ]}
            typeSpeed={60}
            backSpeed={30}
            backDelay={2000}
            loop
          />
        </h2>

        <Link
          to="/nuestro-concepto"
          className="inline-block mt-6 px-8 py-3 rounded-full text-sm font-semibold transition"
          style={{
            backgroundColor: '#265b4d',
            color: '#f4f7f6',
          }}
        >
          CONOCE NUESTRO CONCEPTO
        </Link>
      </div>
    </section>
  )
}

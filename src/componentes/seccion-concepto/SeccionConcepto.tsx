// src/componentes/seccion-regalo/SeccionConcepto.tsx

import {ReactTyped} from 'react-typed'
import { Link } from 'react-router-dom'

export default function SeccionConcepto() {
  return (
    <section className="py-20 px-4 text-center bg-transaprent text-black">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          En nuestro restaurante vivirás{' '}
          <ReactTyped
            strings={[
              'la esencia argentina.',
              'una experiencia con sabor a hogar.',
              'el calor de una buena mesa.',
              'el alma de Buenos Aires.',
              'cocina con historia y corazón.',
            ]}
            typeSpeed={60}
            backSpeed={30}
            backDelay={2000}
            loop
          />
        </h2>

        <Link
          to="/nuestro-concepto"
          className="inline-block mt-6 bg-black text-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-gray-800 transition"
        >
          CONOCE NUESTRA FILOSOFÍA
        </Link>
      </div>
    </section>
  )
}

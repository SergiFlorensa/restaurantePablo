import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function BotonMenu() {
  const [abierto, setAbierto] = useState(false)

  return (
    <>
      {/* Botón siempre visible */}
      <button
        onClick={() => setAbierto(true)}
        className="z-50"
        aria-label="Abrir menú"
      >
        <img
          src="/icons/menu.png"
          alt="Icono de menú"
          width={32}
          height={32}
        />
      </button>

      {/* Modal emergente */}
      {abierto && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-60">
          <div className="relative w-[90%] max-w-md bg-white p-6 rounded-lg shadow-lg text-black">
            {/* Botón cerrar */}
            <button
              onClick={() => setAbierto(false)}
              className="absolute top-4 right-4 text-2xl"
              aria-label="Cerrar menú"
            >
              ✕
            </button>

            {/* Navegación */}
            <nav className="mt-8 space-y-4 text-center font-medium">
              <Link to="/inicio" onClick={() => setAbierto(false)}>Inicio</Link>
              <Link to="/nuestra-historia" onClick={() => setAbierto(false)}>Nuestra historia</Link>
              <Link to="/carta" onClick={() => setAbierto(false)}>Carta</Link>
              <Link to="/contacto" onClick={() => setAbierto(false)}>Contacto</Link>
            </nav>

            {/* Dirección */}
            <div className="mt-6 text-sm text-center font-semibold">
              <h3 className="mb-1 uppercase tracking-widest">Dirección y contacto</h3>
              <p>
                Pl. Virgen de los Reyes<br />
                2<br />
                41004 Sevilla<br />
                +34 954 21 45 25
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

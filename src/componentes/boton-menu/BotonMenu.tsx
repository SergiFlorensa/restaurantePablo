import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function BotonMenu() {
  const [abierto, setAbierto] = useState(false)

  return (
    <>
      {/* Botón hamburguesa */}
      <button
        onClick={() => setAbierto(true)}
        className="fixed top-4 left-4 z-50"
        aria-label="Abrir menú"
      >
        <img
          src="/icons/menu.png"
          alt="Icono de menú"
          width={40}
          height={40}
        />
      </button>

      {/* Menú lateral */}
      <aside className={`fixed top-0 left-0 h-full w-full 
        backdrop-blur-sm bg-black/40 text-white shadow-lg 
        transform transition-transform duration-300 ease-in-out 
        ${abierto ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="relative h-full flex flex-col px-6 pt-20 pb-6 overflow-y-auto">
          {/* Botón cerrar */}
          <button
            onClick={() => setAbierto(false)}
            className="absolute top-5 right-5 text-3xl z-50"
            aria-label="Cerrar menú"
          >
            ✕
          </button>

          {/* Contenido en 2 columnas para <1138px */}
          <div className="flex flex-col gap-8 max-[1138px]:block hidden">
            <div className="flex flex-row justify-between items-start gap-8">
              {/* Menús */}
              <nav className="flex flex-col gap-2.5 sm:gap-3 md:gap-4 text-left font-semibold text-base sm:text-lg md:text-3xl w-1/2">
                {[
                  { to: '/carta', label: 'Carta' },
                  { to: '/nuestro-concepto', label: 'Nuestro concepto' },
                  { to: '/nuestra-historia', label: 'Historia' },
                  { to: '/contacto', label: 'Contacto' },
                ].map(({ to, label }) => (
                  <Link
                    key={to}
                    to={to}
                    onClick={() => setAbierto(false)}
                    className="hover:-translate-y-1 transition-transform"
                  >
                    {label}
                  </Link>
                ))}
              </nav>

              {/* Redes sociales y dirección */}
              <div className="flex flex-col gap-4 w-1/2 text-sm sm:text-base md:text-lg leading-snug font-light">
                <div className="flex gap-4">
                  <a
                    href="https://www.facebook.com/tu-restaurante"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="hover:scale-110 transition-transform"
                  >
                    <img src="/icons/facebook.png" alt="Facebook" className="w-7 h-7 sm:w-8 sm:h-8" />
                  </a>
                  <a
                    href="https://www.instagram.com/tu-restaurante"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="hover:scale-110 transition-transform"
                  >
                    <img src="/icons/insta.png" alt="Instagram" className="w-7 h-7 sm:w-8 sm:h-8" />
                  </a>
                </div>

                <div>
                  Carrer Camí de Riudoms, 34<br />
                  43202 Reus, Tarragona
                </div>
              </div>
            </div>
          </div>

          {/* Contenido en una columna desde 1138px */}
          <div className="hidden min-[1138px]:flex flex-col gap-6 text-left font-semibold text-lg md:text-xl mt-6">
            {/* Menús */}
            <nav className="flex flex-col gap-4">
              {[
                { to: '/carta', label: 'Carta' },
                { to: '/nuestro-concepto', label: 'Nuestro concepto' },
                { to: '/nuestra-historia', label: 'Historia' },
                { to: '/contacto', label: 'Contacto' },
              ].map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  onClick={() => setAbierto(false)}
                  className="hover:-translate-y-1 transition-transform"
                >
                  {label}
                </Link>
              ))}
            </nav>

            {/* Redes sociales */}
            <div className="flex gap-5 mt-6">
              <a
                href="https://www.facebook.com/tu-restaurante"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:scale-110 transition-transform"
              >
                <img src="/icons/facebook.png" alt="Facebook" className="w-8 h-8" />
              </a>
              <a
                href="https://www.instagram.com/tu-restaurante"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:scale-110 transition-transform"
              >
                <img src="/icons/insta.png" alt="Instagram" className="w-8 h-8" />
              </a>
            </div>

            {/* Dirección */}
            <div className="mt-4 text-base md:text-lg leading-snug font-light">
              Carrer Camí de Riudoms, 34<br />
              43202 Reus, Tarragona
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}

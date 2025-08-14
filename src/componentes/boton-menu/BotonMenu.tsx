// src/components/boton-menu/BotonMenu.tsx
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ReactDOM from 'react-dom'

const iconInstagram = `${import.meta.env.BASE_URL}icons/insta.png`
const iconMenu = `${import.meta.env.BASE_URL}icons/bme.png`

export default function BotonMenu() {
  const [abierto, setAbierto] = useState(false)
  const [portalNode, setPortalNode] = useState<HTMLElement | null>(null)
  const [animarMenu, setAnimarMenu] = useState(false)

  /* Crear nodo portal */
  useEffect(() => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    setPortalNode(div)

    return () => {
      if (div.parentNode) div.parentNode.removeChild(div)
    }
  }, [])

  /* Activar animación con retardo al abrir el menú */
  useEffect(() => {
    if (abierto) {
      const timeout = setTimeout(() => setAnimarMenu(true), 100)
      return () => clearTimeout(timeout)
    } else {
      setAnimarMenu(false)
    }
  }, [abierto])

  const enlaces = [
    { to: '/carta', label: 'Carta' },
    { to: '/nuestro-concepto', label: 'Nuestro concepto' },
    { to: '/nuestra-historia', label: 'Historia' },
    { to: '/contacto', label: 'Contacto' },
  ]

  /* Menú lateral (portal) */
  const menu = (
    <aside
      className={`
        fixed inset-0 z-50
        w-full md:w-[27%]
        h-[100dvh] md:h-screen
        bg-[#a6522a] text-[#f7f2e5] shadow-lg
        transform transition-transform duration-300 ease-in-out
        ${abierto ? 'translate-x-0' : '-translate-x-full'}
      `}
      role="dialog"
      aria-modal="true"
    >
      <div className="relative min-h-full flex flex-col px-6 pt-20 pb-6 overflow-y-auto">
        <button
          onClick={() => setAbierto(false)}
          className="absolute top-5 right-5 text-3xl"
          aria-label="Cerrar menú"
          type="button"
        >
          ✕
        </button>

        <nav className="flex flex-col gap-6 text-3xl font-semibold">
          {enlaces.map(({ to, label }, index) => (
            <Link
              key={to}
              to={to}
              onClick={() => setAbierto(false)}
              className={`
                transition-all duration-300 ease-out transform
                ${animarMenu ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}
              `}
              style={{ transitionDelay: animarMenu ? `${index * 100}ms` : '0ms' }}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-6 mt-10 text-xl font-light">
          <div className="flex gap-6">
            <a
              href="https://www.instagram.com/tu-restaurante"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:scale-110 transition-transform"
            >
              <img src={iconInstagram} alt="Instagram" className="w-8 h-8" />
            </a>
          </div>
          <address className="not-italic leading-relaxed">
            Carrer Camí de Riudoms, 34<br />
            43202 Reus, Tarragona
          </address>
        </div>
      </div>
    </aside>
  )

  /* Botón hamburguesa — TAMAÑO AUMENTADO */
  const BotonHamburguesa = (
    <button
      onClick={() => setAbierto(true)}
      className="flex items-center gap-2"
      aria-label="Abrir menú"
      type="button"
    >
      <img
        src={iconMenu}
        alt="Icono de menú"
        // tamaño responsivo más grande: móvil -> sm -> md
        className="w-18 h-18 sm:w-18 sm:h-18 md:w-18 md:h-18 object-contain"
        width={64}
        height={64}
        draggable={false}
      />
    </button>
  )

  if (!portalNode) return BotonHamburguesa

  return (
    <>
      {BotonHamburguesa}
      {ReactDOM.createPortal(menu, portalNode)}
    </>
  )
}

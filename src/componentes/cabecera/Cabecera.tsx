import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import BotonMenu from '../boton-menu/BotonMenu'
import victonueva from '../../assets/victonueva.png'

const instagramIcon = `${import.meta.env.BASE_URL}icons/insbla.png`

export default function Cabecera() {
  const [esSticky, setEsSticky] = useState(false)
  const location = useLocation()

  useEffect(() => {
    // Si estamos en /carta o /nuestro-concepto, siempre fijo beige
    if (location.pathname === '/carta' || location.pathname === '/nuestro-concepto') {
      setEsSticky(true)
      return
    }

    // Si no, se comporta como antes (cambia con el scroll)
    const onScroll = () => setEsSticky(window.scrollY > 90)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [location.pathname])

  const fondo = esSticky
    ? 'bg-[#d8c5ad]/95 shadow-md backdrop-blur-sm'
    : 'bg-transparent'

  const alto = 'h-16 sm:h-20 md:h-24'

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${fondo}`}
    >
      <div
        className={`flex items-center justify-between ${alto} px-4 sm:px-6 md:px-8`}
      >
        {/* Izquierda: logo + menu */}
        <div className="flex items-center">
          <Link to="/" aria-label="Volver al inicio" className="inline-flex">
            <img
              src={victonueva}
              alt="Logo del restaurante Victoria"
              className="object-contain w-36 sm:w-36 md:w-44 transition-all"
            />
          </Link>
          <BotonMenu />
        </div>

        {/* Derecha: Instagram */}
        <a
          href="https://www.instagram.com/tu-restaurante"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <img
            src={instagramIcon}
            alt="Instagram"
            className="w-7 h-7 sm:w-7 sm:h-9 md:w-7 md:h-7"
          />
        </a>
      </div>
    </header>
  )
}

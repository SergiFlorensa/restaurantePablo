import { useEffect, useState } from 'react'
import BotonMenu from '../boton-menu/BotonMenu'
import victonueva from '../../assets/victonueva.png'

// ruta correcta para GitHub Pages y dev
const instagramIcon = `${import.meta.env.BASE_URL}icons/insbla.png`

export default function Cabecera() {
  const [esSticky, setEsSticky] = useState(false)

  /* Escucha el scroll una sola vez */
  useEffect(() => {
    const onScroll = () => setEsSticky(window.scrollY > 90)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Clases dinámicas */
  const fondo = esSticky
    ? 'bg-[#d8c5ad]/95 shadow-md backdrop-blur-sm'
    : 'bg-transparent'

  const alto = 'h-16 sm:h-20 md:h-24' // alto coherente en todos los tamaños

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${fondo}`}>
      <div className={`flex items-center justify-between ${alto} px-4 sm:px-6 md:px-8`}>
        {/* Izquierda: logo + menú */}
        <div className="flex items-center gap-2 sm:gap-4">
          <img
            src={victonueva}
            alt="Logo del restaurante Victoria"
            className="object-contain w-28 sm:w-36 md:w-44 transition-all"
          />
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
            className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
          />
        </a>
      </div>
    </header>
  )
}

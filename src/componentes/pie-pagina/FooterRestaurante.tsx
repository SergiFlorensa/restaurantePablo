// FooterRestaurante.tsx
import { MapPin, Phone } from 'lucide-react'

export default function FooterRestaurante() {
  return (
    <footer className="bg-[#14212B] text-[#C99745] w-full pt-14 pb-8 px-4 md:px-14">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-16">
        {/* Columna izquierda: Logo, RRSS, dirección */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Logo grande dorado */}
          <img
            src="/images/victonueva.png"
            alt="Logo Restaurante Victoria"
            className="w-40 mb-2"
            style={{ filter: 'brightness(0) saturate(100%) invert(66%) sepia(52%) saturate(614%) hue-rotate(6deg) brightness(92%) contrast(88%)' }} // simula logo dorado si el logo original es oscuro
          />
          <div className="flex flex-col gap-2 mt-4">
            <a href="https://www.instagram.com/tu-restaurante" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline">
              <img src="/icons/goldinsta.png" alt="Instagram" className="w-5 h-5" />
              Instagram
            </a>
            <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline">
              <svg className="w-5 h-5" fill="#C99745" viewBox="0 0 24 24"><path d="M22,12A10,10,0,1,0,12,22V14.89H10V12h2V10.24C12,8.35,13,7.5,14.66,7.5a14.69,14.69,0,0,1,1.35.07V9.73h-.77c-.77,0-.92.36-.92.89V12h1.84l-.24,2.89H15.32V22A10,10,0,0,0,22,12Z"/></svg>
              Facebook
            </a>
            <div className="flex items-center gap-2">
              <Phone size={18} />
              <span>+34 123 456 789</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={18} />
              <span>Carrer Camí de Riudoms, 34, 43202 Reus, Tarragona</span>
            </div>
          </div>
          {/* Legal */}
          <div className="mt-6 flex flex-wrap gap-4 text-xs text-[#C99745]/90">
            <a href="#" className="hover:underline">Aviso legal</a>
            <a href="#" className="hover:underline">Política de Privacidad</a>
            <a href="#" className="hover:underline">Condiciones de Reserva</a>
            <a href="#" className="hover:underline">Política de Cancelación</a>
          </div>
        </div>
        {/* Columna derecha: Contacto */}
        <div className="flex-1 flex flex-col items-center md:items-end justify-center gap-2">
          <h2 className="text-5xl font-light tracking-widest mb-2">CONTACTA</h2>
          <a href="mailto:contacto@restaurantevictoria.com" className="text-3xl md:text-4xl font-light hover:underline mb-2">
            victorianueva@gmail.com
          </a>
        </div>
      </div>
      {/* Línea inferior */}
     <div className="mt-12 text-center text-xs tracking-widest text-[#C99745]/90">
  © {new Date().getFullYear()} RESTAURANTE VICTORIA ·{' '}
  <button
    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    className="hover:underline"
  >
    VOLVER ARRIBA
  </button>
</div>

    </footer>
  )
}

/* Cabecera.tsx */

import BotonMenu from '../boton-menu/BotonMenu'

export default function Cabecera() {
  return (
    <header className="relative top-0 left-0 right-0 z-10">
      <div
        /* 👉 añadimos corte-diagonal y overflow-hidden */
        className="relative w-full cabecera-responsive corte-diagonal overflow-hidden"
        style={{ paddingTop: 'var(--pt)' }}
      >
        {/* Imagen de fondo */}
        <img
          src="/images/pier.jpg"
          alt="Imagen del restaurante"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />

        {/* Botón menú */}
        <div className="absolute top-4 left-4 z-50">
          <BotonMenu />
        </div>
      </div>
    </header>
  )
}

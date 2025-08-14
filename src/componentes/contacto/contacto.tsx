// src/componentes/contacto/contacto.tsx
import { useEffect } from 'react'
import ReactDOM from 'react-dom'

type Props = {
  open: boolean
  onClose: () => void
}

export default function Contacto({ open, onClose }: Props) {
  const modalRoot = document.body

  useEffect(() => {
    if (!open) return

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)

    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [open, onClose])

  if (!open) return null

  const modal = (
    <div
      aria-modal="true"
      role="dialog"
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
    >
      {/* Fondo oscuro */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Caja modal */}
      <div
        className="relative z-10 w-full max-w-xl mx-auto rounded-2xl shadow-2xl p-6 sm:p-8"
        style={{ backgroundColor: '#a6522a', color: '#fff' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          aria-label="Cerrar"
          className="absolute top-3 right-3 text-white hover:text-gray-200"
        >
          ✕
        </button>

        <h3 className="text-4xl font-semibold mb-2">Contacto</h3>
        <p className="text-xl mb-4 opacity-90">
          Aquí tienes la información para ponerte en contacto con nosotros.
        </p>

        <div className="space-y-3">
          <div>
            <div className="text-xl opacity-75">Email</div>
            <a
              href="mailto:contacto@restaurantevictoria.com"
              className="text-lg hover:underline"
            >
              contacto@restaurantevictoria.com
            </a>
          </div>

          <div>
            <div className="text-xl opacity-75">Teléfono</div>
            <a
              href="tel:+34123456789"
              className="text-lg hover:underline"
            >
              +34 123 456 789
            </a>
          </div>

          <div>
            <div className="text-xl opacity-75">Dirección</div>
            <div className="text-lg">
              Carrer Camí de Riudoms, 34<br />43202 Reus, Tarragona
            </div>
          </div>

          <div className="pt-2">
            <a
              href="https://goo.gl/maps/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-white text-[#a6522a] rounded-lg text-xl hover:opacity-90"
            >
              Ver en el mapa
            </a>
          </div>
        </div>
      </div>
    </div>
  )

  return ReactDOM.createPortal(modal, modalRoot)
}

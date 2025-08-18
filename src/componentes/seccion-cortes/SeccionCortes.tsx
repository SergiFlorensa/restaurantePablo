import { useRef } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

const base = import.meta.env.BASE_URL // '' en dev | '/restaurantePablo/' en Pages

const productos = [
  {
    nombre: 'Asado Banderita',
    descripcion:
      'Corte jugoso de costilla superficial con capa de grasa. Perfecto para parrilla tradicional.',
    descripcionExtra:
      'Carne de vacuno con marmoleado medio, sal gruesa y reposo: esencia del asado argentino.',
    imagen: `${base}images/asabande.webp`,
  },
  {
    nombre: 'Entraña',
    descripcion:
      'Corte delgado y sabroso del diafragma. Ideal para paladares exigentes.',
    descripcionExtra: '',
    imagen: `${base}images/entraña.jpg`, // evita ñ/tildes en filenames si puedes
  },
  {
    nombre: 'Vacío',
    descripcion:
      'Parte abdominal del animal, jugosa y con textura única. Muy valorada en parrillas argentinas.',
    descripcionExtra: '',
    imagen: `${base}images/vacio.webp`,
  },
]

export default function SeccionCortes() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return
    const amount = window.innerWidth < 768 ? window.innerWidth * 0.7 : 400
    scrollRef.current.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' })
  }

  return (
    <section className="w-full bg-transparent py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Título */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-[#265b4d]">
          Productos de calidad
        </h2>

        {/* Frase */}
        <p
          className="text-center mb-12 text-[#265b4d]"
          style={{
            fontFamily: 'RockSalt',
            fontSize: 'clamp(1.25rem,9vw,2.5rem)',
            lineHeight: '1.5',
          }}
        >
          Carne seleccionada, sabor inigualable
        </p>

        {/* Carrusel */}
        <div className="relative">
          {/* Flecha izq (visible en móvil y desktop) */}
          <button
            onClick={() => scroll('left')}
            aria-label="Mover izquierda"
            className="absolute z-20 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-md hover:bg-white transition left-2 md:left-0 top-1/2 -translate-y-1/2"
          >
            <ChevronLeftIcon className="h-5 w-5 text-[#265b4d]" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth py-2 px-4 md:px-8"
          >
            {productos.map(({ nombre, imagen, descripcion, descripcionExtra }) => (
              <article
                key={nombre}
                className="flex-shrink-0 w-[72vw] sm:w-[48vw] md:w-[320px] rounded-xl shadow-lg overflow-hidden transition hover:scale-[1.02] bg-transparent first:ml-4 last:mr-4"
              >
                {/* Imagen: altura fija por breakpoint para uniformidad */}
                <div className="w-full overflow-hidden">
                  <img
                    src={imagen}
                    alt={nombre}
                    className="w-full h-40 sm:h-48 md:h-56 object-cover"
                    draggable={false}
                  />
                </div>
{/* Texto (fondo transparente) — tamaño optimizado para móviles grandes (iPhone 13 Pro Max) */}
<div className="p-3 md:p-4 flex flex-col gap-2">
  <h3 className="text-lg md:text-xl font-bold mb-1 text-[#265b4d]">
    {nombre}
  </h3>

  <p
    className="text-[18px] md:text-[20px] text-[#265b4d] leading-[26px] md:leading-[28px] line-clamp-3 break-words"
    style={{ WebkitFontSmoothing: 'antialiased' }}
  >
    {descripcion}
  </p>

  {descripcionExtra && (
    <p
      className="text-[18px] md:text-[20px] text-[#265b4d] mt-1 opacity-80 leading-[26px] md:leading-[28px] line-clamp-2 break-words"
      style={{ WebkitFontSmoothing: 'antialiased' }}
    >
      {descripcionExtra}
    </p>
  )}
</div>

              </article>
            ))}
          </div>

          {/* Flecha der */}
          <button
            onClick={() => scroll('right')}
            aria-label="Mover derecha"
            className="absolute z-20 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-md hover:bg-white transition right-2 md:right-0 top-1/2 -translate-y-1/2"
          >
            <ChevronRightIcon className="h-5 w-5 text-[#265b4d]" />
          </button>
        </div>
      </div>
    </section>
  )
}

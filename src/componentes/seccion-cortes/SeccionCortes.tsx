import { useRef } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

const productos = [
  {
    nombre: 'Asado Banderita',
    descripcion:
      'Corte jugoso de costilla superficial con capa de grasa. Perfecto para parrilla tradicional.',
    descripcionExtra:
      'Carne de vacuno con marmoleado medio, sal gruesa y reposo: esencia del asado argentino.',
    imagen: '/images/asabande.webp',
  },
  {
    nombre: 'Entraña',
    descripcion:
      'Corte delgado y sabroso del diafragma. Ideal para paladares exigentes.',
    descripcionExtra: '',
    imagen: '/images/entraña.jpg',
  },
  {
    nombre: 'Vacío',
    descripcion:
      'Parte abdominal del animal, jugosa y con textura única. Muy valorada en parrillas argentinas.',
    descripcionExtra: '',
    imagen: '/images/vacio.jpg',
  },
  {
    nombre: 'Matambre',
    descripcion:
      'Corte fino y plano entre el cuero y las costillas. Delicioso a la pizza o a la parrilla.',
    descripcionExtra: '',
    imagen: '/images/matambre.jpg',
  },
];

export default function SeccionCortes() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const amount = window.innerWidth < 768 ? 250 : 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -amount : amount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="relative py-20 px-4 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Título */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-[#265b4d]">
          Productos de calidad
        </h2>

        {/* Frase rompedora */}
        <p
          className="text-center mb-12 text-[#265b4d]"
          style={{
            fontFamily: 'RockSalt',
            fontSize: 'clamp(1.25rem, 10vw, 2.5rem)',
            lineHeight: '1.5',
          }}
        >
          Carne seleccionada, sabor inigualable
        </p>

        {/* Contenedor con flechas */}
        <div className="relative">
          {/* Flecha izquierda */}
          <button
            onClick={() => scroll('left')}
            className="flex absolute -left-3 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm shadow-md p-1.5 rounded-full z-10 hover:bg-white"
          >
            <ChevronLeftIcon className="h-5 w-5 text-[#265b4d]" />
          </button>

          {/* Fila desplazable */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-2 md:px-10"
          >
            {productos.map((item, i) => (
              <div
                key={i}
                className="min-w-[280px] md:min-w-[360px] flex-shrink-0 rounded-xl shadow-lg overflow-hidden transition hover:scale-[1.02] bg-transparent"
              >
                <img
                  src={item.imagen}
                  alt={item.nombre}
                  className="w-full h-56 md:h-64 object-cover"
                />
                <div className="p-4 bg-white/80 backdrop-blur-sm rounded-b-xl">
                  <h3 className="text-xl font-bold mb-2 text-[#265b4d]">{item.nombre}</h3>
                  <p className="text-sm text-[#265b4d]">{item.descripcion}</p>
                  {item.descripcionExtra && (
                    <p className="text-sm text-[#265b4d] mt-2 opacity-80">{item.descripcionExtra}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Flecha derecha */}
          <button
            onClick={() => scroll('right')}
            className="flex absolute -right-3 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm shadow-md p-1.5 rounded-full z-10 hover:bg-white"
          >
            <ChevronRightIcon className="h-5 w-5 text-[#265b4d]" />
          </button>
        </div>
      </div>
    </section>
  );
}

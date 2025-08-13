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
    imagen: '/images/entraña.jpg',
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
    <section className="w-full bg-transparent py-20 overflow-hidden">
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

    {/* Contenedor con scroll y flechas */}
    <div className="relative">
      {/* Flecha izquierda */}
      <button
        onClick={() => scroll('left')}
        className="absolute z-10 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md hover:bg-white transition"
        style={{
          top: '55%',
          left: '0.25rem',
          transform: 'translateY(-50%)',
        }}
      >
        <ChevronLeftIcon className="h-5 w-5 text-[#265b4d]" />
      </button>

      {/* Carrusel horizontal con padding lateral para respiración */}
    <div
  ref={scrollRef}
  className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-4 md:px-8"
>


        {productos.map((item, i) => (
  <div
    key={i}
    className="min-w-[240px] md:min-w-[320px] h-[340px] md:h-[360px] flex-shrink-0 rounded-xl shadow-lg overflow-hidden transition hover:scale-[1.02] bg-transparent flex flex-col"
  >
    <img
      src={item.imagen}
      alt={item.nombre}
      className="w-full h-[70%] object-cover"
    />
    <div className="flex-1 p-3 bg-transparent flex flex-col justify-start">
      <h3 className="text-lg font-bold mb-1 text-[#265b4d]">{item.nombre}</h3>
      <p className="text-sm text-[#265b4d] leading-snug">{item.descripcion}</p>
      {item.descripcionExtra && (
        <p className="text-sm text-[#265b4d] mt-1 opacity-80 leading-snug">
          {item.descripcionExtra}
        </p>
      )}
    </div>
  </div>
))}

      </div>

      {/* Flecha derecha */}
      <button
        onClick={() => scroll('right')}
        className="absolute z-10 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md hover:bg-white transition"
        style={{
          top: '55%',
          right: '0.25rem',
          transform: 'translateY(-50%)',
        }}
      >
        <ChevronRightIcon className="h-5 w-5 text-[#265b4d]" />
      </button>
    </div>
  </div>
</section>

  );
}

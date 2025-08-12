export default function GaleriaReferencias() {
  return (
    <section className="bg-transparent py-10 px-4">
      {/* Grid de imágenes horizontales y simétricas */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 max-w-7xl mx-auto">
        {[
          { src: '/images/nachos.jpg', alt: 'Referencia 1' },
          { src: '/images/milanesa.jpg', alt: 'Referencia 2' },
          { src: '/images/carne.jpg', alt: 'Referencia 3' },
          { src: '/images/burrata.png', alt: 'Referencia 4' },
        ].map((img, index) => (
          <div key={index} className="w-full aspect-[4/5] overflow-hidden rounded-md">
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Separador decorativo y texto */}
      <div className="mt-10 text-center">
        <div
          className="w-0.5 h-10 mx-auto"
          style={{ backgroundColor: '#265b4d' }}
        />

        <div className="h-1 w-px mx-auto bg-red-800 mb-3" />

        <h3
          className="text-3xl sm:text-3xl font-semibold"
          style={{ color: '#265b4d' }}
        >
          La carta
        </h3>

         {/* Frase destacada debajo del título */}
        <p
          className="text-center text-[#265b4d]"
          style={{
            fontFamily: 'RockSalt',
            fontSize: 'clamp(1.25rem, 8vw, 2.5rem)',
            lineHeight: '2.8rem',
          }}
        >
          Elige tu momento favorito del sabor
        </p>
      </div>
    </section>
  )
}

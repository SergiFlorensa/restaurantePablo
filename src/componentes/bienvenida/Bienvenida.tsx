export default function Bienvenida() {
  const backgroundImage = `${import.meta.env.BASE_URL}images/patagonia.jpg`

  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Velo blanco sutil */}
      <div className="absolute inset-0 bg-white opacity-40"></div>

      {/* Difuminado beige lateral */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at center, transparent 40%, #d8c5ad 100%)',
        }}
      ></div>

      {/* Difuminado arriba */}
      <div
        className="absolute top-0 left-0 w-full h-32 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, #d8c5ad 0%, transparent 100%)',
        }}
      ></div>

      {/* Difuminado abajo */}
      <div
        className="absolute bottom-0 left-0 w-full h-32 pointer-events-none"
        style={{
          background:
            'linear-gradient(to top, #d8c5ad 0%, transparent 100%)',
        }}
      ></div>

      {/* Contenido */}
      <div className="relative max-w-6xl mx-auto px-6 py-20 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Columna izquierda */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="relative mb-12"></div>

            <h2
              className="text-3xl tracking-widest uppercase font-semibold mb-6 text-center lg:text-left"
              style={{
                color: '#265b4d',
                textShadow: '0 1px 2px rgba(0,0,0,0.1)',
              }}
            >
              Sobre nosotros
            </h2>

            <p
              className="text-center lg:text-left mb-0"
              style={{
                color: '#265b4d',
                fontFamily: 'RockSalt',
                fontSize: 'clamp(1.4rem, 9vw, 2.8rem)',
                lineHeight: '1.2',
                textShadow: '0 1px 2px rgba(0,0,0,0.08)',
              }}
            >
              Pasión, fuego y raíces argentinas
            </p>
          </div>

          {/* Columna derecha */}
          <div
            className="rounded-xl border backdrop-blur-none p-6 sm:p-8 text-center lg:text-left"
            style={{
              backgroundColor: 'rgba(245, 245, 220, 0.55)',
              borderColor: 'rgba(201, 151, 69, 0.45)',
              color: '#265b4d',
            }}
          >
            <p className="text-xl sm:text-xl leading-relaxed font-light mb-6">
              Fuego, humo y tradición: trabajamos cortes elegidos para revelar texturas y
              recuerdos. Plato a plato, contamos la historia de la parrilla argentina.
            </p>
            <p className="text-xl sm:text-xl leading-relaxed font-light">
              Queremos que te sientas en casa: servicio cercano, tiempos bien medidos
              y una carta que evoluciona con el mercado. Ven sin prisa; del resto
              nos ocupamos nosotros.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

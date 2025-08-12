export default function Bienvenida() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundImage: "url('/images/patagonia.jpg')",
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
        {/* Grid responsivo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Columna izquierda: título + frase */}
          <div className="flex flex-col items-center lg:items-start">
            {/* Separador */}
            <div className="relative mb-12">
              
            </div>

            <h2
              className="text-4xl tracking-widest uppercase font-semibold mb-6 text-center lg:text-left"
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
                fontSize: 'clamp(1.4rem, 4vw, 2.8rem)',
                lineHeight: '1.2',
                textShadow: '0 1px 2px rgba(0,0,0,0.08)',
              }}
            >
              Pasión, fuego y raíces argentinas
            </p>
          </div>

          {/* Columna derecha: texto en tarjeta translúcida */}
          <div
            className="
              rounded-xl border
              backdrop-blur-sm
              p-6 sm:p-8
              text-center lg:text-left
              "
            style={{
              backgroundColor: 'rgba(245, 245, 220, 0.55)', // beige translúcido
              borderColor: 'rgba(201, 151, 69, 0.45)',      // dorado suave
              color: '#265b4d',
            }}
          >
            <p className="text-lg sm:text-xl leading-relaxed font-light mb-6">
              Restaurante Victoria representa la tradición y la esencia de la parrilla
              argentina, rindiendo un orgulloso tributo a la cultura culinaria del Río de
              la Plata.
            </p>
            <p className="text-lg sm:text-xl leading-relaxed font-light">
              Disfruta de sabores y una vivencia excepcional, desde que llegas hasta que te
              vas. Nuestro restaurante está pensado para que cada comensal viva una
              experiencia única, cálida y deliciosa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

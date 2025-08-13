export default function SeccionArgentina() {
  const bg = `${import.meta.env.BASE_URL}images/baires.jpg`;

  return (
    <section
      className="relative bg-transparent py-20 px-0 overflow-hidden min-h-[600px]"
      style={{
        backgroundImage: `url('${bg}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Difuminados y capa blanca */}
      <div className="absolute inset-0 bg-white opacity-40" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, transparent 70%, #d8c5ad 100%)',
        }}
      />
      <div
        className="absolute top-0 left-0 w-full h-32 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, #d8c5ad 0%, transparent 100%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* 🖥️ Desktop: bloque dorado a la derecha */}
        <div className="hidden lg:flex flex-row-reverse items-center gap-10">
          <div
            className="p-10 w-full max-w-2xl text-center rounded-l-full backdrop-blur-sm"
            style={{
              backgroundColor: 'rgba(201, 151, 69, 0.85)',
              color: '#fff',
            }}
          >
            <h2
              className="mb-4"
              style={{
                fontFamily: 'RockSalt',
                fontSize: 'clamp(2rem, 5vw, 3rem)',
                fontWeight: 'normal',
                lineHeight: '1.2',
              }}
            >
              Sabores con historia
            </h2>
            <p className="text-lg leading-relaxed font-light">
              Desde el corazón de Buenos Aires hasta los rincones de la Patagonia,
              cada plato reúne tradición y producto. Ven a probar recetas hechas con
              respeto por el fuego y por el ingrediente.
            </p>
          </div>
        </div>

        {/* 📱 Móvil: burbuja redonda centrada */}
{/* 📱 Móvil: burbuja redonda centrada encima de la imagen */}
<div
  className="lg:hidden absolute left-72 top-60 z-30 -translate-x-1/2 -translate-y-1/2 w-44 h-44 sm:w-52 sm:h-52 p-4 rounded-full flex flex-col items-center justify-center text-center shadow-lg"
  style={{
    backgroundColor: 'rgba(201, 151, 69, 0.95)',
    color: '#fff',
    backdropFilter: 'blur(4px)', // alternativa a backdrop-blur para compatibilidad
    WebkitBackdropFilter: 'blur(4px)',
  }}
>
  <h2
    className="mb-1"
    style={{
      fontFamily: 'RockSalt',
      fontSize: 'clamp(0.95rem, 3.2vw, 1.2rem)',
      lineHeight: '1.1',
      fontWeight: 'normal',
    }}
  >
    Sabores con<br />historia
  </h2>
  <p className="text-[11px] leading-tight px-1 font-light">
    Cada plato reúne tradición y producto. Ven a probar recetas hechas con respeto por el fuego y por el ingrediente.
  </p>
</div>


      </div>
    </section>
  );
}

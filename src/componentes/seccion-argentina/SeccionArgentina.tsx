export default function SeccionArgentina() {
  return (
    <section
      className="relative bg-transparent py-20 px-0 overflow-hidden"
      style={{
        backgroundImage: "url('/images/baires.jpg')",
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
              Desde el corazón de Buenos Aires hasta los sabores más auténticos de la Patagonia.
              Cada plato cuenta una historia, cada ingrediente evoca una tradición.
              Descubre la pasión argentina en cada bocado.
            </p>
          </div>
        </div>

        {/* 📱 Móvil: burbuja redonda centrada */}
<div
  className="lg:hidden absolute bottom-6 left-1/2 transform -translate-x-1/2 w-44 h-44 p-3 rounded-full flex flex-col items-center justify-center text-center shadow-lg backdrop-blur-sm"
  style={{
    backgroundColor: 'rgba(201, 151, 69, 0.9)',
    color: '#fff',
  }}
>
  <h2
    className="mb-1"
    style={{
      fontFamily: 'RockSalt',
      fontSize: 'clamp(0.9rem, 3.2vw, 1.1rem)',
      lineHeight: '1.1',
      fontWeight: 'normal',
    }}
  >
    Sabores con<br />historia
  </h2>
  <p className="text-[10px] leading-tight px-1 font-light">
    Cada plato cuenta una<br />historia.
  </p>
</div>

      </div>
    </section>
  );
}

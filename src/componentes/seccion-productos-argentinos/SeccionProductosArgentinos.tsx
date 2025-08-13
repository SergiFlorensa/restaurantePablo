export default function SeccionProductosArgentinos() {
  const bg = `${import.meta.env.BASE_URL}images/boca.jpg`

  return (
    <section
      className="relative text-white px-6 overflow-hidden min-h-[700px]"
      style={{
        backgroundImage: `url('${bg}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Capa blanca semitransparente */}
      <div className="absolute inset-0 bg-white opacity-40"></div>

      {/* Difuminados beige */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at center, transparent 70%, #d8c5ad 100%)',
        }}
      ></div>

      <div
        className="absolute top-0 left-0 w-full h-32 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, #d8c5ad 0%, transparent 100%)',
        }}
      ></div>

      <div
        className="absolute bottom-0 left-0 w-full h-32 pointer-events-none"
        style={{
          background:
            'linear-gradient(to top, #d8c5ad 0%, transparent 100%)',
        }}
      ></div>
    </section>
  )
}

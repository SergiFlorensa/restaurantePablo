export default function Bienvenida() {
  return (
    <section className="text-center bg-transparent">
      {/* Contenido textual */}
      <div className="max-w-3xl mx-auto px-6 py-20">
        {/* Separador */}
        <div className="relative mb-6">
          <div className="w-0.5 h-10 mx-auto bg-black" />
        </div>

        {/* Título secciones */}
        <h2 className="text-6xl tracking-widest uppercase font-semibold text-gray-700 mb-10">
          Sobre nosotros
        </h2>
<p className="text-xl sm:text-2xl leading-relaxed text-gray-800 font-light mb-6">
  Restaurante Pablo representa la tradición y la esencia de la parrilla argentina,
  rindiendo un orgulloso tributo a la cultura culinaria del Río de la Plata.
</p>

<p className="text-xl sm:text-2xl leading-relaxed text-gray-800 font-light">
  Disfruta de sabores y una vivencia excepcional, desde que llegas hasta que te vas.
  Nuestro restaurante está pensado para que cada comensal viva una experiencia única,
  cálida y deliciosa.
</p>

      </div>
    </section>
  )
}

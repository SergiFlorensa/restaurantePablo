import argentinaImg from '/images/solARG.png'

export default function SeccionArgentina() {
  return (
    <section className="bg-transparent py-20 px-0">
      <div className="flex flex-col lg:flex-row items-center gap-10 max-w-none">
        {/* Bloque rojo: totalmente alineado a la izquierda */}
        <div className="bg-red-700 text-white p-10 rounded-r-full w-full max-w-2xl lg:rounded-r-full text-center lg:text-left lg:ml-0">
          <h2 className="text-3xl sm:text-4xl font-bold uppercase mb-4 leading-snug">
            Sabores con historia
          </h2>
          <p className="text-base sm:text-lg leading-relaxed font-light">
            Desde el corazón de Buenos Aires hasta los sabores más auténticos de
            la Patagonia. Cada plato cuenta una historia, cada ingrediente
            evoca una tradición. Descubre la pasión argentina en cada bocado.
          </p>
        </div>

        {/* Imagen del collage */}
        <div className="relative w-full max-w-xl px-4 lg:px-0">
          <img
            src={argentinaImg}
            alt="Collage cultural argentino"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  )
}

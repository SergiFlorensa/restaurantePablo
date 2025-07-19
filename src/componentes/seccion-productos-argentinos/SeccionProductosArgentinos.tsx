import mateImg from '/images/mate.png' // Asegúrate de tener esta imagen en /public/images

export default function SeccionProductosArgentinos() {
  return (
    <section className="bg-transparent text-white py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 items-center text-center lg:text-left">
        {/* Columna izquierda */}
        <div className="space-y-10">
          <div>
            <h3 className="text-yellow-400 font-extrabold text-xl uppercase">Mate</h3>
            <p className="text-base sm:text-lg font-light leading-relaxed text-white">
              Revive la tradición argentina con nuestra selección de yerbas de las marcas más queridas.
              Desde las más suaves hasta las más intensas, tenemos la yerba perfecta para cada paladar.
            </p>
          </div>

          <div>
            <h3 className="text-yellow-400 font-extrabold text-xl uppercase">Dulces Argentinos</h3>
            <p className="text-base sm:text-lg font-light leading-relaxed text-white">
              Alfajores, galletitas, dulce de batata y el clásico dulce de leche.
              Una explosión de sabor que te hará sentir como en casa.
            </p>
          </div>
        </div>

        {/* Imagen central */}
        <div className="flex justify-center relative z-10">
          <img
            src={mateImg}
            alt="Mate argentino"
            className="w-72 sm:w-96 object-contain"
          />
        </div>

        {/* Columna derecha */}
        <div className="space-y-10">
          <div>
            <h3 className="text-yellow-400 font-extrabold text-xl uppercase">Vinos Argentinos</h3>
            <p className="text-base sm:text-lg font-light leading-relaxed text-white">
              Desde Malbecs intensos hasta blancos frescos. Ideal para acompañar comidas o brindar.
            </p>
          </div>

          <div>
            <h3 className="text-yellow-400 font-extrabold text-xl uppercase">Fernet</h3>
            <p className="text-base sm:text-lg font-light leading-relaxed text-white">
              Refrescante, generalmente mezclado con cola, el Fernet es esencial en celebraciones.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

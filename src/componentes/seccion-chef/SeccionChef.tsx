import chefImg from '/images/chef.jpg' // Asegúrate de tener esta imagen en tu carpeta /public/images

export default function SeccionChef() {
  return (
    <section className="bg-transparent py-20 px-4 text-black">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Imagen del chef */}
        <div className="w-full lg:w-1/2">
          <img
            src={chefImg}
            alt="Chef del restaurante"
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>

        {/* Texto del chef */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Conoce a nuestro Chef
          </h2>
          <p className="text-xl sm:text-2xl font-light leading-relaxed text-gray-800 mb-6">
  Nuestro chef principal ha creado una carta que fusiona la tradición argentina
  con técnicas contemporáneas, aportando una experiencia única con cada plato.
</p>

<p className="text-xl sm:text-2xl font-light leading-relaxed text-gray-800 mb-6">
  Su recorrido multicultural se refleja en cada receta, cada sabor y cada detalle del menú.
</p>

          <a
            href="/nosotros"
            className="inline-block bg-transparent text-black border border-black px-6 py-2 rounded-full text-sm font-semibold hover:bg-black hover:text-white transition"
          >
            VER DETALLES
          </a>
        </div>
      </div>
    </section>
  )
}

import chefImg from '/images/chef.jpg'

export default function SeccionChef() {
  return (
    <section className="bg-[#265b4d] py-20 px-4 text-white">
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
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ color: '#ffffff' }}
          >
            Conoce a nuestro Chef
          </h2>

          {/* Frase destacada con fuente RockSalt */}
          <p
            className="mb-6"
            style={{
              fontFamily: 'RockSalt',
              fontSize: 'clamp(1.5rem, 10vw, 2.5rem)',
              lineHeight: '1.5',
              color: '#ffffff',
            }}
          >
            Cada plato lleva su firma
          </p>

          <p
            className="text-xl sm:text-2xl font-light leading-relaxed mb-6"
            style={{ color: '#ffffff' }}
          >
            Nuestro chef principal ha creado una carta que fusiona la tradición argentina
            con técnicas contemporáneas, aportando una experiencia única con cada plato.
          </p>

          <p
            className="text-xl sm:text-2xl font-light leading-relaxed mb-6"
            style={{ color: '#ffffff' }}
          >
            Su recorrido multicultural se refleja en cada receta, cada sabor y cada detalle del menú.
          </p>

          <a
  href="/nosotros"
  className="inline-block px-8 py-3 rounded-full text-sm font-semibold transition mt-6"
  style={{
    backgroundColor: '#b9c9b8', // fondo marrón
    color: '#4c6768'            // texto beige
  }}
>
  VER DETALLES
</a>

        </div>
      </div>
    </section>
  )
}

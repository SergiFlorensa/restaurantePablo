import chefImg from '/images/cocinerooo.png'

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
            className="text-4xl sm:text-4xl font-bold mb-4"
            style={{ color: '#ffffff' }}
          >
            Conoce a nuestro Chef
          </h2>

          {/* Frase destacada */}
          <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
            <p
              style={{
                fontFamily: 'RockSalt',
                fontSize: 'clamp(1.5rem, 10vw, 2.5rem)',
                lineHeight: '1.5',
                color: '#ffffff',
              }}
            >
              Cada plato lleva su firma
            </p>
          </div>

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
            "Mi meta es sencilla: que te sientas cómodo, que disfrutes, y que quieras volver."
          </p>

          <a
            href="/nosotros"
            className="inline-block px-8 py-3 rounded-full text-md font-semibold transition mt-6"
            style={{
              backgroundColor: '#b9c9b8',
              color: '#4c6768',
            }}
          >
            SOBRE MÍ
          </a>
        </div>
      </div>
    </section>
  )
}

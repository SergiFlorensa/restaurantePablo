import { Link } from 'react-router-dom'

const imagenes = [
  {
    imagen: '/images/nachos.jpg',
    alt: 'Plato con carnes argentinas',
  },
  {
    imagen: '/images/milanesa.jpg',
    alt: 'Carne a la brasa con guarnición',
  },
  {
    imagen: '/images/burrata.png',
    alt: 'Postre gourmet del restaurante',
  },
  {
    imagen: '/images/menu.png',
    alt: 'Ver menú del restaurante',
  },
]

export default function SeccionCarta() {
  return (
    <section className="bg-transparent px-4 text-center mt-8">
      {/* Encabezado de sección */}
      <div className="mb-8">
        <div className="h-1 w-px mx-auto bg-red-800 mb-3" />

        <h3
          className="text-3xl sm:text-3xl font-semibold"
          style={{ color: '#265b4d' }}
        >
          La carta
        </h3>

        {/* Frase destacada debajo del título */}
        <p
          className="text-center text-[#265b4d]"
          style={{
            fontFamily: 'RockSalt',
            fontSize: 'clamp(1.25rem, 8vw, 2.5rem)',
            lineHeight: '2.8rem',
          }}
        >
          Elige tu momento favorito del sabor
        </p>
      </div>

      {/* ✅ Móvil: solo la imagen index 3 */}
      <div className="block sm:hidden max-w-md mx-auto">
        <div className="relative overflow-hidden rounded-lg shadow-lg aspect-[4/3]">
          <img
            src={imagenes[3].imagen}
            alt={imagenes[3].alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <Link
              to="/carta"
              className="bg-white text-black px-6 py-2 text-sm font-semibold uppercase tracking-wider hover:bg-gray-100 transition"
            >
              Ver menú
            </Link>
          </div>
        </div>
      </div>

      {/* ✅ Tablet y escritorio: solo imágenes 0, 1 y 2 */}
      <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {imagenes.slice(0, 3).map((item, i) => (
          <div
            key={i}
            className="relative group overflow-hidden rounded-lg shadow-lg aspect-[4/5]"
          >
            <img
              src={item.imagen}
              alt={item.alt}
              className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
              <Link
                to="/carta"
                className="bg-white text-black px-6 py-2 text-sm font-semibold uppercase tracking-wider hover:bg-gray-100 transition"
              >
                Ver menú
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

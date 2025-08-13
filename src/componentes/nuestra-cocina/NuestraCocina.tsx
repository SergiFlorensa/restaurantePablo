
import { motion } from 'framer-motion';
import cocina from '../../assets/cocina.jpg';
import burrata from '../../assets/burrata.png';
import milanesa from '../../assets/milanesa.jpg';
import carne from '../../assets/carne.jpg';


export default function NuestraCocina() {
  return (
    <section className="w-full bg-transparent py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Título de la sección */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl text-[#265b4d] font-bold text-center mb-10"
        >
          Nuestra Cocina
        </motion.h2>
        {/* Frase decorativa previa al texto principal */}
        <motion.p
          
          className="text-xl md:text-2xl text-[#265b4d] text-center font-frase-rompedora mb-10"
         style={{
            fontFamily: 'RockSalt',
            fontSize: '3.2rem', // Aquí puedes cambiar el tamaño fácilmente
            lineHeight: '2.9rem', // Altura de línea opcional para legibilidad
          }}
        >
          Donde cada bocado cuenta una historia
        </motion.p>

        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          {/* Texto explicativo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
className="md:w-1/2 text-[#265b4d] font-light space-y-6 text-base md:text-lg lg:text-xl xl:text-2xl"
          >
            <p>
              En cada plato encontrarás un pedacito de nuestra tierra argentina. Desde
              las tradicionales empanadas hasta nuestras carnes cuidadosamente
              seleccionadas y asadas lentamente al estilo auténtico.
            </p>
            <p>
              Nos esforzamos por mantener viva nuestra tradición culinaria con humildad,
              pasión y un profundo respeto por los sabores originales.
            </p>
            <p>
              Te invitamos a saborear la historia y tradición en cada bocado,
              en un ambiente cálido donde el protagonista siempre es el sabor auténtico.
            </p>
          </motion.div>

          {/* Imágenes destacadas */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="md:w-1/2 grid grid-cols-2 gap-4"
          >
            <img
              src={cocina}
              alt="Plato típico argentino"
              className="rounded-xl shadow-md object-cover aspect-square hover:scale-105 transition-transform"
            />
            <img
              src={burrata}
              alt="Parrilla argentina"
              className="rounded-xl shadow-md object-cover aspect-square hover:scale-105 transition-transform"
            />
            <img
              src={milanesa}
              alt="Empanadas argentinas"
              className="rounded-xl shadow-md object-cover aspect-square hover:scale-105 transition-transform"
            />
            <img
              src={carne}
              alt="Postre tradicional argentino"
              className="rounded-xl shadow-md object-cover aspect-square hover:scale-105 transition-transform"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
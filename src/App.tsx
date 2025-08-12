import Cabecera from './componentes/cabecera/Cabecera'
import Bienvenida from './componentes/bienvenida/Bienvenida'
import GaleriaReferencias from './componentes/galeria-referencias/GaleriaReferencias'
import SeccionCarta from './componentes/seccion-carta/SeccionCarta'
import SeccionRegalo from './componentes/seccion-concepto/SeccionConcepto'
import SeccionArgentina from './componentes/seccion-argentina/SeccionArgentina'
import SeccionChef from './componentes/seccion-chef/SeccionChef'
import SeccionProductosArgentinos from './componentes/seccion-productos-argentinos/SeccionProductosArgentinos'
import SeccionCortes from './componentes/seccion-cortes/SeccionCortes'
import NuestraCocina from './componentes/nuestra-cocina/NuestraCocina'
import Footer from './componentes/pie-pagina/FooterRestaurante'

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Cabecera />
      <main className="flex-grow">
                <NuestraCocina />
                <Bienvenida />
                
                <SeccionCarta />
                <SeccionRegalo />
                <SeccionArgentina />
                <SeccionChef />
                <SeccionProductosArgentinos />
                <SeccionCortes />
      </main>
      <Footer />
    </div>
  )
}

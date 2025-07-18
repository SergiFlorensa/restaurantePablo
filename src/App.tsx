import Cabecera from './componentes/cabecera/Cabecera'
import Bienvenida from './componentes/bienvenida/Bienvenida'

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Cabecera />
      <main className="flex-grow">
                <Bienvenida />

      </main>
    </div>
  )
}

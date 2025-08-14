// src/App.tsx
import { Routes, Route, Navigate } from 'react-router-dom'
import Bienvenida from './componentes/bienvenida/Bienvenida'
import SeccionCarta from './componentes/seccion-carta/SeccionCarta'
import SeccionRegalo from './componentes/seccion-concepto/SeccionConcepto'
import SeccionArgentina from './componentes/seccion-argentina/SeccionArgentina'
import SeccionChef from './componentes/seccion-chef/SeccionChef'
import SeccionProductosArgentinos from './componentes/seccion-productos-argentinos/SeccionProductosArgentinos'
import SeccionCortes from './componentes/seccion-cortes/SeccionCortes'
import NuestraCocina from './componentes/nuestra-cocina/NuestraCocina'
import Carta from './paginas/carta/carta' // <- respeta mayúscula

function PaginaInicio() {
  return (
    <>
      <NuestraCocina />
      <Bienvenida />
      <SeccionCarta />
      <SeccionRegalo />
      <SeccionArgentina />
      <SeccionChef />
      <SeccionProductosArgentinos />
      <SeccionCortes />
    </>
  )
}

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<PaginaInicio />} />
          <Route path="/carta" element={<Carta />} />
          {/* si no hay coincidencia, volvemos al inicio */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      
    </div>
  )
}

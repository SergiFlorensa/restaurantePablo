// src/App.tsx
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'

import Cabecera from './componentes/cabecera/Cabecera'
import Bienvenida from './componentes/bienvenida/Bienvenida'
import SeccionCarta from './componentes/seccion-carta/SeccionCarta'
import SeccionRegalo from './componentes/seccion-concepto/SeccionConcepto'
import SeccionArgentina from './componentes/seccion-argentina/SeccionArgentina'
import SeccionChef from './componentes/seccion-chef/SeccionChef'
import SeccionProductosArgentinos from './componentes/seccion-productos-argentinos/SeccionProductosArgentinos'
import SeccionCortes from './componentes/seccion-cortes/SeccionCortes'
import NuestraCocina from './componentes/nuestra-cocina/NuestraCocina'
import Footer from './componentes/pie-pagina/FooterRestaurante'
import Carta from './paginas/carta/Carta-temp' // <- respeta mayúscula

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
  const location = useLocation()
  const esCarta = location.pathname === '/carta' // con basename, aquí llega limpio

  return (
    <div className="flex flex-col min-h-screen">
      {!esCarta && <Cabecera />}

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<PaginaInicio />} />
          <Route path="/carta" element={<Carta />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {!esCarta && <Footer />}
    </div>
  )
}

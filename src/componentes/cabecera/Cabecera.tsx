import React from 'react'

export default function Cabecera() {
  return (
    <header className="top-0 left-0 right-0 z-50 bg-black">
      {/* Contenedor con padding-top para dar proporción y altura mayor */}
      <div className="relative w-full" style={{ paddingTop: '75%' }}>
        <img
          src="/images/cocina.jpg"
          alt="Imagen del restaurante"
          className="absolute top-0 left-0 w-full h-full object-contain"
        />
      </div>
    </header>
  )
}

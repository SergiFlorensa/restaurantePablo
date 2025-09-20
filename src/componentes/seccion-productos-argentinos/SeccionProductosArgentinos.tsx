import { useEffect, useMemo, useRef, useState } from 'react'

const base = import.meta.env.BASE_URL // '' en dev | '/restaurantePablo/' en Pages

const frames = Array.from({ length: 36 }, (_, index) =>
  `${base}images/figura-messi/frame-${String(index + 1).padStart(2, '0')}.webp`,
)

function usePrefersReducedMotion() {
  const [prefers, setPrefers] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setPrefers(media.matches)
    update()
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])

  return prefers
}

const intervalMs = 2800
const dragSensitivity = 14
const bulletActivo = '\u25cf'
const bulletInactivo = '\u25cb'

function FiguraViewer({ fuentes }: { fuentes: string[] }) {
  const [frameIndex, setFrameIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const startXRef = useRef(0)
  const startFrameRef = useRef(0)
  const prefersReducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    if (prefersReducedMotion || isDragging) return () => {}

    const id = window.setInterval(() => {
      setFrameIndex((prev) => (prev + 1) % fuentes.length)
    }, intervalMs)

    return () => window.clearInterval(id)
  }, [fuentes.length, isDragging, prefersReducedMotion])

  useEffect(() => {
    // Pre-cargar la imagen siguiente para suavizar la transición
    const siguiente = new Image()
    siguiente.src = fuentes[(frameIndex + 1) % fuentes.length]
  }, [frameIndex, fuentes])

  const clampFrame = (valor: number) => {
    const total = fuentes.length
    return ((valor % total) + total) % total
  }

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    event.preventDefault()
    const elemento = containerRef.current
    if (!elemento) return

    setIsDragging(true)
    startXRef.current = event.clientX
    startFrameRef.current = frameIndex
    elemento.setPointerCapture(event.pointerId)
  }

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return
    const delta = event.clientX - startXRef.current
    const pasos = Math.round(delta / dragSensitivity)
    const siguiente = clampFrame(startFrameRef.current - pasos)
    if (siguiente !== frameIndex) {
      setFrameIndex(siguiente)
    }
  }

  const finalizarArrastre = (event: React.PointerEvent<HTMLDivElement>) => {
    const elemento = containerRef.current
    if (elemento && elemento.hasPointerCapture(event.pointerId)) {
      elemento.releasePointerCapture(event.pointerId)
    }
    setIsDragging(false)
  }

  return (
    <div className="relative flex flex-col items-center gap-4 text-white">
      <div
        ref={containerRef}
        role="presentation"
        className="relative aspect-[4/5] w-full max-w-xs sm:max-w-sm rounded-[2.25rem] border border-white/40 bg-white/10 shadow-2xl overflow-hidden backdrop-blur-md cursor-grab active:cursor-grabbing"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={finalizarArrastre}
        onPointerCancel={finalizarArrastre}
        onPointerLeave={(event) => {
          if (isDragging) finalizarArrastre(event)
        }}
      >
        <img
          key={fuentes[frameIndex]}
          src={fuentes[frameIndex]}
          alt="Figura 360º de Lionel Messi con la Copa del Mundo"
          className="h-full w-full object-contain"
          draggable={false}
          loading="lazy"
        />
        <div className="absolute bottom-3 right-4 rounded-full bg-black/50 px-3 py-1 text-xs font-medium uppercase tracking-[0.3em]">
          360°
        </div>
      </div>

      <div className="flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-white/70">
        <span>{bulletActivo.repeat(frameIndex + 1)}{bulletInactivo.repeat(fuentes.length - frameIndex - 1)}</span>
        <span>{String(frameIndex + 1).padStart(2, '0')}/{String(fuentes.length).padStart(2, '0')}</span>
      </div>

      <p className="max-w-sm text-center text-sm text-white/80">
        Desliza para girar la pieza o deja que el restaurante te la presente poco a poco. La escultora la creó en latón
        recuperado y se exhibirá en la entrada.
      </p>
    </div>
  )
}

const informacion = [
  {
    titulo: 'Figura homenaje',
    descripcion:
      'Una pieza única creada para el restaurante. Lionel Messi sosteniendo la copa del mundo en un acabado dorado satinado.',
  },
  {
    titulo: 'Hecha en Reus',
    descripcion:
      'Fundida en latón reciclado y pulida a mano por un taller local. Cada detalle está pensado para brillar bajo la luz cálida de la sala.',
  },
  {
    titulo: 'Símbolo de celebración',
    descripcion:
      'Una invitación a brindar por los logros compartidos y por las sobremesas que se alargan con historias y buena compañía.',
  },
]

export default function SeccionProductosArgentinos() {
  const bg = `${import.meta.env.BASE_URL}images/boca.jpg`
  const framesDisponibles = useMemo(() => frames, [])

  return (
    <section
      className="relative overflow-hidden text-white"
      style={{
        backgroundImage: `url('${bg}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-white/45" aria-hidden />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, transparent 65%, #d8c5ad 100%)',
        }}
        aria-hidden
      />
      <div
        className="absolute top-0 left-0 h-36 w-full bg-gradient-to-b from-[#d8c5ad] to-transparent pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute bottom-0 left-0 h-36 w-full bg-gradient-to-t from-[#d8c5ad] to-transparent pointer-events-none"
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-10 px-6 py-24 sm:px-10 lg:flex-row lg:items-center">
        <div className="flex-1 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-5 py-2 text-xs uppercase tracking-[0.32em] text-[#14212B] shadow-sm">
            Icono del salón
          </div>
          <h3 className="text-4xl sm:text-5xl font-light text-[#14212B] leading-tight">
            Una joya dorada que recibe a los comensales
          </h3>
          <p className="max-w-xl text-lg text-[#1f2727]/80 leading-relaxed">
            La figura resalta en el vestíbulo como un guiño a los triunfos argentinos. Queríamos mostrarla con un
            formato inmersivo para que puedas apreciarla desde todos los ángulos antes de visitarnos.
          </p>

          <div className="grid gap-5 sm:grid-cols-2">
            {informacion.map((item) => (
              <div key={item.titulo} className="rounded-3xl border border-white/40 bg-white/60 p-5 text-[#14212B] shadow">
                <h4 className="text-lg font-semibold">{item.titulo}</h4>
                <p className="mt-2 text-sm leading-relaxed text-[#1f2727]/80">{item.descripcion}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#reserva"
              className="inline-flex items-center gap-2 rounded-full border border-[#14212B]/40 bg-white/80 px-5 py-3 text-xs uppercase tracking-[0.28em] text-[#14212B] shadow hover:bg-white transition"
            >
              Visita el salón
            </a>
            <a
              href="/nuestro-concepto"
              className="inline-flex items-center gap-2 rounded-full bg-[#14212B] px-5 py-3 text-xs uppercase tracking-[0.28em] text-white hover:brightness-110 transition"
            >
              Saber más
            </a>
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <FiguraViewer fuentes={framesDisponibles} />
        </div>
      </div>
    </section>
  )
}

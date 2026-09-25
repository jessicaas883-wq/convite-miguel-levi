'use client'

import { useParallax } from '@/hooks/use-parallax'

export default function Page() {
  const { ref, progress } = useParallax<HTMLDivElement>()

  return (
    <main ref={ref} className="min-h-screen">
      <div
        style={{
          transform: `translateY(${progress * -32}px)`,
        }}
      >
        Teste
      </div>
    </main>
  )
}

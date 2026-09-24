```tsx
'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

const CHECKLIST = [
  'Coragem',
  'Alegria',
  'Fofura',
  'Energia',
  'Diversão',
]

export function LoadingScreen({
  onComplete,
}: {
  onComplete: () => void
}) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const start = performance.now()
    const duration = 4200
    let raf = 0

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration)

      const eased =
        t < 0.5
          ? 4 * t * t * t
          : 1 - Math.pow(-2 * t + 2, 3) / 2

      const currentProgress = Math.round(eased * 100)

      setProgress(currentProgress)

      if (t < 1) {
        raf = requestAnimationFrame(tick)
      } else {
        setProgress(100)
        onComplete()
      }
    }

    raf = requestAnimationFrame(tick)

    return () => cancelAnimationFrame(raf)
  }, [onComplete])

  return (
    <div
      className={cn(
        'fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-hero-ink transition-opacity duration-1000',
        'opacity-100'
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#4f0f14_0%,#160708_45%,#090909_100%)]" />

      <div className="relative flex w-full max-w-xl flex-col items-center justify-center px-6 py-10 text-center">
        <div className="absolute h-72 w-72 rounded-full bg-hero-gold/20 blur-3xl animate-[heroHalo_3s_ease-in-out_infinite]" />

        <img
          src="/mascote-voando.png"
          alt="Mascote Miguel"
          className="relative z-10 mt-6 w-44 sm:w-52"
        />

        <p className="mt-6 text-xs font-bold uppercase tracking-[0.5em] text-hero-gold">
          MISSÃO ENCONTRADA
        </p>

        <h1 className="mt-3 text-4xl font-black leading-tight text-white sm:text-5xl">
          Miguel Levi
        </h1>

        <p className="mt-4 text-sm text-white/70 sm:text-base">
          Preparando os superpoderes...
        </p>

        <div className="mt-8 w-full rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur sm:p-6">
          {CHECKLIST.map((item, index) => {
            const active =
              progress >=
              ((index + 1) * 100) / CHECKLIST.length

            return (
              <div key={item} className="mb-3 flex justify-between">
                <span
                  className={
                    active ? 'text-white' : 'text-white/40'
                  }
                >
                  {item}
                </span>

                <span
                  className={
                    active ? 'text-hero-gold' : 'text-white/20'
                  }
                >
                  {active ? '✔' : '○'}
                </span>
              </div>
            )
          })}

          <div className="mt-6 h-3 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-gradient-to-r from-hero-red via-hero-gold to-yellow-300 transition-all duration-200"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="mt-3 flex justify-between text-xs uppercase tracking-[0.2em] text-white/50">
            <span>Status</span>
            <span>{progress}%</span>
          </div>
        </div>
      </div>
    </div>
  )
}
```

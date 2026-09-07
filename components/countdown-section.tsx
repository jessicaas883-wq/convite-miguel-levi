'use client'

import { useEffect, useState } from 'react'
import { Reveal } from '@/components/reveal'
import { EVENT } from '@/lib/event'

type TimeLeft = {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function getTimeLeft(target: Date): TimeLeft {
  const diff = Math.max(0, target.getTime() - Date.now())
  const s = Math.floor(diff / 1000)
  return {
    days: Math.floor(s / 86400),
    hours: Math.floor((s % 86400) / 3600),
    minutes: Math.floor((s % 3600) / 60),
    seconds: s % 60,
  }
}

const UNITS: { key: keyof TimeLeft; label: string }[] = [
  { key: 'days', label: 'Dias' },
  { key: 'hours', label: 'Horas' },
  { key: 'minutes', label: 'Min' },
  { key: 'seconds', label: 'Seg' },
]

export function CountdownSection() {
  const [time, setTime] = useState<TimeLeft | null>(null)

  useEffect(() => {
    setTime(getTimeLeft(EVENT.target))
    const id = setInterval(() => setTime(getTimeLeft(EVENT.target)), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative px-6 py-16">
      <Reveal className="mx-auto mb-12 max-w-2xl text-center">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.4em] text-hero-red">
          Tempo para a Missão
        </p>
        <h2 className="text-balance font-display text-4xl font-black sm:text-5xl">
          Contagem Regressiva
        </h2>
      </Reveal>

      <div className="mx-auto grid max-w-md grid-cols-4 gap-3">
        {UNITS.map((unit, i) => (
          <Reveal key={unit.key} delay={i * 100} from="up">
            <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-5 text-center backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-hero-gold/40">
              <div className="font-display text-5xl font-black tabular-nums text-hero-gold sm:text-4xl">
                {time ? String(time[unit.key]).padStart(2, '0') : '--'}
              </div>
              <div className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground sm:text-xs">
                {unit.label}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

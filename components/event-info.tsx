import { CalendarDays, Clock, MapPin } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { EVENT } from '@/lib/event'

const items = [
  {
    icon: CalendarDays,
    label: 'Data',
    value: EVENT.dateLabel,
  },
  {
    icon: Clock,
    label: 'Horário',
    value: EVENT.timeLabel,
  },
  {
    icon: MapPin,
    label: 'Local',
    value: EVENT.venue,
  },
]

export function EventInfo() {
  return (
    <section id="missao" className="relative px-6 py-16">
      <Reveal className="mx-auto mb-12 max-w-2xl text-center">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.4em] text-hero-red">
          ⚡ Missão Incrível: Briefing
        </p>

        <h2 className="text-balance font-display text-4xl font-black sm:text-5xl">
          Informações do Evento
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-white/70 sm:text-lg">
          A missão foi oficialmente iniciada! 🚨
          <br />
          Confira abaixo todos os detalhes dessa aventura e prepare-se para
          celebrar o primeiro ano do <strong className="text-hero-gold">Incrível Miguel</strong>.
        </p>
      </Reveal>

      <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-3">
        {items.map((item, i) => (
          <Reveal key={item.label} delay={i * 120} from="scale">
            <div className="group h-full rounded-3xl border border-white/10 bg-white/[0.04] p-8 text-center backdrop-blur-md transition-colors duration-300 hover:border-hero-gold/40">
              <span className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-hero-red/15 text-hero-red transition-transform duration-300 group-hover:scale-110">
                <item.icon className="h-8 w-8" />
              </span>

              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-hero-gold">
                {item.label}
              </p>

              <p className="mt-1 text-xl font-bold text-foreground">
                {item.value}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

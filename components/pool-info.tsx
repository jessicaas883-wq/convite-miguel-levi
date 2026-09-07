import { Waves } from 'lucide-react'
import { Reveal } from '@/components/reveal'

export function PoolInfo() {
  return (
    <section className="relative px-6 py-16">
      <div className="mx-auto grid max-w-4xl items-center gap-8 md:grid-cols-2">
        <Reveal from="left">
          <div className="rounded-3xl border border-hero-gold/25 bg-gradient-to-br from-hero-red/10 to-transparent p-8 backdrop-blur-md">
            <span className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-hero-gold/15 text-hero-gold">
              <Waves className="h-8 w-8" />
            </span>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.4em] text-hero-red">
              Zona Aquática
            </p>
            <h2 className="text-balance font-display text-4xl font-black sm:text-5xl">
              Piscina Liberada!
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/80">
              Depois dos parabéns, todos estão convidados a aproveitar a piscina
              do evento.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-hero-gold/40 bg-hero-gold/10 px-4 py-2 text-base font-semibold text-hero-gold">
              Não esqueça a roupa de banho!
            </div>
          </div>
        </Reveal>

        <Reveal from="right" delay={120}>
          <div className="relative flex aspect-square items-center justify-center md:aspect-[4/5]">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-3/4 w-3/4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-hero-gold/20 blur-[70px]" />
            <img
              src="/mascote-voando.png"
              alt="Miguel, o bebê super-herói, pronto para a piscina"
              className="animate-float relative h-[125%] w-[125%] object-contain mix-blend-screen drop-shadow-[0_25px_50px_rgba(246,192,38,0.45)]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}

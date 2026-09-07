'use client'

import { useState } from 'react'
import {
  MapPin,
  MessageCircle,
  CalendarCheck,
  ChevronDown,
  UserRound,
} from 'lucide-react'
import { Reveal } from '@/components/reveal'
import {
  EVENT,
  mapsUrl,
  whatsappMomUrl,
  whatsappDadUrl,
} from '@/lib/event'

export function LocationRsvp() {
  const [showContacts, setShowContacts] = useState(false)

  return (
    <section className="relative px-6 pb-16 pt-16">

      <Reveal className="mx-auto max-w-xl text-center">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.4em] text-hero-red">
          Coordenadas & Confirmação
        </p>

        <h2 className="text-balance font-display text-4xl font-black sm:text-5xl">
          {EVENT.venue}
        </h2>

        <p className="mt-4 text-lg leading-relaxed text-white/80">
          {EVENT.dateLabel} · {EVENT.timeLabel}
        </p>
      </Reveal>

      <Reveal
        delay={120}
        className="mx-auto mt-8 flex max-w-5xl flex-col items-center gap-6 md:flex-row md:justify-center"
      >
        <img
          src="/mascote-acenando.png"
          alt="Mascote acenando"
          className="w-72 animate-float drop-shadow-[0_25px_50px_rgba(255,180,0,.45)]"
        />

        <div className="flex w-full max-w-md flex-col gap-4">

          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-3 rounded-full bg-hero-red px-10 py-5 text-lg font-bold text-primary-foreground shadow-[0_0_30px_rgba(227,38,46,.35)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_45px_rgba(246,192,38,.25)] active:scale-95"
          >
            <MapPin className="h-5 w-5 text-hero-gold" />
            Ver no Google Maps
          </a>

          <button
            type="button"
            onClick={() => setShowContacts(!showContacts)}
            className="group flex items-center justify-center gap-3 rounded-full bg-hero-red px-10 py-5 text-lg font-bold text-primary-foreground shadow-[0_0_30px_rgba(227,38,46,.35)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_45px_rgba(246,192,38,.25)] active:scale-95"
          >
            <MessageCircle className="h-5 w-5 fill-current" />

            Confirmar presença

            <ChevronDown
              className={`h-4 w-4 transition-transform duration-300 ${
                showContacts ? 'rotate-180' : ''
              }`}
            />
          </button>

          {showContacts && (
            <div className="flex flex-col gap-3">

              <a
                href={whatsappMomUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 rounded-full border border-hero-gold/30 bg-white/[0.06] px-6 py-4 font-bold text-white transition-all duration-300 hover:scale-[1.02] hover:border-hero-gold/60"
              >
                <UserRound className="h-5 w-5 text-hero-gold" />
                Mamãe do Miguel
              </a>

              <a
                href={whatsappDadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 rounded-full border border-hero-gold/30 bg-white/[0.06] px-6 py-4 font-bold text-white transition-all duration-300 hover:scale-[1.02] hover:border-hero-gold/60"
              >
                <UserRound className="h-5 w-5 text-hero-gold" />
                Papai do Miguel
              </a>

            </div>
          )}

          <div className="mt-1 flex items-center justify-center gap-4 rounded-3xl border border-hero-gold/30 bg-gradient-to-r from-hero-gold/15 to-hero-red/10 px-8 py-5 text-center shadow-[0_0_25px_rgba(246,192,38,.12)]">
            <CalendarCheck className="h-5 w-5 shrink-0 text-hero-gold" />

            <p className="text-sm font-semibold text-foreground">
              Confirme sua presença até {EVENT.rsvpDeadline}.
            </p>
          </div>

        </div>
      </Reveal>

      {/* Mensagem final */}
      <Reveal delay={200} className="mx-auto mt-12 px-4 text-center">

        <p className="mx-auto max-w-xl text-lg leading-relaxed text-white/70">
          Toda grande missão fica ainda
          <br />
          mais especial com{' '}
          <span className="font-bold text-hero-gold">
            ✨ pessoas incríveis.
          </span>
        </p>

        <p className="mx-auto mt-5 max-w-xl text-lg font-semibold leading-relaxed text-white/80">
          Te espero para celebrar comigo
          <br />
          o meu{' '}
          <span className="bg-gradient-to-r from-hero-red via-hero-gold to-hero-red bg-[length:200%_auto] bg-clip-text font-black text-transparent [animation:shimmer_3s_linear_infinite]">
            primeiro aninho!
          </span>
        </p>

      </Reveal>

    </section>
  )
}
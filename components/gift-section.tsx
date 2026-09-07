'use client'

import { useState } from 'react'
import {
  Gift,
  Shirt,
  Footprints,
  ToyBrick,
  Sparkles,
  ChevronDown,
  ChevronUp,
} from 'lucide-react'
import { Reveal } from '@/components/reveal'

const suggestions = [
  {
    icon: Shirt,
    label: 'Roupas',
    detail: 'Tamanho 1 ou 2 anos',
  },
  {
    icon: Footprints,
    label: 'Calçados',
    detail: 'Tamanho 21 ou 22',
  },
  {
    icon: Sparkles,
    label: 'Cuidados especiais',
    detail: 'Para deixar o Miguel ainda mais cheiroso',
  },
  {
    icon: ToyBrick,
    label: 'Brinquedos',
    detail: 'Para o pequeno herói',
  },
]

export function GiftSection() {
  const [showSuggestions, setShowSuggestions] = useState(false)

  return (
    <section className="relative px-6 py-20">
      
      {/* Ícone e título */}
      <Reveal className="mx-auto mb-8 max-w-2xl text-center">
        <span className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-hero-red/15 text-hero-red">
          <Gift className="h-10 w-10" />
        </span>

        <p className="text-xs font-bold uppercase tracking-[0.45em] text-hero-red">
          Suprimentos da Missão
        </p>
      </Reveal>

      {/* Mensagem */}
      <Reveal delay={120} className="mx-auto mb-10 max-w-xl text-center">
        <p className="text-xl font-semibold text-white/80 sm:text-2xl">
          <span className="mr-2 text-hero-gold">💛</span>
          Sua presença é o meu maior presente.
        </p>
      </Reveal>

      {/* Botão */}
      <Reveal delay={180} className="mx-auto max-w-xl text-center">
        <button
          type="button"
          onClick={() => setShowSuggestions(!showSuggestions)}
          className="group inline-flex items-center gap-3 rounded-full border border-hero-gold/40 bg-hero-gold/10 px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] text-hero-gold transition-all duration-300 hover:scale-105 hover:bg-hero-gold/20 active:scale-95"
        >
          <Gift className="h-5 w-5 transition-transform duration-300 group-hover:rotate-6" />

          {showSuggestions
            ? 'Ocultar sugestões'
            : 'Desbloquear sugestões'}

          {showSuggestions ? (
            <ChevronUp className="h-5 w-5" />
          ) : (
            <ChevronDown className="h-5 w-5" />
          )}
        </button>
      </Reveal>

      {/* Sugestões */}
      {showSuggestions && (
        <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2">
          {suggestions.map((item, i) => (
            <Reveal
              key={item.label}
              delay={i * 100}
              from="up"
            >
              <div className="group h-full rounded-3xl border border-white/10 bg-white/[0.05] p-8 text-center backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-hero-gold/40 hover:shadow-[0_15px_35px_rgba(246,192,38,0.15)]">
                
                <span className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-3xl bg-hero-gold/15 text-hero-gold transition-transform duration-300 group-hover:scale-110">
                  <item.icon className="h-8 w-8" />
                </span>

                <p className="text-xl font-bold text-white">
                  {item.label}
                </p>

                <p className="mt-2 text-base text-white/70">
                  {item.detail}
                </p>

              </div>
            </Reveal>
          ))}
        </div>
      )}

    </section>
  )
}
'use client'

import { Sparkles } from 'lucide-react'
import { useParallax } from '@/hooks/use-parallax'

export function HeroSection({
  onStartMission,
}: {
  onStartMission: () => void
}) {
  const { ref, progress } = useParallax<HTMLDivElement>()

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-4 py-4 text-center sm:px-6 sm:py-20"
    >
      <div className="animate-float mb-2 inline-flex items-center gap-2 rounded-full border border-yellow-500/40 bg-white/[0.05] px-3 py-1 backdrop-blur-md sm:mb-6 sm:px-4 sm:py-1.5">
        <Sparkles className="h-3.5 w-3.5 text-yellow-400 sm:h-4 sm:w-4" />

        <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-yellow-400 sm:text-xs sm:tracking-[0.3em]">
          Convite Oficial
        </span>
      </div>

      <div
        className="relative z-20 mx-auto -mb-12 w-full max-w-[240px] sm:-mb-28 sm:max-w-[500px]"
        style={{
          transform: `translateY(${progress * -20}px)`,
          transition: 'transform 0.1s linear',
        }}
      >
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[110%] w-[110%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/25 blur-[60px] sm:blur-[80px]" />

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400/20 blur-[45px] sm:blur-[60px]" />

        <div className="animate-float-slow relative aspect-square">
          <img
            src="/mascote-um.png"
            alt="Miguel, o bebê super-herói, voando com capa dourada"
            className="h-full w-full object-contain"
          />
        </div>

        <div className="pointer-events-none absolute -bottom-2 left-1/2 h-4 w-3/5 -translate-x-1/2 rounded-[100%] bg-yellow-400/25 blur-md sm:h-6" />
      </div>

      <div className="relative z-10 w-full max-w-2xl rounded-[1.5rem] border border-white/5 bg-white/[0.04] px-5 pb-5 pt-12 backdrop-blur-md sm:rounded-[2rem] sm:px-8 sm:pb-10 sm:pt-24">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.35em] text-red-500 sm:mb-3 sm:text-sm sm:tracking-[0.5em]">
          Missão Nº 01
        </p>

        <h1 className="font-black leading-[1.02] tracking-tight">
          <span className="block text-2xl sm:text-5xl md:text-6xl">
            O Incrível
          </span>

          <span className="block whitespace-nowrap bg-gradient-to-r from-red-500 via-yellow-400 to-red-500 bg-[length:200%_auto] bg-clip-text text-transparent text-[clamp(1.8rem,9vw,3.75rem)] [animation:shimmer_3s_linear_infinite]">
            Miguel Levi
          </span>

          <span className="block whitespace-nowrap text-2xl sm:text-5xl md:text-6xl">
            completa 1 aninho!
          </span>
        </h1>

        <p className="mx-auto mt-3 max-w-lg text-sm leading-5 text-white/80 sm:mt-6 sm:text-lg sm:leading-8">
          Prepare seus poderes! Uma missão muito especial está prestes a
          começar.
        </p>

        <button
          type="button"
          onClick={onStartMission}
          className="animate-pulse-glow group mt-5 inline-flex items-center gap-2 rounded-full bg-red-500 px-7 py-3.5 text-base font-black uppercase tracking-wide text-white shadow-[0_0_30px_rgba(227,38,46,0.45)] transition-all duration-300 hover:scale-105 active:scale-95 sm:mt-10 sm:gap-3 sm:px-12 sm:py-5 sm:text-xl"
        >
          <span aria-hidden>🚨</span>
          Iniciar a Missão
        </button>
      </div>

      <div className="absolute bottom-3 left-1/2 hidden -translate-x-1/2 sm:block sm:bottom-8">
        <div className="flex h-9 w-6 items-start justify-center rounded-full border-2 border-yellow-400/50 p-1.5">
          <span className="h-2 w-1 animate-bounce rounded-full bg-yellow-400" />
        </div>
      </div>
    </section>
  )
}

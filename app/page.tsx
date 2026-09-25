'use client'

import { Sparkles } from 'lucide-react'
import { useParallax } from '@/hooks/use-parallax'

export default function Page() {
  const { ref, progress } = useParallax<HTMLDivElement>()

  return (
    <main
      ref={ref}
      className="relative flex min-h-screen flex-col items-center justify-center px-6 pb-28 pt-20 text-center"
    >
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-500/40 bg-white/[0.05] px-4 py-1.5">
        <Sparkles className="h-4 w-4 text-yellow-400" />

        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400">
          Convite Oficial
        </span>
      </div>

     <div className="animate-float-slow relative mx-auto w-full max-w-[400px]">
  <div className="pointer-events-none absolute left-1/2 top-1/2 h-[110%] w-[110%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/25 blur-[80px] [animation:heroGlow_5s_ease-in-out_infinite]" />

  <div className="pointer-events-none absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400/20 blur-[60px]" />

  <div className="relative aspect-square">
    <img
      src="/mascote-um.png"
      alt="Miguel, o bebê super-herói"
      className="h-full w-full object-contain"
    />
  </div>
</div>

      <div className="relative mt-8 rounded-[2rem] border border-white/5 bg-white/[0.04] px-8 pb-10 pt-8">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.5em] text-red-500">
          Missão Nº 01
        </p>

       <h1 className="text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
  <span className="block">O Incrível</span>

  <span className="block whitespace-nowrap bg-gradient-to-r from-red-500 via-yellow-400 to-red-500 bg-[length:200%_auto] bg-clip-text text-transparent text-[clamp(2rem,10vw,3.75rem)] [animation:shimmer_3s_linear_infinite]">
    Miguel Levi
  </span>

  <span className="block whitespace-nowrap">
    completa 1 aninho!
  </span>
</h1>

        <p className="mx-auto mt-6 max-w-lg text-lg leading-8 text-white/80">
          Prepare seus poderes! Uma missão muito especial está prestes a
          começar.
        </p>

        <button
  type="button"
  className="animate-pulse-glow group mt-10 inline-flex items-center gap-3 rounded-full bg-red-500 px-12 py-5 text-xl font-black uppercase tracking-wide text-white shadow-[0_0_40px_rgba(227,38,46,0.45)] transition-all duration-300 hover:scale-105 active:scale-95"
>
  <span aria-hidden>🚨</span>
  Iniciar a Missão
</button>
      </div>
    </main>
  )
}

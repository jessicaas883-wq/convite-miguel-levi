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

      <div
        className="relative mx-auto w-full max-w-[400px]"
        style={{
          transform: `translateY(${progress * -32}px)`,
          transition: 'transform 0.1s linear',
        }}
      >
        <img
          src="/mascote-um.png"
          alt="Miguel, o bebê super-herói"
          className="mx-auto h-auto w-full object-contain"
        />
      </div>

      <div className="relative mt-8 rounded-[2rem] border border-white/5 bg-white/[0.04] px-8 pb-10 pt-8">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.5em] text-red-500">
          Missão Nº 01
        </p>

        <h1 className="text-4xl font-black leading-tight sm:text-5xl">
          O Incrível Miguel Levi completa 1 aninho!
        </h1>

        <p className="mx-auto mt-6 max-w-lg text-lg leading-8 text-white/80">
          Prepare seus poderes! Uma missão muito especial está prestes a
          começar.
        </p>

        <button
          type="button"
          className="mt-10 rounded-full bg-red-500 px-12 py-5 text-xl font-black uppercase tracking-wide text-white"
        >
          🚨 Iniciar a Missão
        </button>
      </div>
    </main>
  )
}

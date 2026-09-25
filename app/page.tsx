'use client'

export default function Page() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="text-sm font-bold uppercase tracking-[0.5em]">
        Convite Oficial
      </p>

      <h1 className="mt-4 text-5xl font-black">
        Miguel Levi
      </h1>

      <p className="mt-6 text-lg">
        O Incrível Miguel completa 1 aninho!
      </p>

      <button
        type="button"
        className="mt-10 rounded-full bg-red-500 px-10 py-4 font-bold text-white"
      >
        🚨 Iniciar a Missão
      </button>
    </main>
  )
}

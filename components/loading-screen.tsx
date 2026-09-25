'use client'

import { useEffect, useState } from 'react'

export function LoadingScreen({
  onComplete,
}: {
  onComplete: () => void
}) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((current) => {
        if (current >= 100) {
          clearInterval(timer)
          onComplete()
          return 100
        }

        return current + 1
      })
    }, 40)

    return () => clearInterval(timer)
  }, [onComplete])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black text-white">
      <div className="w-full max-w-md px-6 text-center">
        <h1 className="text-4xl font-bold">
          Miguel Levi
        </h1>

        <p className="mt-4 text-white/70">
          Preparando os superpoderes...
        </p>

        <div className="mt-8 h-3 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full bg-red-500"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="mt-3 text-sm">
          {progress}%
        </p>
      </div>
    </div>
  )
}

"use client"

import { useEffect, useRef, useState } from "react"
import { Volume2, VolumeX } from "lucide-react"

export function MusicToggle() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [playing, setPlaying] = useState(false)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const audio = new Audio("/musica.mp3")
    audio.loop = true
    audio.volume = 0.25

    audioRef.current = audio

    const timer = setTimeout(() => setReady(true), 2500)

    return () => {
      clearTimeout(timer)
      audio.pause()
    }
  }, [])

  async function toggle() {
    if (!audioRef.current) return

    if (playing) {
      audioRef.current.pause()
      setPlaying(false)
    } else {
      try {
        await audioRef.current.play()
        setPlaying(true)
      } catch (err) {
        console.error(err)
      }
    }
  }

  if (!ready) return null

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={playing ? "Desligar música" : "Ligar música"}
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-secondary/40 bg-card/70 text-secondary shadow-[0_0_24px_rgba(246,192,38,0.35)] backdrop-blur-md transition-all duration-300 hover:scale-110 hover:shadow-[0_0_34px_rgba(246,192,38,0.6)] active:scale-95"
    >
      {playing ? (
        <Volume2 className="h-6 w-6" strokeWidth={2.2} />
      ) : (
        <VolumeX className="h-6 w-6" strokeWidth={2.2} />
      )}
    </button>
  )
}
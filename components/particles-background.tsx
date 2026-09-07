'use client'

import { useEffect, useRef } from 'react'

type Particle = {
  x: number
  y: number
  r: number
  vx: number
  vy: number
  hue: 'gold' | 'red' | 'white'
  alpha: number
  twinkle: number
}

const COLORS: Record<Particle['hue'], string> = {
  gold: '246, 192, 38',
  red: '227, 38, 46',
  white: '255, 255, 255',
}

export function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    let width = 0
    let height = 0
    let dpr = 1
    let particles: Particle[] = []
    let raf = 0

    const build = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = canvas.clientWidth
      height = canvas.clientHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const density = Math.min(90, Math.floor((width * height) / 14000))
      const hues: Particle['hue'][] = ['gold', 'red', 'white', 'white', 'gold']
      particles = Array.from({ length: density }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 2.2 + 0.6,
        vx: (Math.random() - 0.5) * 0.25,
        vy: -Math.random() * 0.35 - 0.05,
        hue: hues[Math.floor(Math.random() * hues.length)],
        alpha: Math.random() * 0.5 + 0.2,
        twinkle: Math.random() * Math.PI * 2,
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        p.twinkle += 0.02
        if (p.y < -10) p.y = height + 10
        if (p.x < -10) p.x = width + 10
        if (p.x > width + 10) p.x = -10

        const a = p.alpha * (0.6 + 0.4 * Math.sin(p.twinkle))
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${COLORS[p.hue]}, ${a})`
        ctx.shadowBlur = 8
        ctx.shadowColor = `rgba(${COLORS[p.hue]}, ${a})`
        ctx.fill()
      }
      ctx.shadowBlur = 0
      raf = requestAnimationFrame(draw)
    }

    build()
    if (reduceMotion) {
      draw()
      cancelAnimationFrame(raf)
    } else {
      draw()
    }

    const onResize = () => {
      cancelAnimationFrame(raf)
      build()
      draw()
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* Cinematic ambient glows */}
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-hero-red/20 blur-[110px]" />
      <div className="absolute right-[-6rem] top-1/3 h-80 w-80 rounded-full bg-hero-gold/15 blur-[120px]" />
      <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-hero-red/10 blur-[120px]" />
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  )
}

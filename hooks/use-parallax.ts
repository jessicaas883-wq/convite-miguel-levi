'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * Tracks the vertical scroll offset of an element relative to the viewport
 * center and returns a normalized progress value in [-1, 1].
 * Uses requestAnimationFrame + passive scroll for smooth, Apple-like motion.
 */
export function useParallax<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    if (reduceMotion) return

    let raf = 0
    let ticking = false

    const update = () => {
      const rect = node.getBoundingClientRect()
      const vh = window.innerHeight || 1
      const center = rect.top + rect.height / 2
      const p = (vh / 2 - center) / (vh / 2 + rect.height / 2)
      setProgress(Math.max(-1, Math.min(1, p)))
      ticking = false
    }

    const onScroll = () => {
      if (ticking) return
      ticking = true
      raf = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return { ref, progress }
}

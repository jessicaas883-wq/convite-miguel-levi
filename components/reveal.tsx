'use client'

import type React from 'react'
import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

type RevealProps = {
  children: React.ReactNode
  className?: string
  /** Delay in ms before the reveal animation starts once in view. */
  delay?: number
  /** Direction the element travels from while hidden. */
  from?: 'up' | 'down' | 'left' | 'right' | 'scale'
  as?: React.ElementType
}

const hiddenByDirection: Record<NonNullable<RevealProps['from']>, string> = {
  up: 'translate-y-10',
  down: '-translate-y-10',
  left: 'translate-x-10',
  right: '-translate-x-10',
  scale: 'scale-90',
}

export function Reveal({
  children,
  className,
  delay = 0,
  from = 'up',
  as: Tag = 'div',
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref as React.Ref<HTMLElement>}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        'transition-all duration-700 ease-out will-change-transform',
        visible
          ? 'translate-x-0 translate-y-0 scale-100 opacity-100 blur-0'
          : cn('opacity-0 blur-[2px]', hiddenByDirection[from]),
        className,
      )}
    >
      {children}
    </Tag>
  )
}

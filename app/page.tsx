'use client'

import { useEffect, useState } from 'react'
import { LoadingScreen } from '@/components/loading-screen'
import { ParticlesBackground } from '@/components/particles-background'
import { HeroSection } from '@/components/hero-section'
import { EventInfo } from '@/components/event-info'
import { CountdownSection } from '@/components/countdown-section'
import { GiftSection } from '@/components/gift-section'
import { LocationRsvp } from '@/components/location-rsvp'
import { MusicToggle } from '@/components/music-toggle'

export default function Page() {
  const [loading, setLoading] = useState(true)

  // Lock scroll while the boot sequence plays.
  useEffect(() => {
    document.body.style.overflow = loading ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [loading])

  return (
    <>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}

      <main className="relative min-h-screen overflow-hidden">
        <ParticlesBackground />

        <div
          className={`relative z-10 transition-opacity duration-1000 ${
            loading ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <HeroSection />
          <EventInfo />
          <CountdownSection />
          <GiftSection />
          <LocationRsvp />
        </div>

        {!loading && <MusicToggle />}
      </main>
    </>
  )
}

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
  const [missionStarted, setMissionStarted] = useState(false)

  useEffect(() => {
    document.body.style.overflow =
      loading || !missionStarted ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [loading, missionStarted])

  const handleLoadingComplete = () => {
    setLoading(false)
  }

  const handleStartMission = () => {
    setMissionStarted(true)
  }

  return (
    <>
      {loading && (
        <LoadingScreen onComplete={handleLoadingComplete} />
      )}

      {!loading && !missionStarted && (
        <main className="relative min-h-screen overflow-hidden">
          <ParticlesBackground />

          <HeroSection onStartMission={handleStartMission} />
        </main>
      )}

      {!loading && missionStarted && (
        <main className="relative min-h-screen overflow-hidden">
          <ParticlesBackground />

          <div className="relative z-10">
            <EventInfo />
            <CountdownSection />
            <GiftSection />
            <LocationRsvp />
          </div>

          <MusicToggle />
        </main>
      )}
    </>
  )
}

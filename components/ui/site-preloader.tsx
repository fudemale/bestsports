"use client"

import { useEffect, useState } from "react"

export function SitePreloader() {
  const [isDone, setIsDone] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Slight delay so the animation feels intentional, not a flash
    const MIN_VISIBLE_MS = 900

    document.body.classList.add("overflow-hidden")

    let timeout2: NodeJS.Timeout | null = null

    const timeout1 = setTimeout(() => {
      setIsDone(true)
      // Small delay before removing from DOM to allow fade-out transition
      timeout2 = setTimeout(() => {
        setIsVisible(false)
        document.body.classList.remove("overflow-hidden")
      }, 700) // Match transition duration
    }, MIN_VISIBLE_MS)

    return () => {
      clearTimeout(timeout1)
      if (timeout2) clearTimeout(timeout2)
      document.body.classList.remove("overflow-hidden")
    }
  }, [])

  if (!isVisible) {
    return null
  }

  return (
    <div
      role="status"
      aria-live="polite"
      className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#020617] via-[#020617] to-[#020617] transition-opacity duration-700 ${
        isDone ? "opacity-0 pointer-events-none scale-95" : "opacity-100 pointer-events-auto scale-100"
      }`}
    >
      <span className="sr-only">Loading Best Sports IPTV…</span>
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl flex flex-col items-center gap-6">
        {/* Circular neon loader */}
        <div className="relative flex items-center justify-center">
          {/* Outer rotating ring */}
          <div className="neon-ring absolute inset-0 w-24 h-24" />
          {/* Inner circle with logo */}
          <div className="neon-ring-inner relative w-20 h-20 rounded-full flex items-center justify-center bg-[#020617]/80 border border-primary/30">
            <span className="text-2xl">📺</span>
          </div>
        </div>

        {/* Brand text */}
        <div className="text-center space-y-2">
          <p className="text-lg font-bold text-white">Best Sports IPTV</p>
          <p className="text-sm text-muted-foreground">Loading your IPTV experience…</p>
        </div>
      </div>
    </div>
  )
}


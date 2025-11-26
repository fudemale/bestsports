"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

export function RouteProgressBar() {
  const pathname = usePathname()
  const [progress, setProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!pathname) return

    // Start a new animation on every route change
    setIsVisible(true)
    setProgress(0)

    const timeouts: number[] = []

    // Simulate progressive loading
    timeouts.push(window.setTimeout(() => setProgress(30), 50))
    timeouts.push(window.setTimeout(() => setProgress(60), 200))
    timeouts.push(window.setTimeout(() => setProgress(85), 400))
    timeouts.push(
      window.setTimeout(() => {
        setProgress(100)
        // Small delay so the user sees 100% before hiding
        const hideTimeout = window.setTimeout(() => {
          setIsVisible(false)
          setProgress(0)
        }, 200)
        timeouts.push(hideTimeout)
      }, 650),
    )

    return () => {
      timeouts.forEach((id) => window.clearTimeout(id))
    }
  }, [pathname])

  if (!isVisible) return null

  return (
    <div className="route-progress-container">
      <div
        className="route-progress-bar"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}


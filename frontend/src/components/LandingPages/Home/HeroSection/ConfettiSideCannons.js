"use client"

import { useEffect } from "react"
import confetti from "canvas-confetti"
import "./ConfettiSideCannons.css"

export function ConfettiSideCannons() {
  useEffect(() => {
    // Check screen width: only run for tablet/laptop (>= 768px)
    if (typeof window === "undefined") return
    const screenWidth = window.innerWidth
    if (screenWidth < 768) return // skip mobile

    const end = Date.now() + 3 * 1000 // 3 seconds
    const colors = [
      "#20c997", "#17a2b8", // teal shades
      "#ff85c1", "#d63384", // pink shades
      "#845ef7", "#b197fc", // purple shades
    ]

    const frame = () => {
      if (Date.now() > end) return

      confetti({
        particleCount: 6,
        angle: 60,
        spread: 75,
        startVelocity: 100,
        origin: { x: 0, y: 0.5 },
        colors: colors,
      })
      confetti({
        particleCount: 6,
        angle: 120,
        spread: 75,
        startVelocity: 100,
        origin: { x: 1, y: 0.5 },
        colors: colors,
      })

      requestAnimationFrame(frame)
    }

    frame()
  }, [])

  return <div className="cannon" />
}

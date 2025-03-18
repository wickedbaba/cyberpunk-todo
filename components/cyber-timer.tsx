"use client"

import { useState, useEffect } from "react"
import { useTheme } from "@/contexts/theme-context"

export function CyberTimer() {
  const [timeLeft, setTimeLeft] = useState({ hours: "00", minutes: "00", seconds: "00" })
  const { theme } = useTheme()

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date()
      const tomorrow = new Date(now)
      tomorrow.setDate(tomorrow.getDate() + 1)
      tomorrow.setHours(0, 0, 0, 0)

      const difference = tomorrow.getTime() - now.getTime()

      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
      const minutes = Math.floor((difference / (1000 * 60)) % 60)
      const seconds = Math.floor((difference / 1000) % 60)

      return {
        hours: hours.toString().padStart(2, "0"),
        minutes: minutes.toString().padStart(2, "0"),
        seconds: seconds.toString().padStart(2, "0"),
      }
    }

    const updateTimer = () => {
      setTimeLeft(calculateTimeLeft())
    }

    // Initial update
    updateTimer()

    // Update every second
    const timerId = setInterval(updateTimer, 1000)

    return () => clearInterval(timerId)
  }, [])

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-baseline">
        <span className="text-6xl md:text-7xl font-mono tracking-wider timer-text">
          {timeLeft.hours}.{timeLeft.minutes}
        </span>
        <span className="text-2xl md:text-3xl font-mono ml-2 timer-text-secondary">{timeLeft.seconds}s</span>
      </div>
      <h1 className="mt-3 text-xl font-semibold timer-message tracking-wide">
        MEMENTO MORI
      </h1>
      <p className="text-sm timer-message font-light tracking-wide">
        The only asset you have is <span className="font-bold text-base highlighted-text">TIME</span>.
      </p>
    </div>
  )
}


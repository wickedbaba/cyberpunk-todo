"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type ThemeType = "bladerunner" | "cyberpunk" | "matrix"

interface ThemeContextType {
  theme: ThemeType
  setTheme: (theme: ThemeType) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemeType>("bladerunner")

  // Load theme from localStorage on initial render
  useEffect(() => {
    const savedTheme = localStorage.getItem("cyberpunk-theme") as ThemeType | null
    if (savedTheme) {
      setTheme(savedTheme)
    }
  }, [])

  // Save theme to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cyberpunk-theme", theme)

    // Apply theme class to body
    document.body.classList.remove("theme-bladerunner", "theme-cyberpunk", "theme-matrix")
    document.body.classList.add(`theme-${theme}`)
  }, [theme])

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}


import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Cyberpunk Todo",
  description: "A minimalist cyberpunk-themed todo list with time currency",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600&family=Rajdhani:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="scanline theme-bladerunner">{children}</body>
    </html>
  )
}



import './globals.css'
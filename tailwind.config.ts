import type { Config } from "tailwindcss"
const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Cyberpunk-inspired color palette
        "cyber-black": "#0a0a0f",
        "cyber-blue": {
          DEFAULT: "#06b6d4", // cyan-500
          dark: "#0e7490", // cyan-700
        },
        "cyber-pink": {
          DEFAULT: "#ec4899", // pink-500
          dark: "#be185d", // pink-700
        },
        borderRadius: {
          lg: "var(--radius)",
          md: "calc(var(--radius) - 2px)",
          sm: "calc(var(--radius) - 4px)",
        },
      },
      fontFamily: {
        cyber: ["Orbitron", "sans-serif"],
        mono: ["Rajdhani", "monospace"],
      },
      boxShadow: {
        "neon-cyan": "0 0 5px #06b6d4, 0 0 20px rgba(6, 182, 212, 0.5)",
        "neon-pink": "0 0 5px #ec4899, 0 0 20px rgba(236, 72, 153, 0.5)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config


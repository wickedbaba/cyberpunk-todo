"use client"

import { useTheme } from "@/contexts/theme-context"
import { Button } from "@/components/ui/button"
import { Settings } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 z-20 bg-black/30 backdrop-blur-sm border border-current"
        >
          <Settings className="h-5 w-5" />
          <span className="sr-only">Switch theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => setTheme("bladerunner")}
          className={theme === "bladerunner" ? "bg-amber-950/20" : ""}
        >
          Blade Runner
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("cyberpunk")}
          className={theme === "cyberpunk" ? "bg-pink-950/20" : ""}
        >
          Cyberpunk 2077
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("matrix")} className={theme === "matrix" ? "bg-green-950/20" : ""}>
          The Matrix
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}


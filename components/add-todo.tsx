"use client"

import type React from "react"

import { useState } from "react"
import { useTheme } from "@/contexts/theme-context"

interface AddTodoProps {
  onAdd: (text: string) => void
}

export function AddTodo({ onAdd }: AddTodoProps) {
  const [text, setText] = useState("")
  const { theme } = useTheme()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (text.trim()) {
      onAdd(text)
      setText("")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full flex gap-2">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a task..."
        className="todo-input flex-1 px-4 py-2 rounded focus:outline-none"
      />
      <button type="submit" className="todo-button px-4 py-2 rounded transition-all duration-300 focus:outline-none">
        Add
      </button>
    </form>
  )
}


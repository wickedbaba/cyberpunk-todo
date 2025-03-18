"use client"

import { useState, useEffect } from "react"
import { CyberTimer } from "@/components/cyber-timer"
import { TodoList } from "@/components/todo-list"
import { AddTodo } from "@/components/add-todo"
import { ThemeProvider } from "@/contexts/theme-context"
import { ThemeSwitcher } from "@/components/theme-switcher"

export default function Home() {
  const [todos, setTodos] = useState<{ id: string; text: string; completed: boolean }[]>([])

  // Load todos from localStorage on initial render
  useEffect(() => {
    const savedTodos = localStorage.getItem("cyberpunk-todos")
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos))
    }
  }, [])

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("cyberpunk-todos", JSON.stringify(todos))
  }, [todos])

  const addTodo = (text: string) => {
    if (text.trim()) {
      setTodos([...todos, { id: crypto.randomUUID(), text, completed: false }])
    }
  }

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const toggleTodo = (id: string) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)))
  }

  return (
    <ThemeProvider>
      <main className="min-h-screen bg-black flex flex-col items-center p-4 sm:p-6 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 pointer-events-none bg-image"></div>
        
        {/* Theme-specific grid overlay */}
        <div className="absolute inset-0 theme-background pointer-events-none z-10"></div>

        <ThemeSwitcher />

        <div className="w-full max-w-2xl z-20 flex flex-col gap-8 min-h-screen">
          <div className="backdrop-blur-md bg-black/40 p-6 rounded-lg">
            <CyberTimer />
          </div>
          <div className="backdrop-blur-md bg-black/40 p-4 rounded-lg">
            <TodoList todos={todos} onDelete={deleteTodo} onToggle={toggleTodo} />
          </div>
          <div className="mt-auto pb-6 backdrop-blur-md bg-black/40 p-4 rounded-lg">
            <AddTodo onAdd={addTodo} />
          </div>
        </div>
      </main>
    </ThemeProvider>
  )
}


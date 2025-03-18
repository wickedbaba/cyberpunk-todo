"use client"

import { X, Check } from "lucide-react"
import { useTheme } from "@/contexts/theme-context"

interface Todo {
  id: string
  text: string
  completed: boolean
}

interface TodoListProps {
  todos: Todo[]
  onDelete: (id: string) => void
  onToggle: (id: string) => void
}

export function TodoList({ todos, onDelete, onToggle }: TodoListProps) {
  const { theme } = useTheme()

  if (todos.length === 0) {
    return (
      <div className="text-center py-8 w-full">
        <p className="todo-empty-text text-sm">No tasks yet. Add one below.</p>
      </div>
    )
  }

  return (
    <ul className="space-y-3 w-full">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className={`
            flex items-center justify-between p-4 w-full
            todo-item
            transition-all duration-300
            ${todo.completed ? "todo-completed" : ""}
          `}
        >
          <div className="flex items-center gap-3 cursor-pointer flex-1 min-w-0" onClick={() => onToggle(todo.id)}>
            <div
              className={`
              w-5 h-5 flex-shrink-0 flex items-center justify-center
              todo-checkbox
              rounded-sm transition-colors duration-300
            `}
            >
              {todo.completed && <Check size={14} className="todo-check-icon" />}
            </div>
            <span
              className={`
              ${todo.completed ? "todo-text-completed" : "todo-text"}
              transition-all duration-300 truncate
            `}
            >
              {todo.text}
            </span>
          </div>
          <button
            onClick={() => onDelete(todo.id)}
            className="todo-delete-btn hover:opacity-80 transition-colors p-1 ml-2 flex-shrink-0"
            aria-label="Delete task"
          >
            <X size={18} />
          </button>
        </li>
      ))}
    </ul>
  )
}


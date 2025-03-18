# Cyberpunk Todo

A minimalist cyberpunk-themed todo list application with a time currency concept built using Next.js, React, TypeScript, and Tailwind CSS.

## Project Overview

This project is a stylish cyberpunk-themed todo list application that combines functionality with aesthetic appeal. It features:

- **Time Currency Counter**: A countdown timer showing the time left until midnight, presented as "currency" (hours.minutes)
- **Todo Management**: Create, complete, and delete tasks
- **Theme Switching**: Choose between three cyberpunk-inspired themes:
  - Blade Runner (amber/orange accents)
  - Cyberpunk 2077 (blue/pink accents)
  - The Matrix (green accents)
- **Local Storage**: Todos and theme preferences are stored in the browser's localStorage
- **Responsive Design**: Works on mobile and desktop

## Project Structure

- `app/`: Core application files
  - `globals.css`: Global CSS styles including theme variables
  - `layout.tsx`: Root layout component with metadata and font imports
  - `page.tsx`: Main page component with todo state logic

- `components/`: UI components
  - `add-todo.tsx`: Form component for adding new todos
  - `cyber-timer.tsx`: Timer component showing time until midnight
  - `theme-switcher.tsx`: UI for switching between themes
  - `todo-list.tsx`: Component for rendering the list of todos
  - `ui/`: Shadcn UI components

- `contexts/`: React contexts
  - `theme-context.tsx`: Context for managing themes

## Technologies Used

- **Next.js**: React framework with file-based routing
- **React**: Frontend library for building user interfaces
- **TypeScript**: Typed JavaScript for better developer experience
- **Tailwind CSS**: Utility-first CSS framework for styling
- **localStorage API**: For persistent storage of todos and theme preference
- **Shadcn UI**: Component library for modern UI elements

## Design Features

- **Cyberpunk Aesthetics**: Neon colors, scanlines, and futuristic design elements
- **Theme Variations**: Multiple color schemes representing different cyberpunk universes
- **Animated Elements**: CSS transitions and animations for interactive elements
- **Custom Typography**: Uses Orbitron and Rajdhani fonts for a futuristic look

## Application Features

- **Todo Management**: Add, complete, and remove tasks with intuitive UI
- **Time Currency**: Visual countdown to midnight displayed as currency
- **Theme Switching**: Easy theme switching with persistent preferences
- **Responsive Design**: Optimized for various screen sizes 
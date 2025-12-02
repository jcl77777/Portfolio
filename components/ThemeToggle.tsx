import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

/**
 * Theme Toggle Component
 * Icon-based toggle between light and dark mode
 * Positioned next to language switcher
 */
export const ThemeToggle: React.FC = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800" />
    )
  }

  const isDark = theme === 'dark'

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="w-10 h-10 rounded-full bg-white/90 dark:bg-gray-800/90 border-2 border-gray-200 dark:border-gray-700 backdrop-blur-sm flex items-center justify-center hover:scale-110 hover:border-seafoam-400 dark:hover:border-seafoam-500 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-seafoam-400 shadow-lg"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <span className="text-xl transition-transform duration-200">
        {isDark ? '🌙' : '☀️'}
      </span>
    </button>
  )
}

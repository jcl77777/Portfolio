import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { ThemeToggle } from './ThemeToggle'

export const LanguageSwitcher: React.FC = () => {
  const { locale, setLocale } = useLanguage()

  const toggleLanguage = () => {
    setLocale(locale === 'zh-TW' ? 'en' : 'zh-TW')
  }

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-3">
      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Language Switcher */}
      <button
        onClick={toggleLanguage}
        className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-2 border-gray-200 dark:border-gray-700 rounded-lg px-4 py-2 font-semibold text-gray-900 dark:text-gray-100 hover:bg-white dark:hover:bg-gray-800 hover:border-seafoam-400 dark:hover:border-seafoam-500 transition-all shadow-lg font-rounded tracking-tight"
        aria-label="Switch language"
      >
        {locale === 'zh-TW' ? '🇹🇼 繁體中文' : '🇺🇸 English'}
      </button>
    </div>
  )
}


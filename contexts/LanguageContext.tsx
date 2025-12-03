import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { translations, Locale } from '../lib/i18n/translations'

type TranslationType = typeof translations[Locale]

interface LanguageContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: TranslationType
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}

interface LanguageProviderProps {
  children: ReactNode
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  // Always start with 'en' on both server and client to avoid hydration mismatch
  const [locale, setLocaleState] = useState<Locale>('en')

  // Load saved language from localStorage after component mounts (client-side only)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('certo-locale') as Locale | null
      if (saved && (saved === 'zh-TW' || saved === 'en')) {
        setLocaleState(saved)
      } else {
        // Detect browser language
        const browserLang = navigator.language || 'en'
        const detectedLocale = browserLang.startsWith('zh') ? 'zh-TW' : 'en'
        setLocaleState(detectedLocale)
      }
    }
  }, [])

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale)
    if (typeof window !== 'undefined') {
      localStorage.setItem('certo-locale', newLocale)
    }
  }

  const t = translations[locale]

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  )
}


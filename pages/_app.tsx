import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { LanguageProvider } from '../contexts/LanguageContext'
import { LanguageSwitcher } from '../components/LanguageSwitcher'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem>
      <LanguageProvider>
        <LanguageSwitcher />
        <Component {...pageProps} />
      </LanguageProvider>
    </ThemeProvider>
  )
}


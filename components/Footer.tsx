import React from 'react'
import Link from 'next/link'
import { CertoWordmark } from './Logo'
import { useLanguage } from '../contexts/LanguageContext'

export const Footer: React.FC = () => {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Brand */}
          <div>
            <CertoWordmark height={60} variant="white" showText={false} />
            <p className="mt-4 text-gray-400 dark:text-gray-500">
              {t.footer.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4 font-rounded text-white">{t.footer.quickLinks}</h3>
            <ul className="space-y-2 text-gray-400 dark:text-gray-500">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  {t.footer.home}
                </Link>
              </li>
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  {t.footer.features}
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  {t.footer.faq}
                </a>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  {t.footer.privacy}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  {t.footer.terms}
                </Link>
              </li>
            </ul>
          </div>

          {/* Download */}
          <div>
            <h3 className="font-bold mb-4 font-rounded text-white">{t.footer.download}</h3>
            <a
              href="https://apps.apple.com/app/certo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-certo-gradient text-white px-6 py-3 rounded-lg font-bold hover:scale-105 transition-transform font-rounded tracking-tight"
            >
              {t.footer.downloadButton}
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 dark:border-gray-900 pt-8 text-center text-gray-500 dark:text-gray-600">
          <p>{t.footer.copyright.replace('{year}', currentYear.toString())}</p>
        </div>
      </div>
    </footer>
  )
}


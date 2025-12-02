import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'

interface ContactLink {
  name: string
  url: string
  icon: string
}

interface ContactSectionProps {
  email?: string
  links?: ContactLink[]
}

/**
 * Contact Section
 * Displays email and social media links in consistent button style
 */
export const ContactSection: React.FC<ContactSectionProps> = ({
  email,
  links = [],
}) => {
  const { locale } = useLanguage()

  const title = locale === 'zh-TW' ? '聯絡方式' : 'Contact'
  const subtitle =
    locale === 'zh-TW'
      ? '歡迎隨時聯絡我'
      : 'Feel free to reach out'

  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-950">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 font-rounded tracking-tight text-gray-900 dark:text-gray-50">
          {title}
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">{subtitle}</p>

        {/* All contact buttons in one row - consistent style */}
        <div className="flex flex-wrap justify-center gap-4">
          {/* Email Button */}
          {email && (
            <a
              href={`mailto:${email}`}
              title={email}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-900 dark:text-gray-100 hover:bg-seafoam-400 dark:hover:bg-seafoam-500 hover:text-white transition-all font-medium"
            >
              <span>✉️</span>
              Email
            </a>
          )}

          {/* Social Media Links */}
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-900 dark:text-gray-100 hover:bg-seafoam-400 dark:hover:bg-seafoam-500 hover:text-white transition-all font-medium"
            >
              <span>{link.icon}</span>
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}


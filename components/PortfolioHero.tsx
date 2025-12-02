import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'

interface PortfolioHeroProps {
  title: string
  subtitle: string
  description?: string
}

/**
 * 作品集 Hero 區塊
 */
export const PortfolioHero: React.FC<PortfolioHeroProps> = ({
  title,
  subtitle,
  description,
}) => {
  return (
    <section className="min-h-[60vh] flex items-center justify-center px-4 py-20 bg-white dark:bg-gray-950">
      <div className="max-w-4xl mx-auto text-center">
        {/* 標題 */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight font-rounded text-gray-900 dark:text-gray-50">
          {title}
        </h1>

        {/* 副標題 */}
        <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
          {subtitle}
        </p>

        {/* 描述（可選） */}
        {description && (
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}


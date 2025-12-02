import React from 'react'
import { CertoWordmark } from './Logo'
import { useLanguage } from '../contexts/LanguageContext'

export const Hero: React.FC = () => {
  const { t } = useLanguage()

  return (
    <section className="min-h-screen flex items-center justify-center bg-certo-gradient px-4 py-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Logo */}
        <div className="mb-12 flex justify-center">
          <CertoWordmark height={120} variant="white" />
        </div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight font-rounded">
          {t.hero.title}
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
          {t.hero.subtitle}
        </p>

        {/* Description */}
        <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto">
          {t.hero.description}
        </p>

        {/* Feature List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 max-w-2xl mx-auto text-white/90">
          <div className="flex items-center justify-center gap-2">
            <span className="text-2xl">🔔</span>
            <span>{t.hero.feature1}</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="text-2xl">📝</span>
            <span>{t.hero.feature2}</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="text-2xl">🔒</span>
            <span>{t.hero.feature3}</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="text-2xl">👨‍👩‍👧‍👦</span>
            <span>{t.hero.feature4}</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://apps.apple.com/app/certo"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-certo-purple-dark px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-lg font-rounded tracking-tight"
          >
            {t.hero.ctaPrimary}
          </a>
          <a
            href="#features"
            className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-colors font-rounded tracking-tight"
          >
            {t.hero.ctaSecondary}
          </a>
        </div>
      </div>
    </section>
  )
}


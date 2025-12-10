import React from 'react'
import { HeroSection } from '../../lib/types/productLandingPage'
import { useLanguage } from '../../contexts/LanguageContext'
import { CertoWordmark } from '../Logo'
import { getProductTheme } from '../../lib/productTheme'

interface Props {
  data: HeroSection
  productId?: string
}

export const DynamicHero: React.FC<Props> = ({ data, productId }) => {
  const { locale } = useLanguage()
  const theme = getProductTheme(productId)

  return (
    <section className={`min-h-screen flex items-center justify-center ${data.backgroundGradient || 'bg-gray-900'} px-4 py-20`}>
      <div className="max-w-6xl mx-auto text-center">
        {/* Conditional Logo Rendering */}
        {data.logoComponent === 'CertoWordmark' && (
          <div className="mb-12 flex justify-center">
            <CertoWordmark height={120} variant="white" />
          </div>
        )}

        {/* Main Title */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight font-rounded">
          {data.title[locale]}
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
          {data.subtitle[locale]}
        </p>

        {/* Description */}
        <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto">
          {data.description[locale]}
        </p>

        {/* Feature List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 max-w-2xl mx-auto text-white/90">
          {data.features.map((feature, idx) => (
            <div key={idx} className="flex items-center justify-center gap-2">
              <span className="text-2xl">{feature.icon}</span>
              <span>{feature.text[locale]}</span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={data.ctaPrimary.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`bg-white ${theme.primaryText} ${theme.primaryTextHover} px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-lg font-rounded tracking-tight`}
          >
            {data.ctaPrimary.text[locale]}
          </a>
          {data.ctaSecondary && (
            <a
              href={data.ctaSecondary.anchor}
              className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-colors font-rounded tracking-tight"
            >
              {data.ctaSecondary.text[locale]}
            </a>
          )}
        </div>
      </div>
    </section>
  )
}

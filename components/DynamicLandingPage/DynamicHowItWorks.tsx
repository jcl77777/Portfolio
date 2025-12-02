import React from 'react'
import { HowItWorksSection } from '../../lib/types/productLandingPage'
import { useLanguage } from '../../contexts/LanguageContext'

interface Props {
  data: HowItWorksSection
}

export const DynamicHowItWorks: React.FC<Props> = ({ data }) => {
  const { locale } = useLanguage()

  return (
    <section id="how-it-works" className="py-20 px-4 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-rounded tracking-tight text-gray-900 dark:text-gray-50">
          {data.title[locale]}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {data.steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection Line (Desktop Only) - Spans the gap between cards */}
              {index < data.steps.length - 1 && (
                <div
                  className="hidden md:block absolute top-1/2 left-full h-1 bg-gradient-to-r from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500 -translate-y-1/2 dark:shadow-lg dark:shadow-purple-500/50"
                  style={{ width: '2rem', zIndex: 5 }}
                />
              )}

              <div className="relative bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 text-center hover:shadow-xl transition-shadow">
                <div className="text-6xl mb-4">{step.icon}</div>
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-certo-gradient rounded-full flex items-center justify-center text-white font-bold text-xl font-rounded shadow-lg">
                  {step.number}
                </div>
                <h3 className="text-2xl font-bold mb-4 font-rounded text-gray-900 dark:text-gray-50">{step.title[locale]}</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{step.description[locale]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

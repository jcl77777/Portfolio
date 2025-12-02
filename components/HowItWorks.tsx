import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'

export const HowItWorks: React.FC = () => {
  const { t } = useLanguage()

  const steps = [
    { number: '1', ...t.howItWorks.step1 },
    { number: '2', ...t.howItWorks.step2 },
    { number: '3', ...t.howItWorks.step3 },
  ]

  return (
    <section id="how-it-works" className="py-20 px-4 bg-certo-gray-light">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-rounded tracking-tight">
          {t.howItWorks.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection Line (Desktop Only) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-20 left-full w-full h-0.5 bg-certo-purple-light transform translate-x-1/2 z-0" />
              )}
              
              <div className="relative bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-shadow">
                <div className="text-6xl mb-4">{step.icon}</div>
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-certo-gradient rounded-full flex items-center justify-center text-white font-bold text-xl font-rounded">
                  {step.number}
                </div>
                <h3 className="text-2xl font-bold mb-4 font-rounded">{step.title}</h3>
                <p className="text-certo-gray-dark leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


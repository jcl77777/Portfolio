import React, { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

export const FAQ: React.FC = () => {
  const { t } = useLanguage()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 font-rounded tracking-tight">
          {t.faq.title}
        </h2>
        <div className="space-y-4">
          {t.faq.items.map((faq, index) => (
            <div
              key={index}
              className="border-2 border-certo-gray-light rounded-xl overflow-hidden hover:border-certo-purple-light transition-colors"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-certo-gray-light transition-colors"
              >
                <span className="font-bold text-lg font-rounded">{faq.question}</span>
                <span className="text-2xl text-certo-purple-dark">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-certo-gray-light text-certo-gray-dark leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


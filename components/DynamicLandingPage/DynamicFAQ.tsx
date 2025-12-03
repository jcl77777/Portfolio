import React, { useState } from 'react'
import { FAQSection } from '../../lib/types/productLandingPage'
import { useLanguage } from '../../contexts/LanguageContext'

interface Props {
  data: FAQSection
  productId?: string
}

export const DynamicFAQ: React.FC<Props> = ({ data, productId }) => {
  const { locale } = useLanguage()
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  
  // Determine color scheme based on product
  const isSparks = productId === 'sparks'
  const borderHoverClass = isSparks ? 'hover:border-sparks-orange dark:hover:border-sparks-yellow' : 'hover:border-purple-500 dark:hover:border-purple-400'
  const accentColorClass = isSparks ? 'text-sparks-orange dark:text-sparks-yellow' : 'text-purple-600 dark:text-purple-400'

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 font-rounded tracking-tight text-gray-900 dark:text-gray-50">
          {data.title[locale]}
        </h2>
        <div className="space-y-4">
          {data.items.map((faq, index) => (
            <div
              key={index}
              className={`border-2 border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden ${borderHoverClass} transition-colors bg-white dark:bg-gray-800`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                <span className="font-bold text-lg font-rounded text-gray-900 dark:text-gray-50">{faq.question[locale]}</span>
                <span className={`text-2xl ${accentColorClass}`}>
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 leading-relaxed">
                  {faq.answer[locale]}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

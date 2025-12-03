import React from 'react'
import { SolutionsSection } from '../../lib/types/productLandingPage'
import { useLanguage } from '../../contexts/LanguageContext'

interface Props {
  data: SolutionsSection
  productId?: string
}

export const DynamicSolutions: React.FC<Props> = ({ data, productId }) => {
  const { locale } = useLanguage()
  
  // Determine color scheme based on product
  const isSparks = productId === 'sparks'
  const borderHoverClass = isSparks ? 'hover:border-sparks-orange dark:hover:border-sparks-yellow' : 'hover:border-purple-500 dark:hover:border-purple-400'
  const accentColorClass = isSparks ? 'text-sparks-orange dark:text-sparks-yellow' : 'text-purple-600 dark:text-purple-400'

  return (
    <section id="features" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 font-rounded tracking-tight text-gray-900 dark:text-gray-50">
          {data.title[locale]}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.items.map((solution, index) => (
            <div
              key={index}
              className={`bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl p-6 ${borderHoverClass} hover:shadow-lg transition-all`}
            >
              <div className="text-4xl mb-4">{solution.icon}</div>
              <h3 className="text-2xl font-bold mb-4 font-rounded text-gray-900 dark:text-gray-50">{solution.title[locale]}</h3>
              <ul className="space-y-2 mb-4 text-gray-700 dark:text-gray-300">
                {solution.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className={`${accentColorClass} mt-1`}>•</span>
                    <span>{feature[locale]}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <p className={`text-sm ${accentColorClass} font-semibold`}>
                  {solution.highlight[locale]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

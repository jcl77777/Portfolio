import React from 'react'
import { ProblemsSection } from '../../lib/types/productLandingPage'
import { useLanguage } from '../../contexts/LanguageContext'

interface Props {
  data: ProblemsSection
}

export const DynamicProblems: React.FC<Props> = ({ data }) => {
  const { locale } = useLanguage()

  return (
    <section id="problems" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 font-rounded tracking-tight text-gray-900 dark:text-gray-50">
          {data.title[locale]}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.items.map((problem, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div className="text-5xl mb-4">{problem.icon}</div>
              <h3 className="text-xl font-bold mb-3 font-rounded text-gray-900 dark:text-gray-50">{problem.title[locale]}</h3>
              <p className="text-gray-700 dark:text-gray-300">{problem.description[locale]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

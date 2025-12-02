import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'

export const Features: React.FC = () => {
  const { t } = useLanguage()

  const problems = [
    t.problems.problem1,
    t.problems.problem2,
    t.problems.problem3,
  ]

  const solutions = [
    t.solutions.solution1,
    t.solutions.solution2,
    t.solutions.solution3,
    t.solutions.solution4,
    t.solutions.solution5,
  ]

  return (
    <section id="features" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Problems Section */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 font-rounded tracking-tight">
            {t.problems.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="bg-certo-gray-light rounded-2xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-5xl mb-4">{problem.icon}</div>
                <h3 className="text-xl font-bold mb-3 font-rounded">{problem.title}</h3>
                <p className="text-certo-gray-dark">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Solutions Section */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 font-rounded tracking-tight">
            {t.solutions.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-white border-2 border-certo-gray-light rounded-2xl p-6 hover:border-certo-purple-light hover:shadow-lg transition-all"
              >
                <div className="text-4xl mb-4">{solution.icon}</div>
                <h3 className="text-2xl font-bold mb-4 font-rounded">{solution.title}</h3>
                <ul className="space-y-2 mb-4 text-certo-gray-dark">
                  {solution.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-certo-purple-dark mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 pt-4 border-t border-certo-gray-light">
                  <p className="text-sm text-certo-purple-dark font-semibold">
                    {solution.highlight}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


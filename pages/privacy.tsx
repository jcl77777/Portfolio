import Head from 'next/head'
import Link from 'next/link'
import { useLanguage } from '../contexts/LanguageContext'
import { LanguageSwitcher } from '../components/LanguageSwitcher'

function PrivacyContent() {
  const { t, locale } = useLanguage()
  const currentDate = new Date().toLocaleDateString(locale === 'zh-TW' ? 'zh-TW' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  const sections = [
    { key: 'introduction', ...t.privacy.sections.introduction },
    { key: 'dataCollection', ...t.privacy.sections.dataCollection },
    { key: 'dataUsage', ...t.privacy.sections.dataUsage },
    { key: 'dataStorage', ...t.privacy.sections.dataStorage },
    { key: 'dataSharing', ...t.privacy.sections.dataSharing },
    { key: 'userRights', ...t.privacy.sections.userRights },
    { key: 'cookies', ...t.privacy.sections.cookies },
    { key: 'children', ...t.privacy.sections.children },
    { key: 'updates', ...t.privacy.sections.updates },
    { key: 'contact', ...t.privacy.sections.contact },
  ]

  return (
    <>
      <Head>
        <title>{t.privacy.title} | Certo</title>
        <meta name="description" content={t.privacy.sections.introduction.content[0]} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nannovalabs.com/privacy/" />
        <meta property="og:title" content={`${t.privacy.title} | Certo`} />
        <meta property="og:description" content={t.privacy.sections.introduction.content[0]} />
        <meta property="og:locale" content={locale === 'zh-TW' ? 'zh_TW' : 'en_US'} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:title" content={`${t.privacy.title} | Certo`} />
        <meta property="twitter:description" content={t.privacy.sections.introduction.content[0]} />
      </Head>

      <div className="min-h-screen bg-white dark:bg-gray-950">
        <LanguageSwitcher />

        {/* Header */}
        <header className="bg-seafoam-gradient text-white py-8 px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-2 font-rounded tracking-tight">
              {t.privacy.title}
            </h1>
            <p className="text-white/80">
              {t.privacy.lastUpdated.replace('{date}', currentDate)}
            </p>
          </div>
        </header>

        {/* Content */}
        <main className="max-w-4xl mx-auto px-4 py-12">
          <div className="prose prose-lg max-w-none">
            {sections.map((section, index) => (
              <section key={section.key} className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-50 font-rounded tracking-tight">
                  {section.title}
                </h2>
                <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                  {section.content.map((paragraph, pIndex) => {
                    // Check if paragraph starts with bullet point indicators
                    if (paragraph.startsWith('•') || paragraph.match(/^[A-Z]\./)) {
                      return (
                        <p key={pIndex} className="ml-4 pl-2 border-l-2 border-seafoam-500 dark:border-seafoam-400">
                          {paragraph}
                        </p>
                      )
                    }
                    // Check if it's a section header (ends with :)
                    if (paragraph.endsWith('：') || paragraph.endsWith(':')) {
                      return (
                        <h3 key={pIndex} className="text-xl font-bold mt-6 mb-3 text-gray-900 dark:text-gray-50 font-rounded">
                          {paragraph}
                        </h3>
                      )
                    }
                    // Regular paragraph
                    return (
                      <p key={pIndex} className="text-base leading-7">
                        {paragraph}
                      </p>
                    )
                  })}
                </div>
              </section>
            ))}
          </div>

          {/* Back to Home */}
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-seafoam-500 dark:text-seafoam-400 hover:text-seafoam-600 dark:hover:text-seafoam-300 font-semibold transition-colors font-rounded"
            >
              <span>←</span>
              <span>{t.footer.home}</span>
            </Link>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 dark:bg-gray-950 text-white py-8 px-4 mt-16">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-400 dark:text-gray-500 text-sm">
              © 2025 NanNova Labs
            </p>
          </div>
        </footer>
      </div>
    </>
  )
}

export default function Privacy() {
  return <PrivacyContent />
}


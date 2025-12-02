import Head from 'next/head'
import { Hero } from '../components/Hero'
import { Features } from '../components/Features'
import { HowItWorks } from '../components/HowItWorks'
import { FAQ } from '../components/FAQ'
import { Footer } from '../components/Footer'
import { useLanguage } from '../contexts/LanguageContext'

function HomeContent() {
  const { t, locale } = useLanguage()

  return (
    <>
      <Head>
        <title>{t.meta.title}</title>
        <meta name="description" content={t.meta.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://certo.app/" />
        <meta property="og:title" content={t.meta.ogTitle} />
        <meta property="og:description" content={t.meta.ogDescription} />
        <meta property="og:image" content="https://certo.app/og-image.png" />
        <meta property="og:locale" content={locale === 'zh-TW' ? 'zh_TW' : 'en_US'} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://certo.app/" />
        <meta property="twitter:title" content={t.meta.ogTitle} />
        <meta property="twitter:description" content={t.meta.ogDescription} />
        <meta property="twitter:image" content="https://certo.app/og-image.png" />
      </Head>

      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <FAQ />
      </main>

      <Footer />
    </>
  )
}

export default function Home() {
  return <HomeContent />
}


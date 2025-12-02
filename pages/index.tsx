import Head from 'next/head'
import { PortfolioHero } from '../components/PortfolioHero'
import { ProductsSection } from '../components/ProductsSection'
import { ContactSection } from '../components/ContactSection'
import { useLanguage } from '../contexts/LanguageContext'

/**
 * Portfolio Homepage
 * Displays personal introduction and all products
 */
export default function Home() {
  const { locale, t } = useLanguage()

  // Personal introduction configuration
  const heroConfig = {
    title: locale === 'zh-TW' ? '獨立 iOS 開發者 & 產品創作者' : 'iOS Developer & Product Creator',
    subtitle: locale === 'zh-TW'
      ? 'Building products people love to use'
      : 'Building products people love to use',
    description: locale === 'zh-TW'
      ? '專注於創造實用且順眼的產品，解決我們生活中遇到的問題。'
      : 'Focused on creating practical and beautiful products that solve real problems',
  }

  const contactConfig = {
    email: 'nannova.labs@gmail.com', 
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/jcl77777', 
        icon: '💻',
      },
      {
        name: 'Threads',
        url: 'https://www.threads.com/@jctheunlock', 
        icon: '🐦',
      },
    ],
  }

  return (
    <>
      <Head>
        <title>{locale === 'zh-TW' ? '產品集' : 'Product Portfolio'}</title>
        <meta
          name="description"
          content={
            locale === 'zh-TW'
              ? '專注於創建實用且美觀的數位產品，解決真實世界的問題。'
              : 'Build the products that people love to use'
          }
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <PortfolioHero
          title={heroConfig.title}
          subtitle={heroConfig.subtitle}
          description={heroConfig.description}
        />
        <ProductsSection />
        <ContactSection
          email={contactConfig.email}
          links={contactConfig.links}
        />
      </main>
    </>
  )
}


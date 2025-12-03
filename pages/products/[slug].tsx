import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { products, Product } from '../../lib/products'
import { useLanguage } from '../../contexts/LanguageContext'
import {
  DynamicHero,
  DynamicProblems,
  DynamicSolutions,
  DynamicHowItWorks,
  DynamicFAQ,
} from '../../components/DynamicLandingPage'
import { Footer } from '../../components/Footer'

interface Props {
  product: Product
}

export default function ProductLandingPage({ product }: Props) {
  const { locale } = useLanguage()
  const router = useRouter()

  // If no landing page data, redirect to portfolio with hash
  if (!product.landingPage) {
    if (typeof window !== 'undefined') {
      router.push(`/#${product.id}`)
    }
    return null
  }

  const { landingPage } = product
  const meta = landingPage.meta

  return (
    <>
      <Head>
        <title>{meta.title[locale]}</title>
        <meta name="description" content={meta.description[locale]} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://nannovalabs.com/products/${product.id}/`} />
        <meta property="og:title" content={meta.ogTitle[locale]} />
        <meta property="og:description" content={meta.ogDescription[locale]} />
        <meta property="og:image" content={meta.ogImage || 'https://nannovalabs.com/og-image.png'} />
        <meta property="og:locale" content={locale === 'zh-TW' ? 'zh_TW' : 'en_US'} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={`https://nannovalabs.com/products/${product.id}/`} />
        <meta property="twitter:title" content={meta.ogTitle[locale]} />
        <meta property="twitter:description" content={meta.ogDescription[locale]} />
        <meta property="twitter:image" content={meta.ogImage || 'https://nannovalabs.com/og-image.png'} />
      </Head>

      <main>
        <DynamicHero data={landingPage.hero} productId={product.id} />
        {landingPage.problems && <DynamicProblems data={landingPage.problems} productId={product.id} />}
        {landingPage.solutions && <DynamicSolutions data={landingPage.solutions} productId={product.id} />}
        {landingPage.howItWorks && <DynamicHowItWorks data={landingPage.howItWorks} productId={product.id} />}
        {landingPage.faq && <DynamicFAQ data={landingPage.faq} productId={product.id} />}
      </main>

      <Footer productId={product.id} />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = products
    .filter(p => p.landingPage) // Only generate pages for products with landing page data
    .map(p => ({ params: { slug: p.id } }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const product = products.find(p => p.id === params?.slug)

  if (!product) {
    return { notFound: true }
  }

  return {
    props: { product },
  }
}

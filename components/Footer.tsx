import React from 'react'
import Link from 'next/link'
import { useLanguage } from '../contexts/LanguageContext'
import { products, Product } from '../lib/products'

interface FooterProps {
  productId?: string
}

export const Footer: React.FC<FooterProps> = ({ productId }) => {
  const { locale, t } = useLanguage()
  const currentYear = new Date().getFullYear()
  
  // Get product info if productId is provided
  const product: Product | undefined = productId 
    ? products.find(p => p.id === productId)
    : undefined

  // Determine colors and content based on product
  const isSparks = productId === 'sparks'
  const gradientClass = isSparks ? 'bg-sparks-gradient' : 'bg-certo-gradient'
  
  // Get App Store link
  const appStoreLink = product?.links?.appStore || 'https://apps.apple.com/developer/nannova-labs'
  
  // Universal vision for NanNova Labs
  const vision = locale === 'zh-TW' 
    ? '專注於創造實用且順眼的產品，解決我們生活中遇到的問題。'
    : 'Focused on creating practical and beautiful products that solve real problems'

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="text-2xl font-bold font-rounded">NanNova Labs</div>
            </div>
            <p className="mt-4 text-gray-400 dark:text-gray-500 text-sm">
              {vision}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4 font-rounded text-white">
              {locale === 'zh-TW' ? '快速連結' : 'Quick Links'}
            </h3>
            <ul className="space-y-2 text-gray-400 dark:text-gray-500">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  {locale === 'zh-TW' ? '首頁' : 'Home'}
                </Link>
              </li>
              {productId && (
                <>
                  <li>
                    <a href="#features" className="hover:text-white transition-colors">
                      {locale === 'zh-TW' ? '功能介紹' : 'Features'}
                    </a>
                  </li>
                  <li>
                    <a href="#faq" className="hover:text-white transition-colors">
                      {locale === 'zh-TW' ? '常見問題' : 'FAQ'}
                    </a>
                  </li>
                </>
              )}
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  {locale === 'zh-TW' ? '隱私政策' : 'Privacy Policy'}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  {locale === 'zh-TW' ? '使用條款' : 'Terms of Service'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Download */}
          <div>
            <h3 className="font-bold mb-4 font-rounded text-white">
              {locale === 'zh-TW' ? '下載 App' : 'Download App'}
            </h3>
            {product?.links?.appStore ? (
              <a
                href={appStoreLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-block ${gradientClass} text-white px-6 py-3 rounded-lg font-bold hover:scale-105 transition-transform font-rounded tracking-tight`}
              >
                {locale === 'zh-TW' ? '立即下載' : 'Download Now'}
              </a>
            ) : (
              <Link
                href="/"
                className="inline-block bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-bold hover:scale-105 transition-transform font-rounded tracking-tight"
              >
                {locale === 'zh-TW' ? '查看所有產品' : 'View All Products'}
              </Link>
            )}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 dark:border-gray-900 pt-8 text-center text-gray-500 dark:text-gray-600">
          <p>© {currentYear} NanNova Labs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}


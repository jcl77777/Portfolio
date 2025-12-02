import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Product } from '../lib/products'

interface ProductCardProps {
  product: Product
  locale: 'zh-TW' | 'en'
}

/**
 * Product Card Component
 * Displays information and links for a single product
 */
export const ProductCard: React.FC<ProductCardProps> = ({ product, locale }) => {
  const name = product.name[locale]
  const tagline = product.tagline[locale]
  const description = product.description[locale]
  const hasLandingPage = !!product.landingPage
  const isComingSoon = product.comingSoon

  return (
    <div className="group relative bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:border-seafoam-400 dark:hover:border-seafoam-500 hover:shadow-xl transition-all duration-300">
      {/* Coming Soon Badge */}
      {isComingSoon && (
        <div className="absolute top-4 right-4 z-10 bg-seafoam-gradient text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
          {locale === 'zh-TW' ? '即將推出' : 'Coming Soon'}
        </div>
      )}
      {/* Content wrapper with conditional blur */}
      <div className={isComingSoon ? 'blur-sm pointer-events-none' : ''}>
        {/* 產品圖標/圖片 */}
        <div className="mb-4 flex items-center gap-4">
          {product.image ? (
            <div className="w-16 h-16 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
              <Image
                src={product.image}
                alt={name}
                width={64}
                height={64}
                className="object-contain"
              />
            </div>
          ) : product.icon ? (
            <div className="text-5xl">{product.icon}</div>
          ) : (
            <div className="w-16 h-16 rounded-xl bg-seafoam-gradient flex items-center justify-center text-white text-2xl font-bold">
              {name.charAt(0)}
            </div>
          )}
          <div className="flex-1">
            <h3 className="text-2xl font-bold font-rounded text-gray-900 dark:text-gray-50 group-hover:text-seafoam-600 dark:group-hover:text-seafoam-400 transition-colors">
              {name}
            </h3>
            {tagline && (
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{tagline}</p>
            )}
          </div>
        </div>

        {/* 產品描述 */}
        <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
          {description}
        </p>

        {/* 標籤 */}
        {product.tags && product.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {product.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Action Buttons */}
      {!isComingSoon && (
        <div className="flex flex-wrap gap-2">
          {/* Learn More button - links to landing page if available */}
          {hasLandingPage && (
            <Link
              href={`/products/${product.id}`}
              className="inline-flex items-center gap-2 px-4 py-2 bg-seafoam-gradient text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
            >
              <span>→</span>
              {locale === 'zh-TW' ? '了解更多' : 'Learn More'}
            </Link>
          )}

          {product.links.appStore && (
            <a
              href={product.links.appStore}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              <span>📱</span>
              App Store
            </a>
          )}
          {product.links.playStore && (
            <a
              href={product.links.playStore}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition-colors"
            >
              <span>🤖</span>
              Play Store
            </a>
          )}
          {product.links.website && (
            <a
              href={product.links.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border-2 border-seafoam-400 dark:border-seafoam-500 text-seafoam-600 dark:text-seafoam-400 rounded-lg text-sm font-medium hover:bg-seafoam-400 dark:hover:bg-seafoam-500 hover:text-white transition-colors"
            >
              <span>🌐</span>
              Website
            </a>
          )}
          {product.links.github && (
            <a
              href={product.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors"
            >
              <span>💻</span>
              GitHub
            </a>
          )}
        </div>
      )}
    </div>
  )
}


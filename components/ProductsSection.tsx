import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { products } from '../lib/products'
import { ProductCard } from './ProductCard'

/**
 * 產品展示區塊
 */
export const ProductsSection: React.FC = () => {
  const { locale } = useLanguage()

  // 分離置頂和普通產品
  const featuredProducts = products.filter((p) => p.featured)
  const regularProducts = products.filter((p) => !p.featured)

  // 合併：置頂產品在前
  const sortedProducts = [...featuredProducts, ...regularProducts]

  const title = locale === 'zh-TW' ? '我的產品' : 'My Products'
  const subtitle =
    locale === 'zh-TW'
      ? '我開發的各類應用'
      : 'Apps and products I built'

  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* 標題 */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-rounded tracking-tight text-gray-900 dark:text-gray-50">
            {title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">{subtitle}</p>
        </div>

        {/* 產品網格 */}
        {sortedProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sortedProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                locale={locale}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-gray-500 dark:text-gray-500">
            <p>{locale === 'zh-TW' ? '暫無產品' : 'No products yet'}</p>
          </div>
        )}
      </div>
    </section>
  )
}


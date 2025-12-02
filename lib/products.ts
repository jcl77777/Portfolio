/**
 * Product Data Configuration
 * Add your products here
 */

import { ProductLandingPage } from './types/productLandingPage'

export interface ProductLink {
  appStore?: string
  website?: string
  github?: string
  playStore?: string
}

export interface Product {
  id: string
  name: {
    'zh-TW': string
    'en': string
  }
  tagline: {
    'zh-TW': string
    'en': string
  }
  description: {
    'zh-TW': string
    'en': string
  }
  icon?: string // emoji or image path
  image?: string // Product screenshot path (place in public/images/products/)
  links: ProductLink
  tags?: string[] // ['iOS', 'AI', 'Productivity', 'Web']
  featured?: boolean // Whether to feature/pin this product
  comingSoon?: boolean // Whether this product is coming soon (shows blur effect and badge)
  landingPage?: ProductLandingPage // Optional: Full landing page data for /products/[slug]
}

import { certoLandingPage } from './productData/certo'

export const products: Product[] = [
  {
    id: 'certo',
    name: {
      'zh-TW': 'Certo',
      'en': 'Certo',
    },
    tagline: {
      'zh-TW': '不再忘記訂閱付款',
      'en': 'Never Miss a Subscription Payment',
    },
    description: {
      'zh-TW': '智能訂閱管理 App，幫您追蹤所有訂閱服務，提醒付款日期，管理家庭共享，優化開支。',
      'en': 'Smart subscription management app to track all your subscriptions, remind payment dates, manage family sharing, and optimize spending.',
    },
    image: '/images/app-icon.png',
    links: {
      appStore: 'https://apps.apple.com/app/certo',
    },
    tags: ['iOS', 'Productivity', 'Finance'],
    featured: true,
    landingPage: certoLandingPage, // Connect Certo landing page data
  },
  {
    id: 'example-coming-soon',
    name: {
      'zh-TW': '新產品',
      'en': 'New Product',
    },
    tagline: {
      'zh-TW': '敬請期待',
      'en': 'Stay Tuned',
    },
    description: {
      'zh-TW': '我們正在開發令人興奮的新產品，將為您帶來全新的體驗。',
      'en': 'We are developing an exciting new product that will bring you a brand new experience.',
    },
    icon: '🚀',
    links: {},
    tags: ['Coming Soon'],
    comingSoon: true,
  },
  // Add more products here
  // Example:
  // {
  //   id: 'my-new-product',
  //   name: {
  //     'zh-TW': '我的新產品',
  //     'en': 'My New Product',
  //   },
  //   tagline: {
  //     'zh-TW': '一句話標語',
  //     'en': 'One-line tagline',
  //   },
  //   description: {
  //     'zh-TW': '產品簡短描述',
  //     'en': 'Short product description',
  //   },
  //   icon: '🚀',
  //   image: '/images/products/my-new-product.png',
  //   links: {
  //     website: 'https://example.com',
  //     appStore: 'https://apps.apple.com/app/example',
  //   },
  //   tags: ['Web', 'Design'],
  //   featured: false,
  //   landingPage: myNewProductLandingPage, // Optional: Import from productData folder
  // },
]


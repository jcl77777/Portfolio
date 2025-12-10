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
import { sparksLandingPage } from './productData/sparks'
import { custoLandingPage } from './productData/custo'

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
    id: 'sparks',
    name: {
      'zh-TW': 'Sparks',
      'en': 'Sparks',
    },
    tagline: {
      'zh-TW': '捕捉每一個靈感火花',
      'en': 'Capture Every Spark of Inspiration',
    },
    description: {
      'zh-TW': '別再讓絕妙點子溜走。Sparks 幫你捕捉、整理並實踐任何形式的靈感——文字、圖片、連結或影片。將稍縱即逝的想法，轉化為持久的影響力。',
      'en': 'Never lose a brilliant idea again. Sparks helps you capture, organize, and act on inspiration in any form—text, images, links, or videos. Turn fleeting thoughts into lasting impact.',
    },
    image: '/images/sparks-icon.png',
    links: {
      appStore: 'https://apps.apple.com/app/sparks', // 需要更新为实际 App Store 链接
    },
    tags: ['iOS', 'Productivity', 'Inspiration'],
    featured: true,
    comingSoon: false,
    landingPage: sparksLandingPage,
  },
  {
    id: 'custo',
    name: {
      'zh-TW': 'Custo',
      'en': 'Custo',
    },
    tagline: {
      'zh-TW': '你的密碼，由你守護',
      'en': 'Your Passwords, Protected',
    },
    description: {
      'zh-TW': '一款注重隱私的密碼管理工具，所有資料都儲存在你的裝置上。生物辨識解鎖、密碼強度分析、健康檢查儀表板。',
      'en': 'A privacy-first password manager that keeps everything on your device. Biometric unlock, password strength analysis, and a health dashboard.',
    },
    image: '/images/custo-icon.png',
    links: {
      appStore: 'https://apps.apple.com/app/custo',
    },
    tags: ['iOS', 'Security', 'Productivity'],
    featured: true,
    landingPage: custoLandingPage,
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


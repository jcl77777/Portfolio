/**
 * Sparks Product Landing Page Data
 */

import { ProductLandingPage } from '../types/productLandingPage'

export const sparksLandingPage: ProductLandingPage = {
  hero: {
    title: {
      'zh-TW': '捕捉每一个灵感瞬间',
      'en': 'Capture Every Spark of Inspiration',
    },
    subtitle: {
      'zh-TW': '',
      'en': '',
    },
    description: {
      'zh-TW': '用 Sparks 快速捕捉、整理并行动。无论是文字、图片、链接还是视频，让每个灵感都成为可能。',
      'en': 'Quickly capture, organize, and act on your inspirations with Sparks. Whether it\'s text, images, links, or videos, turn every spark into possibility.',
    },
    features: [
      {
        icon: '✨',
        text: {
          'zh-TW': '四种输入方式（文字、图片、链接、视频）',
          'en': 'Four input types (text, image, URL, video)',
        },
      },
      {
        icon: '🏷️',
        text: {
          'zh-TW': '智能标签分类与集合管理',
          'en': 'Smart tags and collection management',
        },
      },
      {
        icon: '📊',
        text: {
          'zh-TW': '数据统计与趋势分析',
          'en': 'Statistics and trend analysis',
        },
      },
      {
        icon: '🔔',
        text: {
          'zh-TW': '每日随机灵感提醒',
          'en': 'Daily random inspiration reminder',
        },
      },
      {
        icon: '🔒',
        text: {
          'zh-TW': '本地优先，隐私保护',
          'en': 'Local-first, privacy protected',
        },
      },
    ],
    ctaPrimary: {
      text: {
        'zh-TW': '立即下载',
        'en': 'Download Now',
      },
      url: 'https://apps.apple.com/app/sparks', // 需要更新为实际 App Store 链接
    },
    ctaSecondary: {
      text: {
        'zh-TW': '了解更多',
        'en': 'Learn More',
      },
      anchor: '#features',
    },
    backgroundGradient: 'bg-sparks-gradient',
  },

  problems: {
    title: {
      'zh-TW': '灵感稍纵即逝？你不孤单。',
      'en': 'Inspirations Fading Away? You are Not Alone.',
    },
    items: [
      {
        icon: '💡',
        title: {
          'zh-TW': '好想法总是在不经意间出现',
          'en': 'Great Ideas Come at Unexpected Times',
        },
        description: {
          'zh-TW': '走在路上、睡前、工作时，突然有了好想法，但很快就忘记了。',
          'en': 'Walking down the street, before sleep, at work—great ideas come suddenly, but fade away just as quickly.',
        },
      },
      {
        icon: '📱',
        title: {
          'zh-TW': '信息碎片化，难以管理',
          'en': 'Fragmented Information, Hard to Manage',
        },
        description: {
          'zh-TW': '文字、图片、链接分散在不同应用中，找不到之前保存的灵感。',
          'en': 'Text, images, and links scattered across different apps, making it impossible to find what you saved before.',
        },
      },
      {
        icon: '📝',
        title: {
          'zh-TW': '灵感保存后往往被遗忘',
          'en': 'Saved Inspirations Often Forgotten',
        },
        description: {
          'zh-TW': '保存了很多灵感，但缺乏系统化的方式回顾和转化为行动。',
          'en': 'You save many inspirations, but lack a systematic way to review and turn them into action.',
        },
      },
    ],
  },

  solutions: {
    title: {
      'zh-TW': 'Sparks 如何解决这些问题？',
      'en': 'How Sparks Solves These Problems',
    },
    items: [
      {
        icon: '✨',
        title: {
          'zh-TW': '多类型快速捕捉',
          'en': 'Multi-Type Quick Capture',
        },
        features: [
          {
            'zh-TW': '支持文字、图片、URL、视频四种类型',
            'en': 'Supports text, image, URL, and video types',
          },
          {
            'zh-TW': '一键保存，几秒钟完成',
            'en': 'One-tap save, done in seconds',
          },
          {
            'zh-TW': '简洁优雅的输入界面',
            'en': 'Simple and elegant input interface',
          },
        ],
        highlight: {
          'zh-TW': '无论何时何地，快速捕捉每一个灵感',
          'en': 'Capture every inspiration quickly, anytime, anywhere',
        },
      },
      {
        icon: '🏷️',
        title: {
          'zh-TW': '智能组织管理',
          'en': 'Smart Organization',
        },
        features: [
          {
            'zh-TW': '标签系统快速分类',
            'en': 'Tag system for quick categorization',
          },
          {
            'zh-TW': '集合功能整理相关灵感',
            'en': 'Collections to organize related inspirations',
          },
          {
            'zh-TW': '搜索功能快速找到内容',
            'en': 'Search function to quickly find content',
          },
        ],
        highlight: {
          'zh-TW': '让每个灵感都有归属，不再迷失',
          'en': 'Give every inspiration a home, never lose track',
        },
      },
      {
        icon: '📊',
        title: {
          'zh-TW': '数据洞察与提醒',
          'en': 'Data Insights & Reminders',
        },
        features: [
          {
            'zh-TW': 'Dashboard 展示统计和趋势',
            'en': 'Dashboard shows statistics and trends',
          },
          {
            'zh-TW': '每日随机灵感回顾',
            'en': 'Daily random inspiration review',
          },
          {
            'zh-TW': '连续使用追踪',
            'en': 'Usage streak tracking',
          },
        ],
        highlight: {
          'zh-TW': '了解你的创意习惯，持续激发灵感',
          'en': 'Understand your creative habits, continuously spark inspiration',
        },
      },
      {
        icon: '🔒',
        title: {
          'zh-TW': '本地优先，隐私保护',
          'en': 'Local-First, Privacy Protected',
        },
        features: [
          {
            'zh-TW': '所有数据存储在设备本地',
            'en': 'All data stored locally on device',
          },
          {
            'zh-TW': '不上传云端，不追踪行为',
            'en': 'No cloud upload, no behavior tracking',
          },
          {
            'zh-TW': '完全掌控您的创意隐私',
            'en': 'Complete control over your creative privacy',
          },
        ],
        highlight: {
          'zh-TW': '你的灵感。你的设备。你的隐私。',
          'en': 'Your inspirations. Your device. Your privacy.',
        },
      },
    ],
  },

  howItWorks: {
    title: {
      'zh-TW': '三步驟，開始使用 Sparks',
      'en': 'Three Steps to Get Started with Sparks',
    },
    steps: [
      {
        number: '1',
        icon: '✨',
        title: {
          'zh-TW': '捕捉灵感',
          'en': 'Capture Inspiration',
        },
        description: {
          'zh-TW': '选择类型（文字/图片/链接/视频），输入内容，添加标签，一键保存。',
          'en': 'Choose type (text/image/link/video), enter content, add tags, save with one tap.',
        },
      },
      {
        number: '2',
        icon: '🏷️',
        title: {
          'zh-TW': '组织整理',
          'en': 'Organize & Manage',
        },
        description: {
          'zh-TW': '使用标签和集合分类，Dashboard 查看统计，搜索快速定位。',
          'en': 'Use tags and collections to categorize, view statistics on Dashboard, search to quickly locate.',
        },
      },
      {
        number: '3',
        icon: '📊',
        title: {
          'zh-TW': '持续行动',
          'en': 'Take Action',
        },
        description: {
          'zh-TW': '每日随机灵感提醒，查看趋势和统计，将灵感转化为任务。',
          'en': 'Daily random inspiration reminders, view trends and statistics, turn inspirations into tasks.',
        },
      },
    ],
  },

  faq: {
    title: {
      'zh-TW': '常見問題',
      'en': 'Frequently Asked Questions',
    },
    items: [
      {
        question: {
          'zh-TW': 'Sparks 需要网络连接吗？',
          'en': 'Does Sparks require internet connection?',
        },
        answer: {
          'zh-TW': '不需要。Sparks 是完全离线的 App，所有数据存储在您的设备上。',
          'en': 'No. Sparks is a completely offline app, all data is stored on your device.',
        },
      },
      {
        question: {
          'zh-TW': '数据会上传到云端吗？',
          'en': 'Will data be uploaded to the cloud?',
        },
        answer: {
          'zh-TW': '不会。Sparks 采用本地存储，所有数据都在您的设备上，完全保护隐私。',
          'en': 'No. Sparks uses local storage, all data stays on your device, fully protecting privacy.',
        },
      },
      {
        question: {
          'zh-TW': '支持哪些类型的灵感？',
          'en': 'What types of inspirations are supported?',
        },
        answer: {
          'zh-TW': '支持文字笔记、图片、URL 链接和视频四种类型。',
          'en': 'Supports four types: text notes, images, URL links, and videos.',
        },
      },
      {
        question: {
          'zh-TW': '有免费版本吗？',
          'en': 'Is there a free version?',
        },
        answer: {
          'zh-TW': '是的。免费版本支持无限灵感、5 个标签和 1 个集合。升级到 Premium 可解锁无限标签、无限集合和搜索功能。',
          'en': 'Yes. Free version supports unlimited inspirations, 5 tags, and 1 collection. Upgrade to Premium unlocks unlimited tags, unlimited collections, and search functionality.',
        },
      },
      {
        question: {
          'zh-TW': 'Premium 版本多少钱？',
          'en': 'How much does Premium cost?',
        },
        answer: {
          'zh-TW': 'Premium 为终身版本，一次性付费 $39.99，永久解锁所有高级功能。',
          'en': 'Premium is a lifetime version, one-time payment of $39.99, permanently unlocks all premium features.',
        },
      },
      {
        question: {
          'zh-TW': '可以在多个设备上同步吗？',
          'en': 'Can I sync across multiple devices?',
        },
        answer: {
          'zh-TW': '目前 Sparks 采用本地存储，不支持跨设备同步。iCloud 同步功能正在规划中。',
          'en': 'Currently Sparks uses local storage and does not support cross-device sync. iCloud sync is planned for the future.',
        },
      },
    ],
  },

  meta: {
    title: {
      'zh-TW': 'Sparks - 捕捉每一个灵感瞬间',
      'en': 'Sparks - Capture Every Spark of Inspiration',
    },
    description: {
      'zh-TW': '用 Sparks 快速捕捉、整理并行动。无论是文字、图片、链接还是视频，让每个灵感都成为可能。立即下载 Sparks。',
      'en': 'Quickly capture, organize, and act on your inspirations with Sparks. Whether it\'s text, images, links, or videos, turn every spark into possibility. Download Sparks today.',
    },
    ogTitle: {
      'zh-TW': 'Sparks - 捕捉每一个灵感瞬间',
      'en': 'Sparks - Capture Every Spark of Inspiration',
    },
    ogDescription: {
      'zh-TW': '快速捕捉、整理并行动。无论是文字、图片、链接还是视频，让每个灵感都成为可能。',
      'en': 'Quickly capture, organize, and act on your inspirations. Whether it\'s text, images, links, or videos, turn every spark into possibility.',
    },
    ogImage: 'https://nannovalabs.com/images/sparks-og-image.png',
  },
}


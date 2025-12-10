/**
 * Sparks Product Landing Page Data
 */

import { ProductLandingPage } from '../types/productLandingPage'

export const sparksLandingPage: ProductLandingPage = {
  hero: {
    title: {
      'zh-TW': '捕捉每一個靈感火花',
      'en': 'Capture Every Spark of Inspiration',
    },
    subtitle: {
      'zh-TW': '',
      'en': '',
    },
    description: {
      'zh-TW': '別再讓絕妙點子溜走。Sparks 幫你捕捉、整理並實踐任何形式的靈感：文字、圖片、連結或影片。將稍縱即逝的想法，轉化為持久的影響力。',
      'en': 'Never lose a brilliant idea again. Sparks helps you capture, organize, and act on inspiration in any form: text, images, links, or videos. Turn fleeting thoughts into lasting impact.',
    },
    features: [
      {
        icon: '✨',
        text: {
          'zh-TW': '捕捉任何形式：文字、圖片、網址和影片',
          'en': 'Capture anything: text, images, URLs, and videos',
        },
      },
      {
        icon: '🏷️',
        text: {
          'zh-TW': '用智慧標籤和收藏夾輕鬆整理',
          'en': 'Organize with smart tags and collections',
        },
      },
      {
        icon: '📊',
        text: {
          'zh-TW': '用數據洞察追蹤你的創意歷程',
          'en': 'Track your creative journey with insights',
        },
      },
      {
        icon: '🔔',
        text: {
          'zh-TW': '每日靈感提醒，重新發現舊點子',
          'en': 'Rediscover ideas with daily inspiration reminders',
        },
      },
      {
        icon: '🔒',
        text: {
          'zh-TW': '你的資料安全私密地保存在裝置上',
          'en': 'Your data stays private and secure on your device',
        },
      },
    ],
    ctaPrimary: {
      text: {
        'zh-TW': '立即下載',
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
      'zh-TW': '靈感總是溜走？你並不孤單',
      'en': 'Ideas Slip Away? You\'re Not Alone.',
    },
    items: [
      {
        icon: '💡',
        title: {
          'zh-TW': '好點子總在最不方便的時候出現',
          'en': 'Great Ideas Strike at the Worst Times',
        },
        description: {
          'zh-TW': '早晨散步時、睡前、開會中。絕妙的想法突然冒出來，然後又迅速消失。',
          'en': 'On your morning walk, right before sleep, in the middle of a meeting. Brilliant ideas appear out of nowhere, then vanish just as quickly.',
        },
      },
      {
        icon: '📱',
        title: {
          'zh-TW': '你的點子散落各處',
          'en': 'Your Ideas Are Scattered Everywhere',
        },
        description: {
          'zh-TW': '筆記在這個 App、照片在另一個、連結又存在別處。要找上個月存的那個好點子？祝你好運。',
          'en': 'Notes in one app, photos in another, links saved somewhere else. Finding that one great idea you saved last month? Good luck.',
        },
      },
      {
        icon: '📝',
        title: {
          'zh-TW': '存了之後……就忘記它的存在',
          'en': 'You Save It... Then Forget It Exists',
        },
        description: {
          'zh-TW': '你的靈感墓園堆滿了從未實現的想法。沒有系統化的回顧和行動方式，它們只會積累數位灰塵。',
          'en': 'Your inspiration graveyard is full of ideas that never went anywhere. Without a system to review and act, they just gather digital dust.',
        },
      },
    ],
  },

  solutions: {
    title: {
      'zh-TW': 'Sparks 如何解決這些問題？',
      'en': 'How Sparks Solves These Problems',
    },
    items: [
      {
        icon: '✨',
        title: {
          'zh-TW': '幾秒鐘就能捕捉點子',
          'en': 'Capture Ideas in Seconds',
        },
        features: [
          {
            'zh-TW': '即時儲存文字、圖片、網址和影片',
            'en': 'Save text, images, URLs, and videos instantly',
          },
          {
            'zh-TW': '簡潔無干擾的介面',
            'en': 'Clean, distraction-free interface',
          },
          {
            'zh-TW': '一鍵搞定',
            'en': 'One tap and it\'s done',
          },
        ],
        highlight: {
          'zh-TW': '靈感不等人，你的工具也不該讓你等。',
          'en': 'Inspiration waits for no one. Neither should your capture tool.',
        },
      },
      {
        icon: '🏷️',
        title: {
          'zh-TW': '需要時立刻找到你要的',
          'en': 'Find What You Need, When You Need It',
        },
        features: [
          {
            'zh-TW': '用彈性的標籤和收藏夾整理',
            'en': 'Organize with flexible tags and collections',
          },
          {
            'zh-TW': '強大的搜尋功能立即找到任何內容',
            'en': 'Powerful search to find anything instantly',
          },
          {
            'zh-TW': '看見你的點子，而不是雜亂的清單',
            'en': 'See your ideas, not a messy list',
          },
        ],
        highlight: {
          'zh-TW': '每個點子都有歸屬。不必再翻找混亂。',
          'en': 'Every idea has its place. No more digging through chaos.',
        },
      },
      {
        icon: '📊',
        title: {
          'zh-TW': '讓你的點子保持活力',
          'en': 'Keep Your Ideas Alive',
        },
        features: [
          {
            'zh-TW': '儀表板顯示你的創意模式和趨勢',
            'en': 'Dashboard showing your creative patterns and trends',
          },
          {
            'zh-TW': '每日提醒重新浮現被遺忘的寶藏',
            'en': 'Daily reminders resurface forgotten gems',
          },
          {
            'zh-TW': '追蹤你的靈感連續紀錄',
            'en': 'Track your inspiration streak',
          },
        ],
        highlight: {
          'zh-TW': '點子不是用來封存的，而是用來激發行動的。',
          'en': 'Ideas aren\'t meant to be archived. They\'re meant to inspire action.',
        },
      },
      {
        icon: '🔒',
        title: {
          'zh-TW': '你的點子，你的隱私',
          'en': 'Your Ideas, Your Privacy',
        },
        features: [
          {
            'zh-TW': '所有內容都留在你的裝置上',
            'en': 'Everything stays on your device',
          },
          {
            'zh-TW': '不上傳雲端、不追蹤、不監控',
            'en': 'No cloud uploads, no tracking, no surveillance',
          },
          {
            'zh-TW': '你完全擁有自己的創意作品',
            'en': 'You own your creative work completely',
          },
        ],
        highlight: {
          'zh-TW': '你最具創意的想法值得被保護。',
          'en': 'Your most creative thoughts deserve privacy.',
        },
      },
    ],
  },

  howItWorks: {
    title: {
      'zh-TW': '3 步驟開始使用 Sparks',
      'en': 'Start Capturing in 3 Simple Steps',
    },
    steps: [
      {
        number: '1',
        icon: '✨',
        title: {
          'zh-TW': '捕捉任何東西',
          'en': 'Capture Anything',
        },
        description: {
          'zh-TW': '看到啟發的東西了嗎？點 + 按鈕，選擇格式（文字、圖片、連結或影片），加上標籤，儲存。只要 5 秒。',
          'en': 'Saw something inspiring? Tap the + button, choose your format (text, image, link, or video), add a tag, and save. Takes 5 seconds.',
        },
      },
      {
        number: '2',
        icon: '🏷️',
        title: {
          'zh-TW': '輕鬆整理',
          'en': 'Organize Effortlessly',
        },
        description: {
          'zh-TW': '依標籤或類型瀏覽你的收藏。檢視儀表板，看見你的創意思考趨勢和模式。',
          'en': 'Browse your collection by tag or type. Check your Dashboard to see trends and patterns in your creative thinking.',
        },
      },
      {
        number: '3',
        icon: '📊',
        title: {
          'zh-TW': '將點子轉化為行動',
          'en': 'Turn Ideas into Action',
        },
        description: {
          'zh-TW': '每日取得過去靈感的提醒。檢視你的統計數據。將零散的想法轉化為有意義的專案。',
          'en': 'Get daily reminders of past inspirations. Review your stats. Transform scattered thoughts into meaningful projects.',
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
          'zh-TW': 'Sparks 需要網路連線嗎？',
          'en': 'Does Sparks need an internet connection?',
        },
        answer: {
          'zh-TW': '不需要！Sparks 完全離線運作。你的靈感隨時都能存取，即使沒有 WiFi 或行動數據也一樣。',
          'en': 'Nope! Sparks works completely offline. Your inspirations are always accessible, even without WiFi or cellular data.',
        },
      },
      {
        question: {
          'zh-TW': '我的資料會上傳到雲端嗎？',
          'en': 'Is my data uploaded to the cloud?',
        },
        answer: {
          'zh-TW': '絕不會。所有內容都留在你的裝置上。沒有雲端備份、沒有第三方伺服器、沒有資料收集。你的點子只屬於你。',
          'en': 'Never. Everything stays on your device. No cloud backups, no third-party servers, no data collection. Your ideas are yours alone.',
        },
      },
      {
        question: {
          'zh-TW': '支援哪些類型的靈感？',
          'en': 'What types of inspirations are supported?',
        },
        answer: {
          'zh-TW': '支援四種類型：文字筆記、圖片、網址連結和影片。',
          'en': 'Supports four types: text notes, images, URL links, and videos.',
        },
      },
      {
        question: {
          'zh-TW': '有免費版本嗎？',
          'en': 'Is there a free version?',
        },
        answer: {
          'zh-TW': '有！免費版本包含無限靈感、5 個標籤和 1 個收藏夾。非常適合入門。Premium 解鎖無限標籤、收藏夾和進階搜尋功能，只要 $39.99（終身買斷，一次性付費）。',
          'en': 'Yes! The free version includes unlimited inspirations, 5 tags, and 1 collection. Perfect for getting started. Premium unlocks unlimited tags, collections, and advanced search for $39.99 (lifetime, one-time payment).',
        },
      },
      {
        question: {
          'zh-TW': 'Premium 版本多少錢？',
          'en': 'How much is Premium?',
        },
        answer: {
          'zh-TW': '只要 $39.99！一次付清，永久擁有。沒有訂閱制、沒有重複費用。付一次錢，終身保有所有進階功能。',
          'en': 'Just $39.99! Paid once, accessforever. No subscriptions, no recurring charges. Pay once, keep all premium features for life.',
        },
      },
      {
        question: {
          'zh-TW': '可以在 iPhone 和 iPad 之間同步嗎？',
          'en': 'Can I sync between my iPhone and iPad?',
        },
        answer: {
          'zh-TW': '目前還不行。Sparks 目前將所有內容儲存在各裝置的本地端。iCloud 同步功能已在我們的規劃中，即將推出！',
          'en': 'Not yet. Sparks currently stores everything locally on each device. iCloud sync is on our roadmap and coming soon!',
        },
      },
    ],
  },

  meta: {
    title: {
      'zh-TW': 'Sparks: 捕捉每一個靈感火花',
      'en': 'Sparks: Capture Every Spark of Inspiration',
    },
    description: {
      'zh-TW': '別再讓絕妙點子溜走。Sparks 是一款簡單、私密的 iOS App，用於捕捉和整理靈感：文字、圖片、連結和影片。在 iOS 上免費下載。',
      'en': 'Never lose a great idea again. Sparks is a simple, private iOS app for capturing and organizing inspiration: text, images, links, and videos. Download free on iOS.',
    },
    ogTitle: {
      'zh-TW': 'Sparks: 捕捉每一個靈感火花',
      'en': 'Sparks: Capture Every Spark of Inspiration',
    },
    ogDescription: {
      'zh-TW': '捕捉、整理並實踐你最好的點子。無論是筆記、照片、連結或影片。Sparks 讓你的靈感保持活力。',
      'en': 'Capture, organize, and act on your best ideas. Whether it\'s a note, photo, link, or video. Sparks keeps your inspiration alive.',
    },
    ogImage: 'https://nannovalabs.com/images/sparks-og-image.png',
  },
}


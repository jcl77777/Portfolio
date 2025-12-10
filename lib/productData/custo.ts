/**
 * Custo Product Landing Page Data
 */

import { ProductLandingPage } from '../types/productLandingPage'

export const custoLandingPage: ProductLandingPage = {
  hero: {
    title: {
      'zh-TW': '你的密碼，由你守護',
      'en': 'Your Passwords, Protected',
    },
    subtitle: {
      'zh-TW': '',
      'en': '',
    },
    description: {
      'zh-TW': '一款注重隱私的密碼管理工具，所有資料都儲存在你的裝置上。生物辨識解鎖、密碼強度分析、健康檢查儀表板——讓你的每個帳號都安全無虞。',
      'en': 'A privacy-first password manager that keeps everything on your device. Biometric unlock, password strength analysis, and a health dashboard—keeping every account secure.',
    },
    features: [
      {
        icon: '🔐',
        text: {
          'zh-TW': '生物辨識或主密碼保護',
          'en': 'Biometric or master password protection',
        },
      },
      {
        icon: '💪',
        text: {
          'zh-TW': '密碼強度即時分析',
          'en': 'Real-time password strength analysis',
        },
      },
      {
        icon: '🩺',
        text: {
          'zh-TW': '密碼健康儀表板',
          'en': 'Password health dashboard',
        },
      },
      {
        icon: '🏷️',
        text: {
          'zh-TW': '分類與智慧搜尋',
          'en': 'Categories and smart search',
        },
      },
      {
        icon: '🔒',
        text: {
          'zh-TW': '完全本地加密，無雲端',
          'en': 'Fully local encryption, no cloud',
        },
      },
    ],
    ctaPrimary: {
      text: {
        'zh-TW': '立即下載',
        'en': 'Download Now',
      },
      url: 'https://apps.apple.com/app/custo',
    },
    ctaSecondary: {
      text: {
        'zh-TW': '了解更多',
        'en': 'Learn More',
      },
      anchor: '#features',
    },
    backgroundGradient: 'bg-custo-gradient',
  },

  problems: {
    title: {
      'zh-TW': '密碼管理讓你頭痛？',
      'en': 'Password Management Giving You Headaches?',
    },
    items: [
      {
        icon: '🤯',
        title: {
          'zh-TW': '密碼太多，根本記不住',
          'en': 'Too Many Passwords to Remember',
        },
        description: {
          'zh-TW': '每個網站都要不同密碼，結果要不是用同一組，就是忘記哪個配哪個。',
          'en': 'Every site wants a different password. You either reuse the same one everywhere, or forget which goes where.',
        },
      },
      {
        icon: '⚠️',
        title: {
          'zh-TW': '不知道密碼夠不夠強',
          'en': 'No Idea If Your Passwords Are Strong Enough',
        },
        description: {
          'zh-TW': '「Password123」真的安全嗎？你可能正在使用容易被破解的密碼，卻渾然不知。',
          'en': 'Is "Password123" really safe? You might be using easily crackable passwords without even knowing it.',
        },
      },
      {
        icon: '☁️',
        title: {
          'zh-TW': '不想把密碼放在雲端',
          'en': 'Don\'t Want Passwords in the Cloud',
        },
        description: {
          'zh-TW': '雲端密碼管理器很方便，但你的敏感資料也交給了別人。萬一他們被駭呢？',
          'en': 'Cloud password managers are convenient, but your sensitive data is in someone else\'s hands. What if they get hacked?',
        },
      },
    ],
  },

  solutions: {
    title: {
      'zh-TW': 'Custo 如何解決這些問題',
      'en': 'How Custo Solves These Problems',
    },
    items: [
      {
        icon: '🔐',
        title: {
          'zh-TW': '一個地方，所有密碼',
          'en': 'One Place for All Passwords',
        },
        features: [
          {
            'zh-TW': '密碼卡片介面，清楚易讀',
            'en': 'Card interface for easy viewing',
          },
          {
            'zh-TW': '分類管理，快速找到',
            'en': 'Categories for quick organization',
          },
          {
            'zh-TW': '強大搜尋，瞬間定位',
            'en': 'Powerful search to find anything instantly',
          },
        ],
        highlight: {
          'zh-TW': '不用再翻遍筆記本或試遍所有密碼。',
          'en': 'No more digging through notes or guessing passwords.',
        },
      },
      {
        icon: '💪',
        title: {
          'zh-TW': '看見密碼的真實強度',
          'en': 'See Your Passwords\' True Strength',
        },
        features: [
          {
            'zh-TW': '即時強度評分（強/中/弱）',
            'en': 'Real-time strength scoring (Strong/Moderate/Weak)',
          },
          {
            'zh-TW': '健康儀表板一目瞭然',
            'en': 'Health dashboard at a glance',
          },
          {
            'zh-TW': '識別重複使用和過期的密碼',
            'en': 'Identify reused and old passwords',
          },
        ],
        highlight: {
          'zh-TW': '知道問題，才能解決問題。',
          'en': 'You can\'t fix what you can\'t see.',
        },
      },
      {
        icon: '🔒',
        title: {
          'zh-TW': '你的資料，只在你手中',
          'en': 'Your Data Stays With You',
        },
        features: [
          {
            'zh-TW': '所有資料都加密儲存在裝置上',
            'en': 'All data encrypted on your device',
          },
          {
            'zh-TW': '無雲端同步，無第三方伺服器',
            'en': 'No cloud sync, no third-party servers',
          },
          {
            'zh-TW': 'Face ID / Touch ID 快速解鎖',
            'en': 'Face ID / Touch ID for fast unlock',
          },
        ],
        highlight: {
          'zh-TW': '真正的隱私，從本地開始。',
          'en': 'True privacy starts local.',
        },
      },
    ],
  },

  howItWorks: {
    title: {
      'zh-TW': '3 步驟開始使用 Custo',
      'en': 'Get Started in 3 Simple Steps',
    },
    steps: [
      {
        number: '1',
        icon: '➕',
        title: {
          'zh-TW': '新增密碼',
          'en': 'Add Your Passwords',
        },
        description: {
          'zh-TW': '輸入服務名稱、帳號和密碼。Custo 會自動分析密碼強度，讓你知道是否需要更換。',
          'en': 'Enter the service name, username, and password. Custo automatically analyzes the strength and tells you if it needs improvement.',
        },
      },
      {
        number: '2',
        icon: '🔐',
        title: {
          'zh-TW': '設定保護方式',
          'en': 'Set Up Protection',
        },
        description: {
          'zh-TW': '選擇 Face ID、Touch ID 或主密碼來保護你的密碼庫。快速又安全。',
          'en': 'Choose Face ID, Touch ID, or a master password to protect your vault. Fast and secure.',
        },
      },
      {
        number: '3',
        icon: '🩺',
        title: {
          'zh-TW': '監控密碼健康',
          'en': 'Monitor Password Health',
        },
        description: {
          'zh-TW': '健康儀表板隨時告訴你哪些密碼太弱、重複使用或太久沒更新。保持最佳狀態。',
          'en': 'The health dashboard shows which passwords are weak, reused, or outdated. Stay in top shape.',
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
          'zh-TW': 'Custo 會把我的密碼上傳到雲端嗎？',
          'en': 'Does Custo upload my passwords to the cloud?',
        },
        answer: {
          'zh-TW': '絕對不會！所有資料都加密儲存在你的裝置本地。沒有雲端伺服器，沒有第三方存取。你的密碼只屬於你。',
          'en': 'Absolutely not! All data is encrypted and stored locally on your device. No cloud servers, no third-party access. Your passwords are yours alone.',
        },
      },
      {
        question: {
          'zh-TW': '如果我忘記主密碼怎麼辦？',
          'en': 'What if I forget my master password?',
        },
        answer: {
          'zh-TW': '如果你設定了生物辨識，可以用 Face ID 或 Touch ID 解鎖。如果只使用主密碼，由於我們不儲存你的密碼，將無法恢復。請務必記住你的主密碼。',
          'en': 'If you\'ve set up biometrics, you can use Face ID or Touch ID to unlock. If using only a master password, since we don\'t store it, recovery isn\'t possible. Please remember your master password.',
        },
      },
      {
        question: {
          'zh-TW': '什麼是密碼健康儀表板？',
          'en': 'What is the password health dashboard?',
        },
        answer: {
          'zh-TW': '健康儀表板分析你所有的密碼，告訴你哪些是弱密碼、哪些被重複使用、哪些超過 90 天沒更新。幫你保持所有帳號的安全狀態。',
          'en': 'The health dashboard analyzes all your passwords and tells you which are weak, reused, or haven\'t been updated in over 90 days. It helps you maintain security across all accounts.',
        },
      },
      {
        question: {
          'zh-TW': 'Custo 是免費嗎？',
          'en': 'Is Custo free?',
        },
        answer: {
          'zh-TW': '歡迎一次性購買，永久解鎖，提供功能如無限密碼卡片和完整健康分析。',
          'en': 'Welcome to purchase a one-time license, unlocked forever. Features like unlimited password cards and full health analysis are available as a one-time purchase.',
        },
      },
      {
        question: {
          'zh-TW': '可以在多台裝置間同步嗎？',
          'en': 'Can I sync between multiple devices?',
        },
        answer: {
          'zh-TW': '目前 Custo 專注於單一裝置的本地安全。iCloud 同步功能正在規劃中，敬請期待！',
          'en': 'Currently, Custo focuses on local security for a single device. iCloud sync is on our roadmap—stay tuned!',
        },
      },
    ],
  },

  meta: {
    title: {
      'zh-TW': 'Custo 你的密碼，由你守護',
      'en': 'Custo: Your Passwords, Protected',
    },
    description: {
      'zh-TW': '一款注重隱私的密碼管理 App，所有資料都儲存在你的裝置上。生物辨識解鎖、密碼強度分析、健康檢查儀表板。在 iOS 上直接下載。',
      'en': 'A privacy-first password manager that keeps everything on your device. Biometric unlock, password strength analysis, and a health dashboard. Download now on iOS.',
    },
    ogTitle: {
      'zh-TW': 'Custo 你的密碼，由你守護',
      'en': 'Custo: Your Passwords, Protected',
    },
    ogDescription: {
      'zh-TW': '本地加密、生物辨識保護、密碼健康儀表板。Custo 讓你的每個帳號都安全無虞。',
      'en': 'Local encryption, biometric protection, password health dashboard. Custo keeps every account secure.',
    },
    ogImage: 'https://nannovalabs.com/images/custo-og-image.png',
  },
}

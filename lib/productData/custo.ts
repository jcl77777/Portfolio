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
      'en': 'A privacy-first password manager that lives entirely on your device. Unlock with Face ID, analyze password strength, and track your security health—all without the cloud.',
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
          'en': 'Too Many Passwords to Keep Track Of',
        },
        description: {
          'zh-TW': '每個網站都要不同密碼，結果要不是用同一組，就是忘記哪個配哪個。',
          'en': 'Every site demands a unique password. So you end up reusing the same one everywhere—or playing a guessing game every time you log in.',
        },
      },
      {
        icon: '⚠️',
        title: {
          'zh-TW': '不知道密碼夠不夠強',
          'en': 'Are Your Passwords Actually Secure?',
        },
        description: {
          'zh-TW': '「Password123」真的安全嗎？你可能正在使用容易被破解的密碼，卻渾然不知。',
          'en': '"Password123" isn\'t fooling anyone. You could be using weak passwords right now and have no idea.',
        },
      },
      {
        icon: '☁️',
        title: {
          'zh-TW': '不想把密碼放在雲端',
          'en': 'Uncomfortable with Cloud Storage?',
        },
        description: {
          'zh-TW': '雲端密碼管理器很方便，但你的敏感資料也交給了別人。萬一他們被駭呢？',
          'en': 'Cloud password managers are convenient—until they get breached. Your most sensitive data shouldn\'t live on someone else\'s servers.',
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
          'en': 'All Your Passwords in One Place',
        },
        features: [
          {
            'zh-TW': '密碼卡片介面，清楚易讀',
            'en': 'Clean card-based interface',
          },
          {
            'zh-TW': '分類管理，快速找到',
            'en': 'Organize with custom categories',
          },
          {
            'zh-TW': '強大搜尋，瞬間定位',
            'en': 'Find any password in seconds',
          },
        ],
        highlight: {
          'zh-TW': '不用再翻遍筆記本或試遍所有密碼。',
          'en': 'Stop digging through sticky notes or resetting passwords.',
        },
      },
      {
        icon: '💪',
        title: {
          'zh-TW': '看見密碼的真實強度',
          'en': 'Know How Strong Your Passwords Really Are',
        },
        features: [
          {
            'zh-TW': '即時強度評分（強/中/弱）',
            'en': 'Instant strength ratings as you type',
          },
          {
            'zh-TW': '健康儀表板一目瞭然',
            'en': 'See your security health at a glance',
          },
          {
            'zh-TW': '識別重複使用和過期的密碼',
            'en': 'Spot reused and outdated passwords',
          },
        ],
        highlight: {
          'zh-TW': '知道問題，才能解決問題。',
          'en': 'You can\'t fix what you don\'t know about.',
        },
      },
      {
        icon: '🔒',
        title: {
          'zh-TW': '你的資料，只在你手中',
          'en': 'Your Data Never Leaves Your Device',
        },
        features: [
          {
            'zh-TW': '所有資料都加密儲存在裝置上',
            'en': 'Everything encrypted locally',
          },
          {
            'zh-TW': '無雲端同步，無第三方伺服器',
            'en': 'Zero cloud storage, zero third parties',
          },
          {
            'zh-TW': 'Face ID / Touch ID 快速解鎖',
            'en': 'Unlock instantly with Face ID or Touch ID',
          },
        ],
        highlight: {
          'zh-TW': '真正的隱私，從本地開始。',
          'en': 'Real privacy means keeping your data truly private.',
        },
      },
    ],
  },

  howItWorks: {
    title: {
      'zh-TW': '3 步驟開始使用 Custo',
      'en': 'Up and Running in 3 Steps',
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
          'en': 'Just enter the service, username, and password. Custo instantly analyzes strength and flags anything that needs work.',
        },
      },
      {
        number: '2',
        icon: '🔐',
        title: {
          'zh-TW': '設定保護方式',
          'en': 'Lock It Down',
        },
        description: {
          'zh-TW': '選擇 Face ID、Touch ID 或主密碼來保護你的密碼庫。快速又安全。',
          'en': 'Secure your vault with Face ID, Touch ID, or a master password. Quick to set up, impossible to bypass.',
        },
      },
      {
        number: '3',
        icon: '🩺',
        title: {
          'zh-TW': '監控密碼健康',
          'en': 'Keep Your Passwords Healthy',
        },
        description: {
          'zh-TW': '健康儀表板隨時告訴你哪些密碼太弱、重複使用或太久沒更新。保持最佳狀態。',
          'en': 'Your dashboard highlights weak, reused, or stale passwords—so you can fix them before they become a problem.',
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
          'en': 'Does Custo store my passwords in the cloud?',
        },
        answer: {
          'zh-TW': '絕對不會！所有資料都加密儲存在你的裝置本地。沒有雲端伺服器，沒有第三方存取。你的密碼只屬於你。',
          'en': 'Never. All your data is encrypted and stored right on your device. No cloud servers, no third-party access—your passwords stay with you.',
        },
      },
      {
        question: {
          'zh-TW': '如果我忘記主密碼怎麼辦？',
          'en': 'What happens if I forget my master password?',
        },
        answer: {
          'zh-TW': '如果你設定了生物辨識，可以用 Face ID 或 Touch ID 解鎖。如果只使用主密碼，由於我們不儲存你的密碼，將無法恢復。請務必記住你的主密碼。',
          'en': 'If you\'ve enabled biometrics, Face ID or Touch ID will get you in. But if you only use a master password, there\'s no recovery option—we never store it. Make sure it\'s something you won\'t forget.',
        },
      },
      {
        question: {
          'zh-TW': '什麼是密碼健康儀表板？',
          'en': 'What does the health dashboard do?',
        },
        answer: {
          'zh-TW': '健康儀表板分析你所有的密碼，告訴你哪些是弱密碼、哪些被重複使用、哪些超過 90 天沒更新。幫你保持所有帳號的安全狀態。',
          'en': 'It scans all your passwords and flags anything weak, reused, or older than 90 days. Think of it as a security checkup for all your accounts.',
        },
      },
      {
        question: {
          'zh-TW': 'Custo 是免費嗎？',
          'en': 'How much does Custo cost?',
        },
        answer: {
          'zh-TW': '歡迎一次性購買，永久解鎖，提供功能如無限密碼卡片和完整健康分析。',
          'en': 'Custo is a one-time purchase—no subscriptions, no recurring fees. Pay once and get unlimited passwords, full health analysis, and every feature unlocked forever.',
        },
      },
      {
        question: {
          'zh-TW': '可以在多台裝置間同步嗎？',
          'en': 'Can I sync between multiple devices?',
        },
        answer: {
          'zh-TW': '目前 Custo 專注於單一裝置的本地安全。iCloud 同步功能正在規劃中，敬請期待！',
          'en': 'Right now, Custo keeps everything on a single device for maximum security. iCloud sync is on the roadmap—stay tuned!',
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
      'en': 'The password manager that never touches the cloud. Biometric unlock, strength analysis, and a health dashboard—all stored locally on your iPhone.',
    },
    ogTitle: {
      'zh-TW': 'Custo 你的密碼，由你守護',
      'en': 'Custo: Your Passwords, Protected',
    },
    ogDescription: {
      'zh-TW': '本地加密、生物辨識保護、密碼健康儀表板。Custo 讓你的每個帳號都安全無虞。',
      'en': 'Local-only encryption. Biometric protection. Password health tracking. Custo keeps your accounts secure without the cloud.',
    },
    ogImage: 'https://nannovalabs.com/images/custo-og-image.png',
  },
}

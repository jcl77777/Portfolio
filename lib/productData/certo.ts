/**
 * Certo Product Landing Page Data
 * Extracted from the original landing page components and translations
 */

import { ProductLandingPage } from '../types/productLandingPage'

export const certoLandingPage: ProductLandingPage = {
  hero: {
    title: {
      'zh-TW': '別再讓忘記的訂閱吃掉你的錢',
      'en': 'Stop Losing Money to Forgotten Subscriptions',
    },
    subtitle: {
      'zh-TW': '',
      'en': '',
    },
    description: {
      'zh-TW': '用 Certo 掌控你的訂閱。追蹤付款、保護隱私、分攤費用。一個簡潔優雅的 App 搞定一切。',
      'en': 'Take control of your subscriptions with Certo. Track payments, protect your privacy, and split costs. All from one beautifully simple app.',
    },
    features: [
      {
        icon: '🔔',
        text: {
          'zh-TW': '付款日前 7 天提前提醒',
          'en': '7-day advance payment reminders',
        },
      },
      {
        icon: '📝',
        text: {
          'zh-TW': '完整的付款歷史追蹤',
          'en': 'Complete payment history tracking',
        },
      },
      {
        icon: '🔒',
        text: {
          'zh-TW': '資料完全本地儲存，保護隱私',
          'en': 'Fully local storage, privacy protected',
        },
      },
      {
        icon: '👨‍👩‍👧‍👦',
        text: {
          'zh-TW': '家庭成員管理與成本分攤',
          'en': 'Family member management & cost sharing',
        },
      },
    ],
    ctaPrimary: {
      text: {
        'zh-TW': '立即下載',
        'en': 'Download Now',
      },
      url: 'https://apps.apple.com/app/certo',
    },
    ctaSecondary: {
      text: {
        'zh-TW': '了解更多',
        'en': 'Learn More',
      },
      anchor: '#features',
    },
    backgroundGradient: 'bg-certo-gradient',
    logoComponent: 'CertoWordmark',
  },

  problems: {
    title: {
      'zh-TW': '訂閱亂成一團？你不孤單。',
      'en': 'Subscription Chaos? You are Not Alone.',
    },
    items: [
      {
        icon: '⏰',
        title: {
          'zh-TW': '月月都有驚喜帳單',
          'en': 'Surprise Bills, Every Month',
        },
        description: {
          'zh-TW': '又是一筆忘記的扣款。又是一個被中斷的服務。這是不是你？',
          'en': 'Another charge you forgot about. Another service interrupted. Sound familiar?',
        },
      },
      {
        icon: '📊',
        title: {
          'zh-TW': '財務狀況霧煞煞',
          'en': 'Financial Surprises',
        },
        description: {
          'zh-TW': '多張卡片、不同日期、重複扣款。完全不知道錢都花到哪裡去了。',
          'en': 'Multiple cards, different dates, duplicate charges and zero visibility into where your money actually goes.',
        },
      },
      {
        icon: '👁️',
        title: {
          'zh-TW': '錢包默默在失血',
          'en': 'The Money Leak',
        },
        description: {
          'zh-TW': '看不清楚固定支出，錢就這樣慢慢流走。',
          'en': 'Without a clear view of recurring expenses, you are bleeding money and your budget knows it.',
        },
      },
    ],
  },

  solutions: {
    title: {
      'zh-TW': 'Certo 如何解決這些問題？',
      'en': 'How Certo Solves These Problems',
    },
    items: [
      {
        icon: '🔔',
        title: {
          'zh-TW': '三重提醒機制',
          'en': 'Triple Reminder System',
        },
        features: [
          {
            'zh-TW': '付款日前 7 天提前提醒',
            'en': '7 days before payment date reminder',
          },
          {
            'zh-TW': '到期日當天通知',
            'en': 'Notification on due date',
          },
          {
            'zh-TW': '逾期後持續提醒',
            'en': 'Continuous reminders after overdue',
          },
        ],
        highlight: {
          'zh-TW': '不再措手不及，按照你的節奏付款',
          'en': 'Never caught off-guard—pay on your terms',
        },
      },
      {
        icon: '📝',
        title: {
          'zh-TW': '清晰的付款歷史',
          'en': 'Clear Payment History',
        },
        features: [
          {
            'zh-TW': '記錄每筆付款日期與金額',
            'en': 'Record each payment date and amount',
          },
          {
            'zh-TW': '支援誤操作復原',
            'en': 'Support undo for mistakes',
          },
          {
            'zh-TW': '一目了然的付款狀態',
            'en': 'Clear payment status at a glance',
          },
        ],
        highlight: {
          'zh-TW': '手滑難免。一鍵復原幫你搞定',
          'en': 'Mistakes happen. We have got your back with one-tap undo',
        },
      },
      {
        icon: '📊',
        title: {
          'zh-TW': '財務狀況一目了然',
          'en': 'Financial Overview at a Glance',
        },
        features: [
          {
            'zh-TW': '即將到期訂閱列表',
            'en': 'Upcoming subscription list',
          },
          {
            'zh-TW': '逾期項目提醒',
            'en': 'Overdue items reminder',
          },
          {
            'zh-TW': '月度/年度支出統計',
            'en': 'Monthly/annual spending statistics',
          },
        ],
        highlight: {
          'zh-TW': '一眼看懂你的消費模樣',
          'en': 'See your spending story at a glance',
        },
      },
      {
        icon: '🔒',
        title: {
          'zh-TW': '資料完全本地儲存',
          'en': 'Fully Local Data Storage',
        },
        features: [
          {
            'zh-TW': '所有資料儲存在您的裝置',
            'en': 'All data stored on your device',
          },
          {
            'zh-TW': '不上傳雲端，不追蹤行為',
            'en': 'No cloud upload, no tracking',
          },
          {
            'zh-TW': '完全掌控您的財務隱私',
            'en': 'Complete control over your financial privacy',
          },
        ],
        highlight: {
          'zh-TW': '你的資料。你的裝置。',
          'en': 'Your data. Your device. Nobody else\'s business.',
        },
      },
      {
        icon: '👨‍👩‍👧‍👦',
        title: {
          'zh-TW': '家庭共享與成本分攤',
          'en': 'Family Sharing & Cost Splitting',
        },
        features: [
          {
            'zh-TW': '追蹤每位家庭成員的訂閱',
            'en': "Track each family member's subscriptions",
          },
          {
            'zh-TW': '公平分攤成本',
            'en': 'Fair cost splitting',
          },
          {
            'zh-TW': '查看每位成員的訂閱成本，優化家庭支出',
            'en': "View each member's subscription costs, optimize family spending",
          },
        ],
        highlight: {
          'zh-TW': '公平分攤，家庭和樂。再也不用搞 Excel 了',
          'en': 'Fair splits, happy family. No more spreadsheets needed',
        },
      },
    ],
  },

  howItWorks: {
    title: {
      'zh-TW': '三步驟，開始使用 Certo',
      'en': 'Three Steps to Get Started with Certo',
    },
    steps: [
      {
        number: '1',
        icon: '➕',
        title: {
          'zh-TW': '新增你的訂閱',
          'en': 'Add Your Subscriptions',
        },
        description: {
          'zh-TW': '輸入名稱、價格、設定日期。幾秒鐘搞定。',
          'en': 'Name it, price it, set the date. Done in seconds.',
        },
      },
      {
        number: '2',
        icon: '🔔',
        title: {
          'zh-TW': '坐下來放輕鬆',
          'en': 'Sit Back and Relax',
        },
        description: {
          'zh-TW': '提前 7 天通知、到期日提醒、就算錯過也會通知。讓你永遠掌控一切。',
          'en': 'Get notified 7 days early, on the due date, and even if you miss it, so you are always in control.',
        },
      },
      {
        number: '3',
        icon: '✅',
        title: {
          'zh-TW': '標記已付立即搞定',
          'en': 'Mark It Paid. You are Done',
        },
        description: {
          'zh-TW': '一鍵確認付款。Certo 會處理其他事，自動算出下次付款日期。',
          'en': 'One tap confirms payment. Certo handles the rest, calculating your next due date automatically.',
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
          'zh-TW': 'Certo 需要網路連線嗎？',
          'en': 'Does Certo require internet connection?',
        },
        answer: {
          'zh-TW': '不需要。Certo 是完全離線運作的 App，所有資料儲存在您的裝置上。',
          'en': 'No. Certo is a completely offline app, all data is stored on your device.',
        },
      },
      {
        question: {
          'zh-TW': '資料會上傳到雲端嗎？',
          'en': 'Will data be uploaded to the cloud?',
        },
        answer: {
          'zh-TW': '不會。Certo 採用本地儲存，所有資料都在您的裝置上，完全保護隱私。',
          'en': 'No. Certo uses local storage, all data stays on your device, fully protecting privacy.',
        },
      },
      {
        question: {
          'zh-TW': 'Certo 有哪些功能？',
          'en': 'What features do I get with Certo?',
        },
        answer: {
          'zh-TW': '掌握訂閱所需的一切：智慧提醒、付款歷史、家庭成員追蹤、成本分析、彈性付款週期。',
          'en': 'Everything you need to stay on top of subscriptions: smart reminders, payment history, family member tracking, cost analysis, and flexible payment cycles.',
        },
      },
      {
        question: {
          'zh-TW': '可以撤銷付款記錄嗎？',
          'en': 'Can I undo payment records?',
        },
        answer: {
          'zh-TW': '可以。Certo 支援撤銷付款功能，避免錯誤操作。',
          'en': 'Yes. Certo supports undo payment feature to avoid mistakes.',
        },
      },
      {
        question: {
          'zh-TW': '支援哪些付款週期？',
          'en': 'What payment cycles are supported?',
        },
        answer: {
          'zh-TW': '支援月付、季付、年付，以及自訂週期。',
          'en': 'Supports monthly, quarterly, yearly, and custom cycles.',
        },
      },
    ],
  },

  meta: {
    title: {
      'zh-TW': 'Certo: 別再讓忘記的訂閱吃掉你的錢',
      'en': 'Certo: Stop Losing Money to Forgotten Subscriptions',
    },
    description: {
      'zh-TW': '別再讓忘記的訂閱吃掉你的錢。追蹤付款、保護隱私、分攤費用。一個簡潔優雅的 App 搞定一切。立即下載 Certo。',
      'en': 'Stop losing money to forgotten subscriptions. Track payments, protect your privacy, and split costs. All in one beautifully simple app. Download Certo today.',
    },
    ogTitle: {
      'zh-TW': 'Certo: 別再讓忘記的訂閱吃掉你的錢',
      'en': 'Certo: Stop Losing Money to Forgotten Subscriptions',
    },
    ogDescription: {
      'zh-TW': '追蹤付款、保護隱私、分攤費用。一個簡潔優雅的 App 搞定一切。',
      'en': 'Track payments, protect privacy, and split costs. All from one beautifully simple app.',
    },
    ogImage: 'https://nannovalabs.com/og-image.png',
  },
}

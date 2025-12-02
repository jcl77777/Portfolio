# Portfolio Website

個人作品集網站，展示所有產品和專案。使用 Next.js、TypeScript 和 Tailwind CSS 構建。

## ✨ 功能特色

- 🎨 **產品展示**：動態展示所有產品，支持特色標記和即將推出標籤
- 🌍 **多語言支援**：繁體中文和英文，自動檢測瀏覽器語言
- 🎯 **動態產品頁面**：每個產品可擁有獨立的 landing page（`/products/[slug]`）
- 🌓 **深色模式**：支持主題切換
- 📱 **響應式設計**：完美適配桌面、平板和手機
- ⚡ **靜態導出**：可部署到任何靜態託管服務

## 🚀 快速開始

### 安裝依賴

```bash
npm install
# 或
yarn install
# 或
pnpm install
```

### 開發模式

```bash
npm run dev
# 或
yarn dev
# 或
pnpm dev
```

在瀏覽器中打開 [http://localhost:3000](http://localhost:3000) 查看結果。

### 建置生產版本

```bash
npm run build
# 或
yarn build
# 或
pnpm build
```

建置完成後，靜態文件將生成在 `out/` 目錄中。

## 📁 專案結構

```
.
├── components/              # React 組件
│   ├── DynamicLandingPage/ # 動態產品頁面組件
│   │   ├── DynamicHero.tsx
│   │   ├── DynamicProblems.tsx
│   │   ├── DynamicSolutions.tsx
│   │   ├── DynamicHowItWorks.tsx
│   │   └── DynamicFAQ.tsx
│   ├── Logo/               # Logo 組件
│   ├── PortfolioHero.tsx  # 首頁 Hero 區塊
│   ├── ProductsSection.tsx # 產品列表區塊
│   ├── ProductCard.tsx     # 產品卡片組件
│   ├── ContactSection.tsx  # 聯絡區塊
│   ├── LanguageSwitcher.tsx # 語言切換
│   └── ThemeToggle.tsx     # 主題切換
├── contexts/               # React Context
│   └── LanguageContext.tsx # 語言上下文
├── lib/                    # 工具庫
│   ├── products.ts         # 產品數據配置
│   ├── productData/        # 各產品的 landing page 數據
│   │   └── certo.ts       # Certo 產品數據
│   ├── types/              # TypeScript 類型定義
│   │   └── productLandingPage.ts
│   └── i18n/              # 國際化
│       └── translations.ts # 翻譯文件
├── pages/                  # Next.js 頁面
│   ├── index.tsx          # 首頁（作品集）
│   ├── products/          # 產品頁面
│   │   └── [slug].tsx     # 動態產品頁面路由
│   ├── privacy.tsx        # 隱私政策
│   ├── terms.tsx          # 使用條款
│   ├── _app.tsx           # App 入口
│   └── _document.tsx      # Document 配置
├── public/                 # 靜態資源
│   ├── images/            # 圖片資源
│   │   ├── products/      # 產品截圖
│   │   └── ...            # 其他圖片
│   ├── _headers           # Cloudflare Pages headers
│   └── _redirects         # Cloudflare Pages redirects
├── styles/                 # 樣式文件
│   └── globals.css        # 全局樣式
└── next.config.js         # Next.js 配置
```

## 📦 添加新產品

在 `lib/products.ts` 中添加新產品：

```typescript
{
  id: 'my-product',
  name: {
    'zh-TW': '我的產品',
    'en': 'My Product',
  },
  tagline: {
    'zh-TW': '一句話標語',
    'en': 'One-line tagline',
  },
  description: {
    'zh-TW': '產品簡短描述',
    'en': 'Short product description',
  },
  image: '/images/products/my-product.png',
  links: {
    website: 'https://example.com',
    appStore: 'https://apps.apple.com/app/example',
    github: 'https://github.com/username/repo',
  },
  tags: ['iOS', 'Web', 'Productivity'],
  featured: true, // 是否為特色產品
  comingSoon: false, // 是否即將推出
  landingPage: myProductLandingPage, // 可選：完整的 landing page 數據
}
```

### 為產品添加完整 Landing Page

1. 在 `lib/productData/` 創建新文件（例如：`myProduct.ts`）
2. 定義 `ProductLandingPage` 類型的數據
3. 在 `lib/products.ts` 中導入並添加到產品的 `landingPage` 屬性

範例請參考 `lib/productData/certo.ts`。

## 🌍 多語言支援

網站支援繁體中文和英文：

- **自動檢測**：根據瀏覽器語言自動選擇
- **語言切換**：右上角固定按鈕
- **持久化**：語言偏好儲存在 localStorage
- **SEO 優化**：動態 Meta 標籤

### 添加新語言

1. 在 `lib/i18n/translations.ts` 中添加新語言
2. 更新 `contexts/LanguageContext.tsx` 中的 `Locale` 類型

## 🎨 自訂樣式

### 品牌色彩

在 `tailwind.config.js` 中定義品牌色彩：

```javascript
theme: {
  extend: {
    colors: {
      'brand-purple': '#a855f7',
      'brand-purple-dark': '#7c3aed',
    },
  },
}
```

### 深色模式

使用 `next-themes` 實現深色模式，組件中通過 `useTheme()` hook 使用。

## 🚀 部署

### Cloudflare Pages（推薦）

1. 將專案推送到 GitHub
2. 在 [Cloudflare Pages](https://pages.cloudflare.com) 連接倉庫
3. 設置：
   - Build command: `npm run build`
   - Build output directory: `out`
4. 自動部署完成！

詳細部署指南請參考 `CLOUDFLARE_DEPLOYMENT.md`。

### Vercel

1. 將專案推送到 GitHub
2. 在 [Vercel](https://vercel.com) 導入專案
3. 自動部署完成！

### 其他靜態託管

專案已配置為靜態導出（`output: 'export'`），可以部署到：

- **Netlify**：拖放 `out/` 目錄
- **GitHub Pages**：使用 GitHub Actions
- **AWS S3 + CloudFront**
- **任何靜態文件託管服務**

## 📝 環境變數

目前無需環境變數。如需添加，創建 `.env.local` 文件：

```bash
# .env.local
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## 🔧 技術棧

- **[Next.js 14](https://nextjs.org/)** - React 框架，支持靜態導出
- **[TypeScript](https://www.typescriptlang.org/)** - 類型安全
- **[Tailwind CSS](https://tailwindcss.com/)** - 實用優先的 CSS 框架
- **[next-themes](https://github.com/pacocoursey/next-themes)** - 深色模式支持
- **[React](https://react.dev/)** - UI 庫

## 📄 授權

© 2025 NanNova Labs. All rights reserved.

## 🤝 貢獻

歡迎提交 Issue 和 Pull Request！

## 📧 聯絡

- Email: nannova.labs@gmail.com
- GitHub: [@jcl77777](https://github.com/jcl77777)
- Threads: [@jctheunlock](https://www.threads.com/@jctheunlock)

/**
 * Cloudflare Pages 部署配置範例
 * 
 * 根據您的需求選擇以下配置之一：
 * 
 * 1. 作為子路徑（例如：example.com/certo）
 * 2. 作為子域名（例如：certo.example.com）
 */

// ============================================
// 方案 1：作為子路徑（需要 basePath）
// ============================================
const configWithBasePath = {
  output: 'export',
  basePath: '/certo', // 改為您的子路徑，例如：/landing, /app, /certo
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
  },
  trailingSlash: true,
}

// ============================================
// 方案 2：作為子域名（不需要 basePath）
// ============================================
const configWithoutBasePath = {
  output: 'export',
  // 不需要 basePath
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
  },
  trailingSlash: true,
}

// 根據您的需求選擇一個配置
module.exports = configWithBasePath // 或 configWithoutBasePath


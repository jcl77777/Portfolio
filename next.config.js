/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 生成純靜態 HTML（無需 Node.js 伺服器）
  images: {
    unoptimized: true, // 靜態導出時需要
    formats: ['image/avif', 'image/webp'],
  },
  trailingSlash: true, // 添加尾部斜線
}

module.exports = nextConfig


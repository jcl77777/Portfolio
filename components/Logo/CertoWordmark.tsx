import React from 'react'
import Image from 'next/image'

interface CertoWordmarkProps {
  height?: number
  variant?: 'black' | 'white' | 'purple'
  className?: string
  showText?: boolean
}

/**
 * Full CERTO wordmark using actual CertoWordmark.png image
 * This is the complete logo with C icon + "CERTO" text
 */
export const CertoWordmark: React.FC<CertoWordmarkProps> = ({
  height = 80,
  variant = 'black',
  className = '',
  showText,
}) => {
  // Choose the appropriate image based on variant
  // white: 白色 Logo + 文字，透明背景
  // black: 黑色 Logo + 文字，透明背景（原始版本）
  // purple: 使用原始版本（在紫色背景上）
  const imageSrc = variant === 'white'
    ? '/images/certo-wordmark-white.png'
    : '/images/certo-wordmark.png' // black 和 purple 都使用原始版本

  return (
    <div className={`inline-block ${className}`}>
      <Image
        src={imageSrc}
        alt="Certo"
        width={height * 2.5} // Approximate aspect ratio for wordmark (logo + text)
        height={height}
        className="object-contain"
        priority
        style={{
          height: `${height}px`,
          width: 'auto',
        }}
      />
    </div>
  )
}

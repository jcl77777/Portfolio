import React from 'react'

interface CLogoPurpleProps {
  size?: number
  className?: string
}

/**
 * Purple gradient C logo component
 * Matches Certo app's CLogoPurple design
 */
export const CLogoPurple: React.FC<CLogoPurpleProps> = ({ 
  size = 80, 
  className = '' 
}) => {
  const strokeWidth = size * 0.18
  const radius = size / 2 - strokeWidth / 2
  const circumference = 2 * Math.PI * radius
  const dashArray = circumference
  const dashOffset = circumference * 0.25 // Creates C shape (270 degrees)

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="certo-purple-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
      </defs>
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="url(#certo-purple-gradient)"
        strokeWidth={strokeWidth}
        strokeLinecap="square"
        strokeDasharray={dashArray}
        strokeDashoffset={dashOffset}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
      />
    </svg>
  )
}


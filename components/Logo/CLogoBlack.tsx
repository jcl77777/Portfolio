import React from 'react'

interface CLogoBlackProps {
  size?: number
  className?: string
}

/**
 * Black C logo component
 * Matches Certo app's CLogoBlack design
 */
export const CLogoBlack: React.FC<CLogoBlackProps> = ({ 
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
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="#000000"
        strokeWidth={strokeWidth}
        strokeLinecap="square"
        strokeDasharray={dashArray}
        strokeDashoffset={dashOffset}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
      />
    </svg>
  )
}


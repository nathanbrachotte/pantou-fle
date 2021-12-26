import React from 'react'
import { backgroundToTextColor } from '../styles/helpers'
import { Color } from '../types'

interface BadgeProps {
  text: string
  color?: Color
  logo?: React.FC
}

export const Badge: React.FC<BadgeProps> = ({
  text,
  color = 'primary-dark',
  logo,
}) => {
  return (
    <div>
      <div
        className={`text-xs inline-flex items-center leading-sm px-3 py-1 bg-${color} text-${backgroundToTextColor(
          color,
        )} rounded-full`}>
        {logo != null && logo}
        {text}
      </div>
    </div>
  )
}

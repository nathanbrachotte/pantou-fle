import clsx from 'clsx'
import React from 'react'
import { backgroundToTextColor } from '../styles/helpers'
import { Color } from '../types'

interface BadgeProps {
  text: string
  color?: Color
  logo?: React.FC
  extraStyle?: string
}

export const Badge: React.FC<BadgeProps> = ({
  text,
  color = 'primary-dark',
  logo,
  extraStyle,
}) => {
  return (
    <div>
      <div
        className={clsx(
          `text-center text-xs inline-flex items-center px-2 sm:px-3 py-1 bg-${color} text-${backgroundToTextColor(
            color,
          )} rounded-full`,
          extraStyle,
        )}>
        {logo != null && logo}
        {text}
      </div>
    </div>
  )
}

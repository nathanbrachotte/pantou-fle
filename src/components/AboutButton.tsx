import React from 'react'
import { Link } from 'gatsby'
import { cn } from '../styles/cn'

interface AboutButtonProps {
  className?: string
}

export const AboutButton: React.FC<AboutButtonProps> = ({ className }) => {
  return (
    <Link
      to="/about"
      className={cn(
        'text-primary-dark group hidden lg:flex',
        'mt-2 mb-8 sm:mt-8 rounded-sm text-center flex items-center justify-start text-base font-medium',
        'col-span-2 md:col-span-1',
        className,
      )}>
      <div className="h-6 w-6 mr-2 group-hover:animate-waving-hand">
        <span role="img" aria-label="Waving hand">
          👋🏻
        </span>
      </div>
      <span className="text-md font-bold group-hover:underline">
        Qui sommes-nous ?
      </span>
    </Link>
  )
}

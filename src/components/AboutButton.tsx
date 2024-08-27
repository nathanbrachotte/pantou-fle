import React from 'react'
import clsx from 'clsx'
import { Link } from 'gatsby'

export const AboutButton: React.FC = () => {
  return (
    <Link
      to="/about"
      className={clsx(
        'text-primary-dark group hidden md:flex',
        'mt-2 mb-8 sm:mt-8 rounded-sm text-center flex items-center justify-start text-base font-medium',
        'col-span-2 md:col-span-1',
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

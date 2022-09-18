import clsx from 'clsx'
import { Link, PageProps } from 'gatsby'
import React from 'react'
import { __DEV__ } from '../constants'
import { getCurrentActivity } from '../helpers'
import { LEVELS } from '../types'
import LogoWithLabel from './LogoWithLabel'
import Splash from './Splash'

const LEVELS_LOGOS = ['', '🐣', '🐥', '👶', '🎓', '👨', '🧓'] as const

const Item = ({
  uri,
  level,
  index,
}: {
  uri: string
  level: typeof LEVELS[number]
  index: number
}) => {
  return (
    <Link
      to={`/${level.toLowerCase()}/${getCurrentActivity(uri)}`}
      className={clsx(
        ' text-primary-dark hover:text-secondary-dark hover:scale-105',
        'my-2 border-2 border-background flex-none rounded-xl inline-flex items-center text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-secondary-dark py-2 px-3 z-10',
      )}
      activeClassName="bg-primary-dark text-white sm:border-2 sm:border-background hover:text-white"
      partiallyActive>
      <span role="img" aria-label={`${level} logo`}>
        {`${index !== 0 ? level.toUpperCase() : 'Tous niveaux'} ${
          LEVELS_LOGOS[index]
        }`}
      </span>
    </Link>
  )
}

const Header: React.FC<PageProps> = ({ uri }) => {
  return (
    <div className="w-full">
      {__DEV__ && (
        <div className="bg-pink-500 sm:bg-yellow-400 md:bg-green-400 lg:bg-blue-400 xl:bg-purple-400 2xl:bg-indigo-900 h-1" />
      )}
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6"> */}
      <div className="relative mx-auto px-4">
        {/* <div className="flex justify-between items-center border-b-2 border-red py-6 md:justify-start md:space-x-4"> */}
        <div className="flex items-center justify-start space-x-4 flex-wrap py-2 md:py-4 lg:py-6">
          <div className="flex-none justify-start mr-4">
            <a href="/">
              <span className="sr-only">Home</span>
              <LogoWithLabel withLabel />
            </a>
          </div>

          {LEVELS.map((level, index) => (
            <Item uri={uri} level={level} index={index} key={level} />
          ))}
          <div className="-z-10">
            <Splash />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header

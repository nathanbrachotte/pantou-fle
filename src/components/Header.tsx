import clsx from 'clsx'
import { Link } from 'gatsby'
import React from 'react'
import { __DEV__ } from '../constants'
import { getCurrentActivity } from '../helpers'
import { ActivityPageData, LEVELS } from '../types'
import LogoWithLabel from './LogoWithLabel'
import Splash from './Splash'

const LEVELS_LOGOS = ['', '🐣', '🐥', '👶', '🎓', '👨', '🧓'] as const

const Item = ({
  uri,
  // Override data, used if the page can't be guessed from the uri, like in the activity page
  pageData,
  level,
  index,
}: {
  uri: string
  pageData?: ActivityPageData
  level: typeof LEVELS[number]
  index: number
}) => {
  const levelToUse = level.toLowerCase()
  const activityToUse = getCurrentActivity(uri, pageData?.activity)

  return (
    <Link
      to={`/${levelToUse}/${activityToUse}`}
      className={clsx(
        ' text-primary-dark hover:text-secondary-dark hover:scale-105',
        'my-2 border-2 bg-background border-background flex-none rounded-xl inline-flex items-center text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-secondary-dark py-2 px-3 z-10',
        'transition-all duration-150',
      )}
      activeClassName="bg-orange-600 text-white sm:border-2 sm:border-background hover:text-white "
      partiallyActive>
      <span role="img" aria-label={`${level} logo`}>
        {`${index !== 0 ? level.toUpperCase() : 'Tous niveaux'} ${
          LEVELS_LOGOS[index]
        }`}
      </span>
    </Link>
  )
}

const Header = ({
  uri,
  pageData,
}: {
  uri: string
  pageData?: ActivityPageData
}): React.ReactElement => {
  return (
    <div className="w-full">
      {__DEV__ && (
        <div className="bg-pink-500 sm:bg-yellow-400 md:bg-green-400 lg:bg-blue-400 xl:bg-purple-400 2xl:bg-indigo-900 h-1" />
      )}
      <div className="relative mx-auto px-4">
        <div className="flex items-center justify-start space-x-4 flex-wrap py-2 md:py-4 lg:py-6">
          <div className="flex-none justify-start mr-4">
            <a href="/">
              <span className="sr-only">Home</span>
              <LogoWithLabel withLabel />
            </a>
          </div>
          {LEVELS.map((level, index) => (
            <Item
              uri={uri}
              pageData={pageData}
              level={level}
              index={index}
              key={level}
            />
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

import React from 'react'
import '@fontsource/m-plus-rounded-1c'

import clsx from 'clsx'
import LogoWithLabel from './LogoWithLabel'
import Splash from './Splash'
import { __DEV__ } from '../constants'
import { includesALevel, includesAnActivityType } from '../helpers'

interface Props {
  uri: string
}

const LEVELS = ['a1', 'a2', 'b1', 'b2', 'c1', 'c2'] as const
const LEVELS_LOGOS = ['🐣', '🐥', '👶', '🎓', '👨', '🧓'] as const
const getItemStyles = (isActive: boolean) =>
  clsx(
    isActive
      ? 'bg-primary-dark text-white sm:border-2 sm:border-background'
      : 'bg-background text-primary-dark hover:text-secondary-dark hover:scale-105',
    'my-2 border-2 border-background flex-none rounded-xl inline-flex items-center text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-secondary-dark py-2 px-3 z-10',
  )

const Item: React.FC<
  Props & { level: typeof LEVELS[number]; index: number }
> = ({ uri, level, index }) => {
  const isActive = uri.includes(level)

  return (
    <a href={`/${level}`} className={getItemStyles(isActive)}>
      <span role="img" aria-label={`${level} logo`}>
        {`${level.toUpperCase()} ${LEVELS_LOGOS[index]}`}
      </span>
    </a>
  )
}

const AllItem: React.FC<{ uri: string }> = ({ uri }) => {
  const isActive =
    uri === '/' || (!includesALevel(uri) && includesAnActivityType(uri))

  return (
    <a
      href="/"
      className={clsx(
        isActive
          ? 'bg-primary-dark text-white sm:border-2 sm:border-background'
          : 'bg-background text-primary-dark hover:text-secondary-dark hover:scale-105',
        'my-2 border-2 border-background flex-none rounded-xl inline-flex items-center text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-secondary-dark py-2 px-3 z-10',
      )}>
      <p className="font-extrabold">Tous Niveaux</p>
    </a>
  )
}

const Header: React.FC<Props> = ({ uri }) => {
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
          <AllItem uri={uri} />
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

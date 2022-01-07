import React, { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import '@fontsource/m-plus-rounded-1c'

import clsx from 'clsx'
import Logo from './Logo'
import Splash from './Splash'

interface Props {
  uri: string
}

const LEVELS = ['a1', 'a2', 'b1', 'b2', 'c1', 'c2'] as const
const LEVELS_LOGOS = ['🐣', '🐥', '👶', '🎓', '👨', '🧓'] as const
const getItemStyles = (uri: string, level: string) =>
  clsx(
    uri === `/${level}`
      ? 'bg-primary-dark text-white sm:border-2 sm:border-background'
      : 'bg-background text-primary-dark hover:text-secondary-dark',
    'border-2 border-background flex-none rounded-xl inline-flex items-center text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-secondary-dark py-2 px-3 z-10',
  )

const Item: React.FC<
  Props & { level: typeof LEVELS[number]; index: number }
> = ({ uri, level, index }) => {
  return (
    <a href={`/${level}`} className={getItemStyles(uri, level)}>
      <span role="img" aria-label={`${level} logo`}>
        {`${level.toUpperCase()} ${LEVELS_LOGOS[index]}`}
      </span>
    </a>
  )
}

const AllItem: React.FC<{ uri: string }> = ({ uri }) => {
  return (
    <a href="/" className={getItemStyles(uri, '')}>
      <p className="font-extrabold">Tous Niveaux</p>
    </a>
  )
}

const Header: React.FC<Props> = ({ uri }) => {
  return (
    <div className="w-full">
      <div className="sm:bg-yellow-400 md:bg-green-400 lg:bg-blue-400 xl:bg-purple-400 2xl:bg-indigo-900 h-1" />
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6"> */}
      <div className="relative mx-auto px-4">
        {/* <div className="flex justify-between items-center border-b-2 border-red py-6 md:justify-start md:space-x-4"> */}
        <div className="flex items-center justify-start space-x-4 flex-wrap sm:py-2 md:py-4 lg:py-6">
          <div className="flex-none justify-start mr-4">
            <a href="/">
              <span className="sr-only">Home</span>
              <Logo withLabel />
            </a>
          </div>
          <AllItem uri={uri} />
          {LEVELS.map((level, index) => (
            <Item uri={uri} level={level} index={index} key={level} />
          ))}
          <Splash />
        </div>
      </div>
    </div>
  )
}

export default Header

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

const Item: React.FC<
  Props & { level: typeof LEVELS[number]; index: number }
> = ({ uri, level, index }) => {
  return (
    <a
      href={`/${level}`}
      className={clsx(
        uri === `/${level}`
          ? 'bg-primary-dark text-white'
          : 'bg-white text-primary-dark hover:text-secondary-dark',
        'rounded-xl inline-flex items-center text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-secondary-dark py-2 px-3',
      )}>
      <span role="img" aria-label={`${level} logo`}>
        {`${level.toUpperCase()} ${LEVELS_LOGOS[index]}`}
      </span>
    </a>
  )
}

const Header: React.FC<Props> = ({ uri }) => {
  return (
    <>
      <div className="sm:bg-yellow-400 md:bg-green-400 lg:bg-blue-400 xl:bg-purple-400 2xl:bg-indigo-900 h-1" />
      <div className="relative bg-white">
        {/* <div className="max-w-7xl mx-auto px-4 sm:px-6"> */}
        <div className="mx-auto px-4">
          {/* <div className="flex justify-between items-center border-b-2 border-red py-6 md:justify-start md:space-x-4"> */}
          <div className="flex items-center py-6 justify-start space-x-4">
            <div className="flex justify-start mr-4">
              <a href="/">
                <span className="sr-only">Home</span>
                <Logo withLabel />
              </a>
            </div>
            {LEVELS.map((level, index) => (
              <Item uri={uri} level={level} index={index} key={level} />
            ))}

            <Splash />
            {/* TODO: Log In */}
            {/* <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a
              href="#"
              className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
              Sign in
            </a>
            <a
              href="#"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
              Sign up
            </a>
          </div> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Header

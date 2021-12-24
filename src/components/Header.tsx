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

import Logo from './Logo'
import { classNames } from '../styles/helpers'

const Header: React.FC<{ uri: string }> = ({ uri }) => {
  return (
    <div className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-red py-6 md:justify-start md:space-x-4">
          <div className="flex justify-start">
            <a href="/" className="mr-6">
              <span className="sr-only">Home</span>
              <Logo />
            </a>
          </div>
          <a
            href="/a1"
            className={classNames(
              uri === '/a1'
                ? 'bg-primary-dark text-white'
                : 'bg-white text-primary-dark hover:text-secondary-dark',
              'rounded-md inline-flex items-center text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-secondary-dark p-1',
            )}>
            <span role="img" aria-label="A1 chick in egg">
              A1 🐣
            </span>
          </a>
          <a
            href="/a2"
            className={classNames(
              uri === '/a2'
                ? 'bg-primary-dark text-white'
                : 'bg-white text-primary-dark hover:text-secondary-dark',
              'rounded-md inline-flex items-center text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-secondary-dark p-1',
            )}>
            <span role="img" aria-label="A2 chick">
              A2 🐥
            </span>
          </a>

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
  )
}

export default Header

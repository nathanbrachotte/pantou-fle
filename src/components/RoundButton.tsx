import clsx from 'clsx'
import { Link } from 'gatsby'
import React from 'react'

type RoundButtonProps = {
  label?: string
  Icon: React.FC
  // FIXME: Make passing bgColor a bit more elegant
  bgColor: string
  isActive: boolean
  to: string
}

const RoundButton: React.FC<RoundButtonProps> = ({
  label,
  Icon,
  isActive,
  bgColor,
  to,
}) => {
  return (
    <div className={clsx(isActive && 'w-fit bg-primary-dark rounded-xl')}>
      <Link
        to={to}
        partiallyActive
        className="cursor-pointer group"
        activeClassName="font-black text-white">
        <div className="flex flex-row items-center justify-start">
          <div
            className={clsx(
              bgColor,
              'flex-none rounded-xl items-center justify-center mr-0 sm:mr-2 p-2',
            )}>
            <Icon />
          </div>
          <p className="text-sm rounded-xl px-4 p-2 sm:px-2">{label}</p>
        </div>
      </Link>
    </div>
  )
}

export default RoundButton

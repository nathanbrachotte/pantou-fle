import React from 'react'

import { useScrollSection } from 'react-scroll-section'
import clsx from 'clsx'
import { ActivityType } from '../types'
import { includesAnActivityType } from '../helpers'

type RoundButtonProps = {
  label?: string
  Icon: React.FC
  // FIXME: Make passing bgColor a bit more elegant
  bgColor: string
  uri: string
  activityType: ActivityType
} & (
  | {
      link?: string
    }
  | {
      id: string
    }
)

const RoundButton: React.FC<RoundButtonProps> = ({
  label,
  Icon,
  bgColor,
  uri,
  activityType,
  ...otherProps
}) => {
  let aProps = {}

  if ('link' in otherProps) {
    const { link } = otherProps

    aProps = { href: link }
  } else if ('id' in otherProps) {
    const { id } = otherProps
    const section = useScrollSection(id)

    aProps = { onClick: section.onClick }
  }

  const isActivityTypeSelected =
    includesAnActivityType(uri) && uri.includes(activityType)

  return (
    <a className={clsx('cursor-pointer group')} {...aProps}>
      <div className="flex flex-row items-center justify-start mb-4">
        <div
          className={clsx(
            bgColor,
            'flex-none rounded-xl items-center justify-center mr-2 p-2',
          )}>
          <Icon />
        </div>
        <p
          className={clsx(
            'text-sm p-2 px-4 rounded-xl',
            isActivityTypeSelected
              ? 'bg-primary-dark text-whitish'
              : 'group-hover:text-secondary-dark',
          )}>
          {label}
        </p>
      </div>
    </a>
  )
}

export default RoundButton

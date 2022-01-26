import React from 'react'

import { useScrollSection } from 'react-scroll-section'
import clsx from 'clsx'
import ScaleOnHoverWrapper from '../shared/ScaleOnHoverWrapper'

type RoundButtonProps = {
  label?: string
  Icon: React.FC
  // FIXME: Make paasing bgColor a bit more elegant
  bgColor: string
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
  ...otherProps
}) => {
  let aProps = {}

  if ('link' in otherProps) {
    const { link } = otherProps
    aProps = { href: link }
  } else if ('id' in otherProps) {
    const { id } = otherProps
    const section = useScrollSection(id)
    // console.log(label, { section, id })
    aProps = { onClick: section.onClick }
  }

  return (
    <a
      className="flex flex-row items-center justify-start mb-4 cursor-pointer group"
      {...aProps}>
      <div
        className={clsx(
          bgColor,
          'rounded-full items-center justify-center mr-2 flex-none p-2',
        )}>
        <Icon />
      </div>
      <p className="text-sm group-hover:text-secondary-dark">{label}</p>
    </a>
  )
}

export default RoundButton

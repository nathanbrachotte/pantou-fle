import React from 'react'

import { VideoCameraIcon } from '@heroicons/react/outline'
import { useScrollSection } from 'react-scroll-section'
import clsx from 'clsx'
import Image from './Image'
import { Facebook, Instagram, Youtube } from '../../assets/index'
import { colors } from '../colors'
import { Color } from '../types'

type RoundButtonProps = {
  label: string
  Icon: React.FC
  // FIXME: Make paasing bgColor a bit more elegant
  bgColor: string
} & (
  | {
      link: string
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
  } else {
    const { id } = otherProps
    const section = useScrollSection(id)
    // console.log(label, { section, id })
    aProps = { onClick: section.onClick }
  }

  console.log({ aProps })
  return (
    <a
      className="flex flex-row items-center justify-start my-4 cursor-pointer"
      {...aProps}>
      <div
        className={clsx(
          bgColor,
          'rounded-full items-center justify-center mr-2 flex-none p-2',
        )}>
        <Icon />
      </div>
      <p className="text-sm">{label}</p>
    </a>
  )
}

export default RoundButton

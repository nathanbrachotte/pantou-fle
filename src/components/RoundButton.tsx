import React from 'react'

import { VideoCameraIcon } from '@heroicons/react/outline'
import Image from './Image'
import { Facebook, Instagram, Youtube } from '../../assets/index'
import { colors } from '../types'

interface RoundButtonProps {
  label: string
  link: string
}

const RoundButton: React.FC<RoundButtonProps> = ({ label, link }) => {
  return (
    <a className="" href="/">
      <div>logo</div>
      <VideoCameraIcon className="text-primary-dark" height={50} width={50} />
      <Instagram color={colors['primary-dark']} size={50} />
      <Facebook color={colors['primary-dark']} size={50} />
      <Youtube color={colors['primary-dark']} size={50} />
      <p>{label}</p>
    </a>
  )
}

export default RoundButton

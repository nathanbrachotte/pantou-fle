import React from 'react'
import { Image } from 'rebass'

import logo from '../../assets/logo.svg'
import logoCircle from '../../assets/logo_circle.svg'

const Logo: React.FC<{ withCircleBackground?: boolean }> = ({
  withCircleBackground = false,
}) => {
  return (
    <Image
      className="h-8 w-8 sm:h-10"
      src={withCircleBackground ? logoCircle : logo}
    />
  )
}

export default Logo

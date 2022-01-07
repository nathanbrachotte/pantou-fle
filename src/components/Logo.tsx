import React from 'react'
import { Image } from 'rebass'

import logo from '../../assets/logo.svg'
import logoCircle from '../../assets/logo_circle.svg'
import logoTitle from '../../assets/title_and_subtitle.svg'

const Logo: React.FC<{
  withCircleBackground?: boolean
  withLabel?: boolean
}> = ({ withCircleBackground = false, withLabel = false }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        className="h-20 w-20"
        src={withCircleBackground ? logoCircle : logo}
      />
      {withLabel && <Image className="h-16 w-24 -m-3" src={logoTitle} />}
    </div>
  )
}

export default Logo

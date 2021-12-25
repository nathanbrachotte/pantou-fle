import React from 'react'
import { Image } from 'rebass'

import splash from '../../assets/splash.svg'

const Splash: React.FC = () => {
  return (
    <Image className="absolute right-0 top-0 sm:w-48 lg:w-1/5" src={splash} />
  )
}

export default Splash

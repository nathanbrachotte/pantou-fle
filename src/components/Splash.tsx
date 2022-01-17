import React from 'react'
import { Image } from 'rebass'

import splash from '../../assets/splash.svg'

const Splash: React.FC = () => {
  return (
    <Image
      className="absolute right-0 top-0 max-w-md w-2/5 md:ml-0 lg:w-1/3 lg:max-w-md"
      src={splash}
    />
  )
}

export default Splash

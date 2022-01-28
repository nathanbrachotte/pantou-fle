import React from 'react'
import { Logo } from '../../assets'

// import logo from '../../assets/logo.svg'

const LogoWithLabel: React.FC<{
  withCircleBackground?: boolean
  withLabel?: boolean
}> = ({ withCircleBackground = false, withLabel = false }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Logo />
      {/* {withLabel && (
        <Image className="hidden md:block h-16 w-24 -m-3" src={logoTitle} />
      )} */}
    </div>
  )
}

export default LogoWithLabel

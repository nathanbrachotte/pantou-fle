import React from 'react'
import { Logo, LogoAndLabel } from '../../assets'

const LogoWithLabel: React.FC<{
  withCircleBackground?: boolean
  withLabel?: boolean
}> = () => {
  return (
    <>
      <div className="flex-col items-center justify-center w-20 hidden md:flex">
        <LogoAndLabel />
      </div>
      <div className="flex-col items-center justify-center w-14 flex md:hidden">
        <Logo />
      </div>
    </>
  )
}

export default LogoWithLabel

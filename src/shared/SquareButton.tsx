import { ArrowRightIcon } from '@heroicons/react/solid'
import React from 'react'
import { colors } from '../colors'

const SquareButton: React.FC = () => {
  return (
    <div className="relative w-10 h-10 bg-primary-dark hover:bg-primary rounded-r-md flex items-center justify-center">
      <input
        className="absolute inset-0 w-full z-10 "
        type="submit"
        value=""
        name="member[subscribe]"
        id="member_submit"
      />
      <ArrowRightIcon width={30} color={colors['tertiary-light']} />
    </div>
  )
}

export default SquareButton

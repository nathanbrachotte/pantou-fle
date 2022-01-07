import { ArrowRightIcon } from '@heroicons/react/solid'
import React from 'react'
import { colors } from '../colors'

const SquareButton: React.FC = () => {
  return (
    <div className=" bg-gray-100 rounded-r-md p-1">
      <div className="relative w-8 h-8 bg-primary-dark hover:bg-primary rounded-lg flex items-center justify-center">
        <input
          className="absolute inset-0 w-full z-10 "
          type="submit"
          value=""
          name="member[subscribe]"
          id="member_submit"
        />
        <ArrowRightIcon width={18} color={colors['tertiary-light']} />
      </div>
    </div>
  )
}

export default SquareButton

import { ArrowRightIcon } from '@heroicons/react/solid'
import React from 'react'
import { colors } from '../types'

interface SquareButtonProps {}

const SquareButton: React.FC<SquareButtonProps> = ({ onClick }) => {
  return (
    <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center">
      <ArrowRightIcon width={30} color={colors['tertiary-light']} />
    </div>
  )
}

export default SquareButton

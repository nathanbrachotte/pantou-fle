import React from 'react'
import { navigate } from 'gatsby'

import { ArrowLeftIcon } from '@heroicons/react/outline'

interface BackButtonProps {}

const BackButton: React.FC<BackButtonProps> = ({}) => {
  return (
    <button
      type="button"
      className="w-full h-full"
      onClick={() => navigate(-1)}>
      <ArrowLeftIcon className="h-6 md:h-8" />
    </button>
  )
}

export default BackButton

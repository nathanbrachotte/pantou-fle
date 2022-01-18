import React from 'react'

import { DownloadIcon } from '@heroicons/react/outline'
import SquareButton from '../components/SquareButton'

interface DownloadButtonProps {
  url: string
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ url }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="bg-primary-dark hover:bg-primary rounded-lg flex items-center justify-center">
      <DownloadIcon className="stroke-white h-10 p-1" />
    </a>
  )
}

export default DownloadButton

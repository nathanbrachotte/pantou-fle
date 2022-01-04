import React from 'react'
import { Image as ImageRebass } from 'rebass'
import { classNames } from '../styles/helpers'

const Image: React.FC<{
  file: any
  extraStyle: string
}> = ({ file, extraStyle }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <ImageRebass className={classNames('h-20 w-20', extraStyle)} src={file} />
    </div>
  )
}

export default Image

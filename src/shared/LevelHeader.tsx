import React from 'react'
import BackButton from './BackButton'
import Heading1 from './Heading1'

interface LevelHeaderProps {
  title: string
}

const LevelHeader: React.FC<LevelHeaderProps> = ({ title }) => {
  return (
    <div className="mx-auto text-center flex flex-row mb-2 md:pl-2 lg:pl-0">
      <div className="">
        <BackButton />
      </div>
      <div className="flex-1">
        <Heading1>{title}</Heading1>
      </div>
    </div>
  )
}

export default LevelHeader

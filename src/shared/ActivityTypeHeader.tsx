import React from 'react'
import BackButton from './BackButton'
import Heading1 from './Heading1'

interface ActivityTypeHeaderProps {
  title: string
}

const ActivityTypeHeader: React.FC<ActivityTypeHeaderProps> = ({ title }) => {
  return (
    <div className="mx-auto text-center flex flex-row mb-2">
      <div className="">
        <BackButton />
      </div>
      <div className="flex-1">
        <Heading1>{title}</Heading1>
      </div>
    </div>
  )
}

export default ActivityTypeHeader
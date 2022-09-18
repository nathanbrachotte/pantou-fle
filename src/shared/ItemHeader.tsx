import React from 'react'
import BackButton from './BackButton'
import Heading1 from './Heading1'

interface ItemHeaderProps {
  title: string
}

const ItemHeader: React.FC<ItemHeaderProps> = ({ title }) => {
  return (
    <div className="text-center flex flex-row mb-4">
      <div className="pl-2 md:pl-8">
        <BackButton />
      </div>
      <div className="flex-1 flex justify-center items-start ml-2 md:ml-0 self-center">
        <div className="md:bg-white md:w-fit md:px-4 md:rounded-xl">
          <Heading1>{title}</Heading1>
        </div>
      </div>
    </div>
  )
}

export default ItemHeader

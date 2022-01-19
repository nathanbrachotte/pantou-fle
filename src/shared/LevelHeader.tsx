import React from 'react'
import BackButton from './BackButton'
import Heading1 from './Heading1'

interface CategoryHeaderProps {
  title: string
}

const CategoryHeader: React.FC<CategoryHeaderProps> = ({ title }) => {
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

export default CategoryHeader

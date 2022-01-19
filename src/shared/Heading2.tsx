import React from 'react'

interface Heading2Props {}

const Heading2: React.FC<Heading2Props> = ({ children }) => {
  return (
    <p className="text-primary-dark font-bold py-1 text-lg md:text-xl">
      {children}
    </p>
  )
}

export default Heading2

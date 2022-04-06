import React from 'react'

interface Heading1Props {}

const Heading1: React.FC<Heading1Props> = ({ children }) => {
  return (
    <span className="text-primary-dark font-extrabold py-1 text-xl md:text-2xl">
      {children}
    </span>
  )
}

export default Heading1

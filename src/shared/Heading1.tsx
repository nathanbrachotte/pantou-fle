import React from 'react'

interface Heading1Props {}

const Heading1: React.FC<Heading1Props> = ({ children }) => {
  return (
    <p className="text-primary-dark font-extrabold py-1 text-xl md:text-3xl">
      {children}
    </p>
  )
}

export default Heading1

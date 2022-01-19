import React from 'react'

interface Heading3Props {}

const Heading3: React.FC<Heading3Props> = ({ children }) => {
  return (
    <p className="text-base md:text-lg text-primary-dark font-semibold">
      {children}
    </p>
  )
}

export default Heading3

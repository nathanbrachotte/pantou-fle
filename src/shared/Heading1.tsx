import React from 'react'

interface Heading1Props {}

const Heading1: React.FC<Heading1Props> = ({ children }) => {
  return <p className="text-3xl text-primary-dark bold">{children}</p>
}

export default Heading1

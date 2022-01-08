import React from 'react'

interface Heading2Props {}

const Heading2: React.FC<Heading2Props> = ({ children }) => {
  return <p className="text-xl text-primary-dark bold">{children}</p>
}

export default Heading2

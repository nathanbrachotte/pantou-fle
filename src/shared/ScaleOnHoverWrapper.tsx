import React from 'react'

const ScaleOnHoverWrapper: React.FC = ({ children }) => {
  return (
    <div className="transition duration-100 ease-in-out group-hover:scale-125">
      {children}
    </div>
  )
}

export default ScaleOnHoverWrapper

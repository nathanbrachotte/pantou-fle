import React from 'react'
import clsx from 'clsx'

interface CenterDivProps {
  extraClassName: string
}

const CenterDiv: React.FC<CenterDivProps> = ({ children, extraClassName }) => {
  return (
    <div className={clsx('grid place-items-center', extraClassName)}>
      {children}
    </div>
  )
}

export default CenterDiv

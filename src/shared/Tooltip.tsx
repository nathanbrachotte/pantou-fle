import React from 'react'

import Tippy from '@tippy.js/react'
import 'tippy.js/dist/tippy.css' // eslint-disable-line

export const Tooltip: React.FC<{
  content: JSX.Element | string
  children: JSX.Element
  onCreate?: (tip: string) => void
}> = ({ content, children }) => (
  <Tippy content={content} placement="bottom" trigger="mouseenter">
    {children}
  </Tippy>
)

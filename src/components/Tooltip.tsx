import React from 'react'

import Tippy from '@tippy.js/react'
import 'tippy.js/dist/tippy.css' // eslint-disable-line

export const Tooltip: React.FC<{
  content: JSX.Element | string
  children: JSX.Element
  onCreate?: (tip: any) => any
}> = (props) => (
  <Tippy content={props.content} placement="bottom" trigger="mouseenter">
    {props.children}
  </Tippy>
)

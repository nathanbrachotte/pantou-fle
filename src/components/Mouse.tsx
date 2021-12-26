import React from 'react'
import { SectionLink } from 'react-scroll-section'

import MouseIcon from './MouseIcon'

export const Mouse = ({ to }: { to: string }) => (
  <SectionLink section={to}>
    {(section: any) => {
      return <MouseIcon onClick={section.onClick} />
    }}
  </SectionLink>
)

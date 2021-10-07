import React from 'react'
import { SectionLink } from 'react-scroll-section'

import MouseIcon from './MouseIcon'
import { WebsiteScreen } from './screens/types'

export const Mouse = ({ to }: { to: WebsiteScreen }) => (
  <SectionLink section={to}>
    {({ onClick }: { onClick: any }) => <MouseIcon onClick={onClick} />}
  </SectionLink>
)

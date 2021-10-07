import React from 'react'
import { Box } from 'rebass/styled-components'
import LinkAnimated from './LinkAnimated'

interface RouteLinkProps {
  onClick: () => void
  isSelected: boolean
  name: string
}

const RouteLink: React.FC<RouteLinkProps> = ({ onClick, isSelected, name }) => (
  <Box ml={[2, 3]} color="background" fontSize={[2, 3]}>
    <LinkAnimated onClick={onClick} selected={isSelected} tabIndex={0}>
      {name}
    </LinkAnimated>
  </Box>
)

export default RouteLink

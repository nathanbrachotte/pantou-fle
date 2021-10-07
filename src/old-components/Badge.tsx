import React from 'react'
import { Box } from 'rebass/styled-components'

interface BadgeProps {
  backgroundColor?: string
  textColor?: string
}

export const Badge: React.FC<BadgeProps> = ({ children }) => {
  return (
    <Box
      sx={{
        display: 'inline-block',
        px: 3,
        py: 2,
        mx: 1,
        my: 1,
        borderRadius: 9999,
      }}
      color="alwaysWhite"
      bg="primaryDark">
      {children}
    </Box>
  )
}

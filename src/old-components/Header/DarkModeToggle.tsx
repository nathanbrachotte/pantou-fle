import React from 'react'
import { Box } from 'rebass/styled-components'

import useDarkMode from 'use-dark-mode'

interface SwitchProps {
  isToggled: boolean
  onClick: () => void
}

const Switch: React.FC<SwitchProps> = ({ isToggled, onClick }) => {
  const width = 40
  const height = 20

  return (
    <Box
      as="button"
      type="button"
      role="switch"
      tx="forms"
      variant="switch"
      aria-checked={isToggled}
      onClick={onClick}
      sx={{
        appearance: 'none',
        m: 0,
        p: 0,
        width,
        height,
        color: 'primary',
        bg: 'primary',
        border: '1px solid',
        borderColor: 'primary',
        borderRadius: 9999,
        '&[aria-checked=true]': {
          bg: 'primary',
        },
        ':focus': {
          outline: 'none',
          boxShadow: '0 0 0 2px',
        },
      }}>
      <Box
        aria-hidden
        style={{
          transform: isToggled
            ? `translateX(${width - height}px)`
            : 'translateX(0)',
        }}
        sx={{
          mt: '-1px',
          ml: '-1px',
          width: height,
          height,
          borderRadius: 9999,
          border: '1px solid',
          borderColor: 'primary',
          bg: 'background',
          transitionProperty: 'transform',
          transitionTimingFunction: 'ease-out',
          transitionDuration: '0.1s',
          variant: 'forms.switch.thumb',
        }}
      />
    </Box>
  )
}
const DarkModeToggle: React.FC = () => {
  const darkMode = useDarkMode()

  return <Switch isToggled={darkMode.value} onClick={() => darkMode.toggle()} />
}

export default DarkModeToggle

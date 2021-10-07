import { useContext } from 'react'
import { ThemeContext, DefaultTheme } from 'styled-components'

function useTheme(): DefaultTheme {
  const themeContext = useContext(ThemeContext)

  return themeContext
}

export default useTheme

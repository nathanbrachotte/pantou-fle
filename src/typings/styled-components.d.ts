import 'styled-components'
import { ThemeType } from './colors'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ThemeType
  }
}

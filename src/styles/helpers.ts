import { Color } from '../types'

export const centerHorizontally = { marginRight: 'auto', marginLeft: 'auto' }

export function backgroundToTextColor(bgColor: Color): Color {
  switch (bgColor) {
    case 'primary-dark':
    case 'primary':
    case 'primary-light':
    case 'secondary-dark':
      return 'white'
    case 'white':
    default:
      return 'primary-dark'
  }
}

const colors = {
  transparent: 'transparent',
  current: 'currentColor',
  white: '#F9FAFF',
  background: '#F9FAFF',
  'primary-light': '#BFC0F0',
  'primary-dark': '#1C1E52',
  primary: '#393A73',
  'secondary-very-light': '#FEC0A0',
  'secondary-light': '#FD8061',
  'secondary-dark': '#DE5E78',
  'tertiary-light': '#E6F8FF',
  tertiary: '#00B5FF',
  error: '#DE5E78',
  success: '#24997F',
} as const

export type Color = keyof typeof colors

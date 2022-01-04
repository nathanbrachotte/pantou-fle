export const colors = {
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
export type URL = string

enum Level {
  A1 = 'a1',
  A2 = 'a2',
  B1 = 'b1',
  B2 = 'b2',
  C1 = 'c1',
  C2 = 'c2',
}

type AllContentfulRequests = 'allContentfulFicheExercice'

export type ContenfulResponse<
  Request extends AllContentfulRequests,
  Data extends Record<string, any>
> = {
  [key in Request]: {
    nodes: Data[]
  }
}

export interface FicheExercice {
  level: { id: string; title: Level }
  pdf: {
    id: string
    file: {
      contentType: string
      fileName: string
      url: URL
      id: URL
    }
  }
  slug: string
  title: string
  createdAt: string
  description: {
    raw: string
  }
}

export interface Game {
  createdAt: string
  level: {
    title: Level
  }
  link: string
  slug: string
  title: string
}

export type IndexContenfulResponse = ContenfulResponse<
  'allContentfulFicheExercice',
  FicheExercice
>

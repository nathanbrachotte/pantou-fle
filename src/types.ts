import { colors } from './colors'

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

type AllContentfulRequests = 'allContentfulFicheExercice' | 'allContentfulGame'

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
  description: {
    raw: string
  }
  link: string
  slug: string
  title: string
}

export type IndexContenfulResponse = ContenfulResponse<
  'allContentfulFicheExercice',
  FicheExercice
> &
  ContenfulResponse<'allContentfulGame', Game>

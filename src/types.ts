import { colors } from './colors'

export type Color = keyof typeof colors
export type URL = string

export const LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']

export enum Level {
  A1 = 'A1',
  A2 = 'A2',
  B1 = 'B1',
  B2 = 'B2',
  C1 = 'C1',
  C2 = 'C2',
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

export interface Reference {
  // eslint-disable-next-line camelcase
  contentful_id: string
  createdAt: string
  file: {
    contentType: 'image/png' | 'application/pdf'
    details: { image: { height: number; width: number } }
    fileName: string
    url: string
  }
  id: string
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
    references: Reference[]
  }
  preview: {
    file: { url: string }
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
  preview: {
    file: { url: string }
  }
}

export type IndexContenfulResponse = ContenfulResponse<
  'allContentfulFicheExercice',
  FicheExercice
> &
  ContenfulResponse<'allContentfulGame', Game>

import { colors } from './colors'

export type Color = keyof typeof colors
export type URL = string

export enum ActivityType {
  PRODUCTION_ECRITE = 'production-ecrite',
  PRODUCTION_ORALE = 'production-orale',
  ORTHOGRAPHE = 'orthographe',
  VOCABULAIRE = 'vocabulaire',
  COMPREHENSION_ORALE = 'comprehension-orale',
  COMPREHENSION_ECRITE = 'comprehension-ecrite',
  FICHE_EXERCICE = 'fiche-exercice',
}

export const LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']

export enum Level {
  A1 = 'A1',
  A2 = 'A2',
  B1 = 'B1',
  B2 = 'B2',
  C1 = 'C1',
  C2 = 'C2',
}

type AllContentfulRequests = 'allContentfulActivity' | 'allContentfulGame'

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

export interface Activity {
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
  price: {
    paymentType: 'subscription' | 'setPrice' | 'free'
  }
  priceAmount: number
  activityType: {
    type: ActivityType
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
  'allContentfulActivity',
  Activity
> &
  ContenfulResponse<'allContentfulGame', Game>

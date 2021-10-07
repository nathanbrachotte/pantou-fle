export interface BlogPost {
  id: string
  body: string
  bodyAst: any[]
  description: string
  createdAt: string
  image: string
  title: string
  tags: string[]
  video: string
  showInDevOnly: boolean
  slug: string
}

export const MAIN_PAGES = {
  LANDING: 'LANDING',
  ABOUT: 'ABOUT',
  PROJECT: 'PROJECT',
  WRITING: 'WRITING',
} as const

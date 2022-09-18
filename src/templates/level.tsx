import { PageProps } from 'gatsby'
import React from 'react'
import LevelRoot from '../shared/LevelRoot'
import { Level } from '../types'

const LevelTemplate: React.FC<PageProps> = ({ uri, pageContext }) => {
  console.log({ uri, pageContext })
  return (
    <LevelRoot
      uri={uri}
      level={uri.slice(1, 3).toLocaleUpperCase() as Level}
      staticData={pageContext}
    />
  )
}

export default LevelTemplate

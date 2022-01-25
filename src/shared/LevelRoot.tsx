import React from 'react'
import FicheExerciceSection from '../components/Activity/ActivitySection'
import GamesSection from '../components/Games/GamesSection'
import Root from '../components/Root'
import { Level } from '../types'
import LevelHeader from './LevelHeader'

interface LevelRootProps {
  level: Level
  uri: string
  staticData: any
}

const LevelRoot: React.FC<LevelRootProps> = ({ level, uri, staticData }) => {
  return (
    <Root uri={uri}>
      <LevelHeader title={`Niveau ${level.toUpperCase()}`} />
      <FicheExerciceSection fiches={staticData.allContentfulActivity.nodes} />
      <GamesSection games={staticData.allContentfulGame.nodes} />
    </Root>
  )
}

export default LevelRoot

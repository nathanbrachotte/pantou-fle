import React from 'react'
import ActivitySection from '../components/Activity/ActivitySection'
import GamesSection from '../components/Games/GamesSection'
import Root from '../components/Root'
import { removeNodeFieldFromData } from '../helpers'
import { Activity, Game, Level } from '../types'
import LevelHeader from './LevelHeader'

interface LevelRootProps {
  level: Level
  uri: string
  staticData: any
}

const LevelRoot: React.FC<LevelRootProps> = ({ level, uri, staticData }) => {
  const cleanActivities = removeNodeFieldFromData<Activity>(
    staticData.filteredByLevelActivities,
  )
  const cleanGames = removeNodeFieldFromData<Game>(
    staticData.filteredByLevelGames,
  )

  return (
    <Root uri={uri}>
      <LevelHeader title={`Niveau ${level.toUpperCase()}`} />
      <ActivitySection fiches={cleanActivities} />
      <GamesSection games={cleanGames} />
    </Root>
  )
}

export default LevelRoot

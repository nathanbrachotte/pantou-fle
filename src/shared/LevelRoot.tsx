import React from 'react'
import Root from '../components/Root'
import ActivitySection from '../components/Activity/ActivitySection'
import GamesSection from '../components/Games/GamesSection'
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
    staticData.activities,
  )
  const cleanGames = removeNodeFieldFromData<Game>(staticData.games)

  return (
    <Root uri={uri}>
      <LevelHeader title={`Niveau ${level.toUpperCase()}`} />
      <ActivitySection fiches={cleanActivities} />
      <GamesSection games={cleanGames} />
    </Root>
  )
}

export default LevelRoot

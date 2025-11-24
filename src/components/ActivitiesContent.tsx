import React from 'react'
import LevelSection from './Activity/LevelSection'
import { BottomOfPageAdSense } from './Ads/AdSense'
import { getActivityTypeLabel } from '../helpers'
import ActivityTypeHeader from '../shared/ActivityTypeHeader'
import { Activity, ActivityType, Level } from '../types'
import EmptyState from '../shared/EmptyState'

const LEVEL_KEYS: Level[] = [
  Level.A1,
  Level.A2,
  Level.B1,
  Level.B2,
  Level.C1,
  Level.C2,
]

export const ActivitesContent: React.FC<{
  arrayData: Activity[]
  activity: ActivityType
  uri: string
  perLevel: Record<Level, Activity[]>
}> = ({ arrayData, activity, uri, perLevel }) => {
  if (arrayData.length === 0) {
    return <EmptyState uri={uri} />
  }

  return (
    <>
      {/* <OverHeaderAdSense path={`${uri}-${activity}`} /> */}
      <ActivityTypeHeader title={getActivityTypeLabel(activity, true)} />
      {LEVEL_KEYS.map<JSX.Element>((level) => (
        <LevelSection key={level} level={level} activities={perLevel[level]} />
      ))}

      <BottomOfPageAdSense path={`${uri}-${activity}`} />
    </>
  )
}


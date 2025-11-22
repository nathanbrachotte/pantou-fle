import { PageProps } from 'gatsby'
import React from 'react'
import LevelSection from '../components/Activity/LevelSection'
import Layout from '../components/Layout'
import {
  BottomOfPageAdSense,
  OverHeaderAdSense,
} from '../components/Ads/AdSense'
import { getActivityTypeLabel, removeNodeFieldFromData } from '../helpers'
import ActivityTypeHeader from '../shared/ActivityTypeHeader'
import { Activity, ActivityType, Level } from '../types'
import EmptyState from '../shared/EmptyState'

type PageContext = {
  data: { node: Activity }[]
  activity: ActivityType
}

const LEVEL_KEYS: Level[] = [
  Level.A1,
  Level.A2,
  Level.B1,
  Level.B2,
  Level.C1,
  Level.C2,
]

const ActivitesContent: React.FC<{
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

/**
 * /LEVEL/ACTIVITY urls
 */
const AllActivities: React.FC<PageProps<ActivityType>> = ({
  uri,
  pageContext,
}) => {
  const { data, activity } = pageContext as PageContext

  const arrayData = removeNodeFieldFromData(data)

  // Initialize perLevel fresh on each render
  const perLevel: Record<Level, Activity[]> = {
    [Level.A1]: [],
    [Level.A2]: [],
    [Level.B1]: [],
    [Level.B2]: [],
    [Level.C1]: [],
    [Level.C2]: [],
  }

  arrayData.forEach((a: Activity) => {
    if (!a?.level?.title) {
      return null
    }

    // Ensure the level exists in our record before pushing
    if (perLevel[a.level.title]) {
      perLevel[a.level.title].push(a)
    }
  })

  return (
    <Layout uri={uri}>
      <div className="relative max-w-full px-2 pt-2">
        <ActivitesContent
          arrayData={arrayData}
          activity={activity}
          uri={uri}
          perLevel={perLevel}
        />
      </div>
    </Layout>
  )
}

export default AllActivities

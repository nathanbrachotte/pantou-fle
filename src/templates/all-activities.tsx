import { PageProps } from 'gatsby'
import React from 'react'
import LevelSection from '../components/Activity/LevelSection'
import Root from '../components/Root'
import { OverHeaderAdSense } from '../components/Ads/AdSense'
import { getActivityTypeLabel, removeNodeFieldFromData } from '../helpers'
import ActivityTypeHeader from '../shared/ActivityTypeHeader'
import { Activity, ActivityType, Level } from '../types'
import EmptyState from '../shared/EmptyState'

type PageContext = {
  data: { node: Activity }[]
  activity: ActivityType
}

// TODO: Filer per date
const perLevel: Record<Level, Activity[]> = {
  A1: [],
  A2: [],
  B1: [],
  B2: [],
  C1: [],
  C2: [],
}

// FIXME: pls be smarter TS
const perLevelKeys = Object.keys(perLevel) as Level[]

const ActivitesContent: React.FC<{
  arrayData: Activity[]
  activity: ActivityType
  uri: string
}> = ({ arrayData, activity, uri }) => {
  if (arrayData.length === 0) {
    return <EmptyState />
  }

  return (
    <>
      <OverHeaderAdSense path={`${uri}-${activity}`} />
      <ActivityTypeHeader title={getActivityTypeLabel(activity, true)} />
      {perLevelKeys.map<JSX.Element>((level) => (
        <LevelSection key={level} level={level} activities={perLevel[level]} />
      ))}
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
  // console.log('🚀 ~ activity:', activity)
  // console.log('🚀 ~ data:', data)

  const arrayData = removeNodeFieldFromData(data)

  arrayData.forEach((a: Activity) => {
    if (!a?.level?.title) {
      return null
    }

    return perLevel[a.level.title].push(a)
  })

  return (
    <Root uri={uri}>
      <div className="relative max-w-full px-2 pt-2">
        <ActivitesContent arrayData={arrayData} activity={activity} uri={uri} />
      </div>
    </Root>
  )
}

export default AllActivities

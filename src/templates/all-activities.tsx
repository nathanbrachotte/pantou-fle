import { PageProps } from 'gatsby'
import React from 'react'
import LevelSection from '../components/Activity/LevelSection'
import Root from '../components/Root'
import { getActivityTypeLabel, removeNodeFieldFromData } from '../helpers'
import ActivityTypeHeader from '../shared/ActivityTypeHeader'
import { Activity, ActivityType, Level } from '../types'

const AllActivities: React.FC<PageProps<ActivityType>> = ({
  uri,
  pageContext,
}) => {
  // FIXME: types be what?
  const { data, activity } = pageContext as {
    data: { node: Activity }[]
    activity: ActivityType
  }

  const arrayData = removeNodeFieldFromData(data)

  // TODO: Filer per date
  const perLevel: Record<Level, Activity[]> = {
    A1: [],
    A2: [],
    B1: [],
    B2: [],
    C1: [],
    C2: [],
  }

  arrayData.forEach((a: Activity) => {
    // console.log({ a })

    if (!a?.level?.title) {
      return null
    }

    return perLevel[a.level.title].push(a)
  })

  // FIXME: pls be smarter TS
  const perLevelKeys = Object.keys(perLevel) as Level[]

  return (
    <Root uri={uri}>
      <div className="relative max-w-full px-2 pt-2">
        <ActivityTypeHeader title={getActivityTypeLabel(activity, true)} />
        {perLevelKeys.map<JSX.Element>((level) => (
          <LevelSection
            key={level}
            level={level}
            activities={perLevel[level]}
          />
        ))}
      </div>
    </Root>
  )
}

export default AllActivities

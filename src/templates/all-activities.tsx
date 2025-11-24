import { PageProps } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'
import { removeNodeFieldFromData, groupActivitiesByLevel } from '../helpers'
import { Activity, ActivityType } from '../types'
import { ActivitesContent } from '../components/ActivitiesContent'

type PageContext = {
  data: { node: Activity }[]
  activity: ActivityType
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
  const perLevel = groupActivitiesByLevel(arrayData)

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

import { PageProps } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'
import {
  removeNodeFieldFromData,
  groupActivitiesByLevel,
  getActivityTypeLabel,
  getCurrentLevel,
} from '../helpers'
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
  const hasContent = arrayData.length > 0

  const level = getCurrentLevel(uri)
  const activityLabel = getActivityTypeLabel(activity, true)
  const pageTitle = `${activityLabel} - Niveau ${level.toUpperCase()}`
  const pageDescription = `Découvrez nos activités de ${activityLabel.toLowerCase()} en français langue étrangère (FLE) pour le niveau ${level.toUpperCase()}. ${arrayData.length} ressource${arrayData.length > 1 ? 's' : ''} disponible${arrayData.length > 1 ? 's' : ''}.`

  return (
    <Layout uri={uri} enableAds={hasContent} title={pageTitle} description={pageDescription}>
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

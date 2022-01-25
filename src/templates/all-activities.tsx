import { ChevronRightIcon } from '@heroicons/react/outline'
import { PageProps } from 'gatsby'
import React from 'react'
import FicheExercicePreview from '../components/Activity/ActivityPreview'
import Root from '../components/Root'
import { getActivityTypeLabel } from '../helpers'
import Heading2 from '../shared/Heading2'
import { Activity as ActivityType } from '../types'

const AllActivities: React.FC<PageProps<ActivityType>> = ({
  uri,
  pageContext,
}) => {
  // FIXME: types be what?
  const { data, activity } = pageContext as {
    data: { node: ActivityType }[]
    activity: string
  }

  const filteredData = data.filter((a) => {
    console.log({ a })
    return a.node.activityType.type === activity
  })

  const arrayData = Object.values(filteredData).map((node) => node.node)
  console.log({ data, filteredData, arrayData })
  return (
    <Root uri={uri}>
      <div className="relative max-w-full pr-4 px-2 pt-2">
        <h1 className="flex flex-row text-2xl font-bold tracking-tight text-left">
          <Heading2>{getActivityTypeLabel(activity)}</Heading2>
          <ChevronRightIcon width={18} />
        </h1>
        <ul className="grid py-2 gap-x-6 gap-y-6 grid-cols-1 md:grid-cols-2">
          {arrayData.map((fiche) => {
            return <FicheExercicePreview key={fiche.slug} fiche={fiche} />
          })}
        </ul>
      </div>
    </Root>
  )
}

export default AllActivities

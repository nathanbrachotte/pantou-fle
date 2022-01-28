import React from 'react'
import {
  getActivityTypeLabel,
  getColorsAndLogoFromLabel,
  includesALevel,
} from '../helpers'
import { ActivityType } from '../types'
import RoundButton from './RoundButton'

function getCleanUri(uri: string, activityType: ActivityType) {
  if (uri && includesALevel(uri) && uri.length <= 3) {
    return `${uri}/${activityType}`
  }

  return `${activityType}`
}

const getButtonFromActivityTypes = (
  uri: string,
  activityType: ActivityType,
) => {
  const { backgroundColor, logo } = getColorsAndLogoFromLabel(activityType)
  const cleanUri = getCleanUri(uri, activityType)

  return (
    <RoundButton
      label={getActivityTypeLabel(activityType)}
      activityType={activityType}
      uri={uri}
      link={cleanUri}
      bgColor={backgroundColor}
      Icon={() => logo}
    />
  )
}

interface AsideProps {
  uri: string
}

const Aside: React.FC<AsideProps> = ({ uri }) => {
  return (
    <aside className="grid grid-cols-2 pt-4 md:grid-cols-1 sm:px-2">
      {/* FIXME: https://www.petermorlion.com/iterating-a-typescript-enum/ */}
      <div>
        {getButtonFromActivityTypes(uri, ActivityType.COMPREHENSION_ECRITE)}
        {getButtonFromActivityTypes(uri, ActivityType.COMPREHENSION_ORALE)}
        {getButtonFromActivityTypes(uri, ActivityType.FICHE_EXERCICE)}
        {getButtonFromActivityTypes(uri, ActivityType.ORTHOGRAPHE)}
      </div>
      <div className="pb-2">
        {getButtonFromActivityTypes(uri, ActivityType.PRODUCTION_ECRITE)}
        {getButtonFromActivityTypes(uri, ActivityType.PRODUCTION_ORALE)}
        {getButtonFromActivityTypes(uri, ActivityType.VOCABULAIRE)}
      </div>
    </aside>
  )
}

export default Aside

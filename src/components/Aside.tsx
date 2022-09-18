import React from 'react'
import {
  getActivityTypeLabel,
  getColorsAndLogoFromLabel,
  getCurrentActivity,
} from '../helpers'
import { ActivityType } from '../types'
import RoundButton from './RoundButton'

const getButtonFromActivityTypes = (
  uri: string,
  activityType: ActivityType,
) => {
  const { backgroundColor, logo } = getColorsAndLogoFromLabel(activityType)
  const isActive = getCurrentActivity(uri) === activityType

  return (
    <RoundButton
      label={getActivityTypeLabel(activityType)}
      isActive={isActive}
      to={`../${activityType}`}
      bgColor={backgroundColor}
      Icon={() => logo}
    />
  )
}

interface AsideProps {
  uri: string
}

const Aside: React.FC<AsideProps> = ({ uri }) => {
  console.log({ uri })
  return (
    <aside className="grid grid-cols-2 pt-4 md:grid-cols-1 sm:px-2">
      {/* FIXME: https://www.petermorlion.com/iterating-a-typescript-enum/ */}
      <div className="space-y-2 pb-2">
        {getButtonFromActivityTypes(uri, ActivityType.TOUTE_ACTIVITE)}
        {getButtonFromActivityTypes(uri, ActivityType.COMPREHENSION_ECRITE)}
        {getButtonFromActivityTypes(uri, ActivityType.COMPREHENSION_ORALE)}
        {getButtonFromActivityTypes(uri, ActivityType.FICHE_EXERCICE)}
        {getButtonFromActivityTypes(uri, ActivityType.PRODUCTION_ECRITE)}
      </div>
      <div className="space-y-2 pb-2">
        {getButtonFromActivityTypes(uri, ActivityType.PRODUCTION_ORALE)}
        {getButtonFromActivityTypes(uri, ActivityType.VOCABULAIRE)}
        {getButtonFromActivityTypes(uri, ActivityType.GRAMMAIRE)}
        {getButtonFromActivityTypes(uri, ActivityType.ORTHOGRAPHE)}
        {getButtonFromActivityTypes(uri, ActivityType.CHANSON)}
      </div>
    </aside>
  )
}

export default Aside

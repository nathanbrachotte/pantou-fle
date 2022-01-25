import React from 'react'
import { getActivityTypeLabel, getColorsAndLogoFromLabel } from '../helpers'
import { ActivityType } from '../types'
import RoundButton from './RoundButton'

const getButtonFromActivityTypes = (activity: ActivityType) => {
  const { backgroundColor, logo } = getColorsAndLogoFromLabel(activity)
  return (
    <RoundButton
      label={getActivityTypeLabel(activity)}
      link={`/${activity}`}
      bgColor={backgroundColor}
      Icon={() => logo}
    />
  )
}

const Aside: React.FC = () => {
  return (
    <aside className="pl-2 pr-2 grid grid-cols-2 pt-4 md:grid-cols-1">
      {/* FIXME: https://www.petermorlion.com/iterating-a-typescript-enum/ */}
      <div>
        {getButtonFromActivityTypes(ActivityType.COMPREHENSION_ECRITE)}
        {getButtonFromActivityTypes(ActivityType.COMPREHENSION_ORALE)}
        {getButtonFromActivityTypes(ActivityType.FICHE_EXERCICE)}
        {getButtonFromActivityTypes(ActivityType.ORTHOGRAPHE)}
      </div>
      <div className="pb-2">
        {getButtonFromActivityTypes(ActivityType.PRODUCTION_ECRITE)}
        {getButtonFromActivityTypes(ActivityType.PRODUCTION_ORALE)}
        {getButtonFromActivityTypes(ActivityType.VOCABULAIRE)}
      </div>
    </aside>
  )
}

export default Aside

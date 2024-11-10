import React from 'react'
import {
  getActivityTypeLabel,
  getColorsAndLogoFromLabel,
  getCurrentActivity,
  getCurrentLevel,
} from '../helpers'
import { ActivityPageData, ActivityType } from '../types'
import RoundButton from './RoundButton'

const getButtonFromActivityTypes = (
  uri: string,
  activityType: ActivityType,
  pageData?: ActivityPageData,
) => {
  const { backgroundColor, logo } = getColorsAndLogoFromLabel(activityType)
  const isActive = getCurrentActivity(uri, pageData?.activity) === activityType
  const urlLevel = getCurrentLevel(uri)

  return (
    <RoundButton
      isActive={isActive}
      to={`/${urlLevel}/${activityType}`}
      bgColor={backgroundColor}
      Icon={() => logo}>
      <span className="hidden sm:block">
        {getActivityTypeLabel(activityType, true)}
      </span>
      <span className="block sm:hidden">
        {getActivityTypeLabel(activityType)}
      </span>
    </RoundButton>
  )
}

interface AsideProps {
  uri: string
  pageData?: ActivityPageData
}

const Aside: React.FC<AsideProps> = ({ uri, pageData }) => {
  return (
    <aside className="grid grid-cols-2 pt-4 lg:grid-cols-1 px-2 mb-4 lg:mb-0 gap-1">
      {/* FIXME: https://www.petermorlion.com/iterating-a-typescript-enum/ */}
      <div className="space-y-2 pb-2">
        {getButtonFromActivityTypes(uri, ActivityType.TOUTE_ACTIVITE, pageData)}
        {getButtonFromActivityTypes(
          uri,
          ActivityType.COMPREHENSION_ECRITE,
          pageData,
        )}
        {getButtonFromActivityTypes(
          uri,
          ActivityType.COMPREHENSION_ORALE,
          pageData,
        )}
        {getButtonFromActivityTypes(uri, ActivityType.FICHE_EXERCICE, pageData)}
        {getButtonFromActivityTypes(
          uri,
          ActivityType.PRODUCTION_ECRITE,
          pageData,
        )}
      </div>
      <div className="space-y-2 pb-2">
        {getButtonFromActivityTypes(
          uri,
          ActivityType.PRODUCTION_ORALE,
          pageData,
        )}
        {getButtonFromActivityTypes(uri, ActivityType.VOCABULAIRE, pageData)}
        {getButtonFromActivityTypes(uri, ActivityType.GRAMMAIRE, pageData)}
        {getButtonFromActivityTypes(uri, ActivityType.ORTHOGRAPHE, pageData)}
        {getButtonFromActivityTypes(uri, ActivityType.CHANSON, pageData)}
      </div>
    </aside>
  )
}

export default Aside

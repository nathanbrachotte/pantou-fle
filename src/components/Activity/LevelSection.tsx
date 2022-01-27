import { ChevronRightIcon } from '@heroicons/react/outline'
import React from 'react'
import LevelBadge from '../../shared/LevelBadge'
import Heading2 from '../../shared/Heading2'
import { Activity, Level } from '../../types'
import ActivityPreview from './ActivityPreview'

interface LevelSectionProps {
  level: Level
  activities: Activity[]
}

const LevelSection: React.FC<LevelSectionProps> = ({ level, activities }) => {
  if (!activities || activities.length === 0) return null

  return (
    <div className="relative max-w-full pr-4 px-2 pt-2">
      <h1 className="flex flex-row text-2xl font-bold tracking-tight text-left">
        <Heading2>{level}</Heading2>
        <ChevronRightIcon width={18} />
      </h1>
      <ul className="grid py-2 gap-x-6 gap-y-6 grid-cols-1 sm:grid-cols-2">
        {activities.map((fiche) => {
          // console.log({ type: fiche.activityType.type })
          return (
            <ActivityPreview
              key={fiche.slug}
              fiche={fiche}
              badges={[<LevelBadge text={fiche.level.title} />]}
            />
          )
        })}
      </ul>
    </div>
  )
}

export default LevelSection

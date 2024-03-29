import { ChevronRightIcon } from '@heroicons/react/outline'
import React from 'react'
import { Section } from 'react-scroll-section'
import { Activity } from '../../types'
import ActivityPreview from './ActivityPreview'
import Heading2 from '../../shared/Heading2'
import { Badge } from '../Badge'
import CategoryBadge from '../../shared/CategoryBadge'
import LevelBadge from '../../shared/LevelBadge'

interface ActivitySectionProps {
  fiches: Activity[]
  maxItems?: number
  extraBadgeType?: 'activity' | 'level' | 'all'
}

const ActivitySection: React.FC<ActivitySectionProps> = ({
  fiches,
  maxItems,
  extraBadgeType,
}) => {
  const filteredActivities = maxItems ? fiches.slice(0, maxItems) : fiches

  return (
    <div className="relative max-w-full px-2 pt-2">
      <Section id="ActivitySection">
        <h1 className="flex flex-row text-2xl font-bold tracking-tight text-left">
          <Heading2>Activités</Heading2>
          <ChevronRightIcon width={18} />
        </h1>
        <ul className="grid py-2 gap-x-6 gap-y-6 grid-cols-1 sm:grid-cols-2">
          {filteredActivities.length === 0 ? (
            <div className="">
              <p>Rien à voir ici pour l&apos;instant, on y travaille </p>
            </div>
          ) : (
            filteredActivities.map((fiche) => {
              const extraBadge =
                extraBadgeType === 'level' ? (
                  <LevelBadge text={fiche.level.title} />
                ) : (
                  <></>
                )

              const badges = [
                extraBadge,
                <CategoryBadge
                  key="category"
                  text={fiche.activityType?.type}
                />,
              ]

              return (
                <ActivityPreview
                  key={fiche.slug}
                  fiche={fiche}
                  badges={badges}
                />
              )
            })
          )}
        </ul>
      </Section>
    </div>
  )
}

export default ActivitySection

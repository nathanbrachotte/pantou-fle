import React from 'react'
import clsx from 'clsx'
import EllipsisText from '../../shared/EllispsisText'
import Image from '../../shared/Image'
import { Activity } from '../../types'
import { getActivityTypeLabel } from '../../helpers'
import { InBetweenActivitiesAd } from '../Ads/AdSense'

interface ActivityPreviewProps {
  fiche: Activity
  badges: JSX.Element[]
  displayAd?: boolean
}

const ActivityPreview: React.FC<ActivityPreviewProps> = ({
  fiche,
  badges,
  displayAd,
}) => {
  const category = getActivityTypeLabel(fiche.activityType?.type)
  const previewDescription = fiche?.previewDescription
  const preview = fiche?.preview?.file.url
  // const isFree =
  //   !fiche?.price?.paymentType || fiche.price.paymentType === 'free'

  return (
    <>
      {displayAd && (
        <li>
          <InBetweenActivitiesAd activityId={fiche.slug} />
        </li>
      )}
      <li
        className={clsx(
          'overflow-hidden rounded-lg bg-background max-w-3xl group',
        )}>
        <a
          href={`/${fiche.slug}`}
          className="flex flex-row flex-wrap items-center justify-center">
          <div className="flex-auto w-full lg:w-5/12 self-start">
            <div className="relative">
              <Image url={preview} />
              {/* {!isFree && (
              <Tooltip content="Accès Payant">
                <div className="absolute left-1 bottom-1 sm:left-2 sm:bottom-2">
                  <div
                    className={clsx(
                      'rounded-full items-center justify-center mr-2 flex-none bg-yellow-200 p-1',
                    )}>
                    <StarIcon className="fill-yellow-500 h-2 sm:h-4" />
                  </div>
                </div>
              </Tooltip>
            )} */}
            </div>
          </div>
          <div className="flex-auto w-7/12 p-2 px-0 lg:px-4 self-stretch">
            <div className="flex flex-col justify-between items-stretch h-full">
              <p className="flex-none text-xs text-secondary-light font-light pb-1">
                {category}
              </p>
              <div className="flex-1 h-full">
                <p className="text-primary-dark font-bold text-md lg:text-lg xl:text-xl">
                  {fiche.title}
                </p>
                {/* FIXME: inside is an <a> tag created within rich text which throws an error */}
                <EllipsisText className="text-primary text-sm">
                  {previewDescription}
                </EllipsisText>
              </div>
              <div className="none flex flex-row flex-wrap justify-between items-center">
                <div className="flex-row flex">
                  {badges?.map((badge) => {
                    return (
                      <div className="mr-1" key={fiche.slug + badge.key}>
                        {badge}
                      </div>
                    )
                  })}
                </div>
                <p className="text-primary text-xs pt-1 ">
                  {new Date(fiche.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        </a>
      </li>
    </>
  )
}

export default ActivityPreview

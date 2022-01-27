import React from 'react'
import { StarIcon } from '@heroicons/react/solid'
import clsx from 'clsx'
import EllipsisText from '../../shared/EllispsisText'
import { Tooltip } from '../../shared/Tooltip'
import { Activity } from '../../types'
import { getActivityTypeLabel } from '../../helpers'

interface ActivityPreviewProps {
  fiche: Activity
  badges: JSX.Element[]
}

const ActivityPreview: React.FC<ActivityPreviewProps> = ({ fiche, badges }) => {
  const category = getActivityTypeLabel(fiche.activityType.type)
  const previewDescription = fiche?.previewDescription
  const preview = fiche?.preview?.file.url
  const isFree =
    !fiche?.price?.paymentType || fiche.price.paymentType === 'free'

  return (
    <li
      className={clsx(
        'overflow-hidden rounded-lg bg-background max-w-3xl',
        // 'shadow-lg shadow-primary-light-500/50',
      )}>
      <a
        href={`/${fiche.slug}`}
        className="flex flex-row flex-wrap items-center justify-center">
        <div className="flex-auto w-full lg:w-5/12 self-start">
          <div className="relative">
            <img
              src={preview || 'https://wallpapercave.com/wp/wp4676582.jpg'}
              alt=""
              className="rounded-lg aspect-video object-cover"
            />
            {!preview ? (
              <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-black/75 rounded-lg" />
            ) : (
              <div
                className={clsx(
                  'absolute inset-0 h-full w-full bg-gradient-to-br from-primary-dark/5 rounded-lg',
                )}
              />
            )}
            {!isFree && (
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
            )}
          </div>
        </div>
        <div className="flex-auto w-7/12 p-2 px-0 lg:px-4 self-stretch">
          <div className="flex flex-col justify-between items-stretch h-full">
            <p className="flex-none text-xs text-secondary-light font-light pb-1">
              {category}
            </p>
            <div className="flex-1 h-full">
              <p className="text-primary-dark font-semi-bold text-xl">
                {fiche.title}
              </p>
              {/* FIXME: inside is an <a> tag created within rich text which throws an error */}
              <EllipsisText className="text-primary text-sm">
                {previewDescription}
              </EllipsisText>
            </div>
            <div className="none flex flex-row flex-wrap justify-between items-center">
              {badges?.map((badge) => {
                return badge
              })}
              <p className="text-primary text-xs pt-1 ">
                {new Date(fiche.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </a>
    </li>
  )
}

export default ActivityPreview

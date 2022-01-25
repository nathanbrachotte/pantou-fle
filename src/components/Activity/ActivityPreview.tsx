import { StarIcon } from '@heroicons/react/solid'
import clsx from 'clsx'
import React from 'react'
import CategoryBadge from '../../shared/CategoryBadge'
import EllipsisText from '../../shared/EllispsisText'
import { Tooltip } from '../../shared/Tooltip'
import { Activity } from '../../types'
import { Badge } from '../Badge'
import { poorText, richText } from '../RichText'

interface ActivityPreviewProps {
  fiche: Activity
}

const ActivityPreview: React.FC<ActivityPreviewProps> = ({ fiche }) => {
  const description = fiche?.description?.raw
  const preview = fiche?.preview?.file.url
  const isFree = fiche.price.paymentType === 'free'
  const { type } = fiche.activityType

  console.log({ fiche, type })

  return (
    <li className="overflow-hidden rounded-lg bg-background max-w-3xl">
      <a
        href={`/${fiche.slug}`}
        className="flex flex-row flex-wrap items-center justify-center">
        <div className="flex-auto w-5/12 self-start">
          <div className="relative">
            <img
              src={preview || 'https://wallpapercave.com/wp/wp4676582.jpg'}
              alt=""
              className="rounded-lg aspect-video"
            />
            {!preview ? (
              <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-black/75 rounded-lg" />
            ) : (
              <div
                className={clsx(
                  '',
                  // "absolute inset-0 h-full w-full bg-gradient-to-br from-black/5 rounded-lg"
                )}
              />
            )}
            {!isFree && (
              <Tooltip content="Accès Payant">
                <div>
                  <StarIcon className="absolute left-2 bottom-2 fill-yellow-300 h-4  lg:h-8" />
                </div>
              </Tooltip>
            )}
          </div>
        </div>
        <div className="flex-auto w-7/12 p-2 px-4 self-stretch">
          <div className="flex flex-col justify-between items-stretch h-full">
            <p className="flex-none text-xs text-secondary-light font-light pb-1">
              Activités
            </p>
            <div className="flex-1 h-full">
              <p className="text-primary-dark font-semi-bold text-xl">
                {fiche.title}
              </p>
              {/* FIXME: inside is an <a> tag created within rich text which throws an error */}
              <EllipsisText className="text-primary text-sm">
                {description && poorText(fiche)}
              </EllipsisText>
            </div>
            <div className="none flex flex-row flex-wrap justify-between items-center">
              <CategoryBadge text={type} />
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

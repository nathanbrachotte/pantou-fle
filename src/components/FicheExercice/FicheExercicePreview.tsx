import React from 'react'
import EllipsisText from '../../shared/EllispsisText'
import { FicheExercice } from '../../types'
import { richText } from '../RichText'

interface FicheExercicePreviewProps {
  fiche: FicheExercice
}

const FicheExercicePreview: React.FC<FicheExercicePreviewProps> = ({
  fiche,
}) => {
  const description = fiche?.description?.raw
  const preview = fiche?.preview?.file.url

  return (
    <li className="overflow-hidden rounded-lg bg-background ">
      <a
        href={`/${fiche.slug}`}
        className="flex flex-row items-center justify-center">
        <div className="flex-auto w-5/12 self-start">
          <div className="relative">
            <img
              src={preview || 'https://wallpapercave.com/wp/wp4676582.jpg'}
              alt=""
              className="rounded-lg  aspect-video"
            />
            {!preview ? (
              <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-black/75 rounded-lg" />
            ) : (
              <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-black/10 rounded-lg" />
            )}
          </div>
        </div>
        <div className="flex-auto w-7/12 p-2 px-4 self-stretch">
          <div className="flex flex-col justify-between items-stretch h-full">
            <p className="flex-none text-xs text-secondary-light font-light pb-1">
              Fiche Exercice
            </p>
            <div className="flex-1 h-full">
              <p className="text-primary-dark font-semi-bold text-xl">
                {fiche.title}
              </p>
              {/* FIXME: inside is an <a> tag created within rich text which throws an error */}
              <EllipsisText className="text-primary text-sm">
                {description && richText(fiche)}
              </EllipsisText>
            </div>
            <p className="flex-none text-primary text-xs pt-1">
              {new Date(fiche.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>
      </a>
    </li>
  )
}

export default FicheExercicePreview

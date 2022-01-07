import React from 'react'
import EllipsisText from '../../shared/EllispsisText'
import { Game } from '../../types'
import { richText } from '../RichText'

interface GamesPreviewProps {
  game: Game
}

const GamesPreview: React.FC<GamesPreviewProps> = ({ game }) => {
  const description = game?.description?.raw

  return (
    <li className="overflow-hidden rounded-lg bg-background max-w-xl">
      <a
        href={`/${game.slug}`}
        className="flex flex-row items-center justify-center">
        <div className="flex-auto w-5/12 self-start">
          <img
            src="https://wallpapercave.com/wp/wp4676582.jpg"
            alt=""
            className="rounded-lg"
          />
        </div>
        {/* <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-black/75" /> */}
        <div className="flex-auto w-7/12 p-2 self-stretch">
          <div className="flex flex-col justify-between items-stretch h-full">
            <p className="flex-none text-xs text-secondary-light font-light pb-1">
              Game Exercice
            </p>
            <div className="flex-1 h-full">
              <p className="text-primary-dark font-semi-bold text-xl">
                {game.title}
              </p>
              {/* FIXME: inside is an <a> tag created within rich text which throws an error */}
              <EllipsisText className="text-primary text-sm">
                {description && richText(game)}
              </EllipsisText>
            </div>
            <p className="flex-none text-primary text-xs pt-1">
              {new Date(game.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>
      </a>
    </li>
  )
}

export default GamesPreview

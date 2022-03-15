import React from 'react'
import clsx from 'clsx'
import EllipsisText from '../../shared/EllispsisText'
import { Game } from '../../types'
import { richText } from '../RichText'
import Image from '../../shared/Image'

interface GamesPreviewProps {
  game: Game
}

const GamesPreview: React.FC<GamesPreviewProps> = ({ game }) => {
  // const description = game?.description?.raw
  const preview = game?.preview?.file.url
  // console.log({ game })
  return (
    <li className="overflow-hidden rounded-lg bg-background max-w-m sm:w-4/4 max-w-lg">
      <a href={`/${game.slug}`} className="flex flex-col">
        <div className="relative">
          <Image url={preview} />
        </div>
        <div className="flex-1 p-2 self-stretch">
          <div className="flex flex-col justify-between items-stretch h-full">
            <p className="flex-none text-xs text-secondary-light font-light pb-1">
              Game Exercice
            </p>
            <div className="flex-1 h-full">
              <p className="text-primary-dark font-semi-bold text-xl">
                {game.title}
              </p>
              {/* FIXME: inside is an <a> tag created within rich text which throws an error */}
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

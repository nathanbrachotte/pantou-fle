import React from 'react'
import clsx from 'clsx'
import EllipsisText from '../../shared/EllispsisText'
import { Game } from '../../types'
import { richText } from '../RichText'

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
          <img
            src={
              `${preview}?w=400` || 'https://wallpapercave.com/wp/wp4676582.jpg'
            }
            alt=""
            className="rounded-lg self-center aspect-video"
          />
          {!preview && (
            <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-black/75" />
          )}
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

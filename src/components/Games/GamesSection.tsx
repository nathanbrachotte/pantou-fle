import { ChevronRightIcon } from '@heroicons/react/outline'
import React from 'react'
import { Section } from 'react-scroll-section'
import { Game } from '../../types'
import GamesPreview from './GamesPreview'
import Heading2 from '../../shared/Heading2'

interface GamesSectionProps {
  games: Game[]
}

const GamesSection: React.FC<GamesSectionProps> = ({ games }) => {
  return (
    <div className="relative max-w-full pr-4 mt-8 px-2 sm:pt-2">
      <Section id="GamesSection">
        <h1 className="flex flex-row text-2xl font-bold tracking-tight text-left">
          <Heading2>Jeux</Heading2>
          <ChevronRightIcon width={18} />
        </h1>
        <ul className="grid py-2 gap-x-6 gap-y-6 grid-cols-2 place-items-center md:grid-cols-2 lg:grid-cols-4 lg:place-items-stretch">
          {games.length === 0 ? (
            <div className="">
              <p>Rien à voir ici pour l&apos;instant, on y travaille </p>
            </div>
          ) : (
            games?.map((game) => {
              return <GamesPreview key={game.slug} game={game} />
            })
          )}
        </ul>
      </Section>
    </div>
  )
}

export default GamesSection

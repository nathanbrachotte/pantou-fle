import { ChevronRightIcon } from '@heroicons/react/outline'
import React from 'react'
import { Section } from 'react-scroll-section'
import { Game } from '../../types'
import GamesPreview from './GamesPreview'
import Heading1 from '../../shared/Heading1'

interface GamesSectionProps {
  games: Game[]
}

const GamesSection: React.FC<GamesSectionProps> = ({ games }) => {
  return (
    <div className="relative max-w-full pr-4 mt-8">
      <Section id="GamesSection">
        <h1 className="flex flex-row text-2xl font-bold tracking-tight text-left">
          <Heading1>Jeux</Heading1>
          <ChevronRightIcon width={18} />
        </h1>
        <ul className="grid py-2 gap-x-6 gap-y-6 sm:grid-cols-1 md:grid-cols-2">
          {games?.map((game) => {
            return <GamesPreview key={game.slug} game={game} />
          })}
        </ul>
      </Section>
    </div>
  )
}

export default GamesSection

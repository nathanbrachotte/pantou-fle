import { ChevronRightIcon } from '@heroicons/react/outline'
import { PageProps } from 'gatsby'
import React from 'react'
import Root from '../components/Root'
import Heading2 from '../shared/Heading2'
import { Level, Game as GameType } from '../types'

interface AllGames {
  level: Level
}

const AllGames: React.FC<PageProps<GameType>> = ({ uri, ...props }) => {
  console.log({ uri, props })
  return (
    <Root uri={uri}>
      <div className="relative max-w-full pr-4 px-2 pt-2">
        <h1 className="flex flex-row text-2xl font-bold tracking-tight text-left">
          <Heading2>Fiche Exercices</Heading2>
          <ChevronRightIcon width={18} />
        </h1>
        <ul className="grid py-2 gap-x-6 gap-y-6 grid-cols-1 md:grid-cols-2">
          {/* {fiches.length === 0 ? (
          <div className="">
            <p>Rien à voir ici pour l&apos;instant, on y travaille </p>
          </div>
        ) : (
          fiches.map((fiche) => {
            return <FicheExercicePreview key={fiche.slug} fiche={fiche} />
          })
        )} */}
        </ul>
      </div>
    </Root>
  )
}

export default AllGames

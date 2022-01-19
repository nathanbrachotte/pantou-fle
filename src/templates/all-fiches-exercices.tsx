import { ChevronRightIcon } from '@heroicons/react/outline'
import { PageProps } from 'gatsby'
import React from 'react'
import FicheExercicePreview from '../components/FicheExercice/FicheExercicePreview'
import Root from '../components/Root'
import Heading2 from '../shared/Heading2'
import { FicheExercice as FicheExerciceType } from '../types'

const AllFicheExercices: React.FC<PageProps<FicheExerciceType>> = ({
  uri,
  pageContext,
}) => {
  // FIXME: types be what?
  const data = pageContext as Record<number, { node: FicheExerciceType }>
  const arrayData = Object.values(data).map((node) => node.node)

  return (
    <Root uri={uri}>
      <div className="relative max-w-full pr-4 px-2 pt-2">
        <h1 className="flex flex-row text-2xl font-bold tracking-tight text-left">
          <Heading2>Fiche Exercices</Heading2>
          <ChevronRightIcon width={18} />
        </h1>
        <ul className="grid py-2 gap-x-6 gap-y-6 grid-cols-1 md:grid-cols-2">
          {arrayData.map((fiche) => {
            return <FicheExercicePreview fiche={fiche} />
          })}
        </ul>
      </div>
    </Root>
  )
}

export default AllFicheExercices

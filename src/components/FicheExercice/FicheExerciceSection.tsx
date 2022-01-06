import {
  ChevronDoubleRightIcon,
  ChevronRightIcon,
} from '@heroicons/react/outline'
import React from 'react'
import { Section } from 'react-scroll-section'
import EllipsisText from '../../shared/EllispsisText'
import { FicheExercice } from '../../types'
import FicheExercicePreview from './FicheExercicePreview'
import { richText } from '../RichText'

interface FicheExerciceSectionProps {
  fiches: FicheExercice[]
}

const FicheExerciceSection: React.FC<FicheExerciceSectionProps> = ({
  fiches,
}) => {
  // <div className="mt-32 relative max-w-full">
  return (
    <Section id="FicheExerciceSection">
      <div className="relative max-w-full">
        <h1 className="flex flex-row text-2xl font-bold tracking-tight text-left">
          <p className="pr-2">Fiche Exercices</p>
          <ChevronRightIcon width={20} />
        </h1>
        {/* <ul className="mt-10 pb-8 px-[4rem] w-full flex overflow-x-auto gap-8 snap-x"> */}
        <ul className="grid px-4 py-2 gap-x-4 gap-y-4 sm:grid-cols-1 md:grid-cols-2">
          {fiches.map((fiche) => {
            return <FicheExercicePreview key={fiche.slug} fiche={fiche} />
          })}
        </ul>
      </div>
    </Section>
  )
}

export default FicheExerciceSection

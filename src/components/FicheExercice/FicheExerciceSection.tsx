import { ChevronRightIcon } from '@heroicons/react/outline'
import React from 'react'
import { Section } from 'react-scroll-section'
import { FicheExercice } from '../../types'
import FicheExercicePreview from './FicheExercicePreview'
import Heading2 from '../../shared/Heading2'

interface FicheExerciceSectionProps {
  fiches: FicheExercice[]
}

const FicheExerciceSection: React.FC<FicheExerciceSectionProps> = ({
  fiches,
}) => {
  return (
    <div className="relative max-w-full pr-4 sm:px-2 sm:pt-2">
      <Section id="FicheExerciceSection">
        <h1 className="flex flex-row text-2xl font-bold tracking-tight text-left">
          <Heading2>Fiche Exercices</Heading2>
          <ChevronRightIcon width={18} />
        </h1>
        <ul className="grid py-2 gap-x-6 gap-y-6 sm:grid-cols-1 md:grid-cols-2">
          {fiches.map((fiche) => {
            return <FicheExercicePreview key={fiche.slug} fiche={fiche} />
          })}
        </ul>
      </Section>
    </div>
  )
}

export default FicheExerciceSection

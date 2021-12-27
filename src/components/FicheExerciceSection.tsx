import React from 'react'
import { FicheExercice } from '../types'

interface FicheExerciceSectionProps {
  fiches: FicheExercice[]
}

const FichePreview: React.FC<{ fiche: FicheExercice }> = ({ fiche }) => {
  console.log({ fiche })
  return (
    <li className="overflow-hidden rounded-2xl bg-white p-2 max-w-lg">
      <a
        href={`/${fiche.slug}`}
        className="flex flex-row items-center justify-center">
        <div className="flex-1 w-1/2">
          <img
            src="https://wallpapercave.com/wp/wp4676582.jpg"
            alt=""
            className="rounded-xl"
          />
        </div>
        {/* <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-black/75" /> */}
        <div className="flex-1 w-1/2 p-2 self-start">
          <div>
            <p className="text-xs text-secondary-light font-light pb-1">
              Fiche Exercice
            </p>
            <h2 className="text-primary-dark font-semi-bold">{fiche.title}</h2>
            <p className="text-primary-dark text-xs">Lorem ipsum dolo</p>
          </div>
        </div>
      </a>
    </li>
  )
}

const FicheExerciceSection: React.FC<FicheExerciceSectionProps> = ({
  fiches,
}) => {
  return (
    // <div className="mt-32 relative max-w-full">
    <div className="relative max-w-full">
      <h1 className="text-2xl font-bold tracking-tight text-left">YO</h1>
      {/* <ul className="mt-10 pb-8 px-[4rem] w-full flex overflow-x-auto gap-8 snap-x"> */}
      <ul className="grid px-4 py-2 gap-x-4 gap-y-4 sm:grid-cols-1 md:grid-cols-2">
        {fiches.map((fiche) => {
          return <FichePreview key={fiche.slug} fiche={fiche} />
        })}
      </ul>
    </div>
  )
}

export default FicheExerciceSection

import React from 'react'
import { FicheExercice } from '../types'

interface FicheExerciceSectionProps {
  fiches?: FicheExercice[]
}

const fakeData = [
  {
    title: 'do brazil',
    img: 'fill me',
  },
]

const FichePreview: React.FC<FicheExerciceSectionProps> = ({ fiches }) => {
  console.log({ fiches })
  return (
    <li className="relative flex-1 max-w-sm  overflow-hidden rounded-3xl">
      <img
        src="https://wallpapercave.com/wp/wp4676582.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-bottom"
      />
      <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-black/75" />
      <div className="relative h-96 w-[768px] p-12 flex flex-col justify-between items-start">
        <div>
          <p className="font-medium text-white">Destinations</p>
          <h2 className="mt-3 w-2/3 text-3xl font-semibold tracking-tight text-white">
            Go to see the best sunsets in the world
          </h2>
        </div>
        <a
          href="#"
          className="px-4 py-3 rounded-lg bg-white text-slate-900 text-sm font-medium">
          Browse Destinations
        </a>
      </div>
    </li>
  )
}

const FicheExerciceSection: React.FC<FicheExerciceSectionProps> = ({
  fiches,
}) => {
  return (
    // <div className="mt-32 relative max-w-full">
    <div className="relative max-w-full bg-slate-300">
      <h1 className="text-2xl font-bold tracking-tight text-left">YO</h1>
      {/* <ul className="mt-10 pb-8 px-[4rem] w-full flex overflow-x-auto gap-8 snap-x"> */}
      <ul className="mt-10 pb-8 px-[4rem] w-full flex flex-wrap gap-8">
        <FichePreview />
        <FichePreview />
        <FichePreview />
        <FichePreview />
      </ul>
    </div>
  )
}

export default FicheExerciceSection

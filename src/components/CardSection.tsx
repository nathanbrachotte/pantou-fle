import React from 'react'

interface Card {
  title: string
  img: string
}

interface CardSectionProps {
  cards?: Card[]
}

const fakeData = [
  {
    title: 'do brazil',
    img: 'fill me',
  },
]
const CardSection: React.FC<CardSectionProps> = ({ cards = fakeData }) => {
  return (
    // <div className="mt-32 relative max-w-full">
    <div className="relative max-w-full bg-slate-300">
      <h1 className="text-2xl font-bold tracking-tight text-left">YO</h1>
      {/* <ul className="mt-10 pb-8 px-[4rem] w-full flex overflow-x-auto gap-8 snap-x"> */}
      <ul className="mt-10 pb-8 px-[4rem] w-full flex overflow-x-auto gap-8 snap-x">
        <li className="snap-center">
          <div className="relative flex-shrink-0 max-w-[95vw] overflow-hidden rounded-3xl">
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
          </div>
        </li>
        <li className="snap-center">
          <div className="relative flex-shrink-0 max-w-[95vw] overflow-hidden rounded-3xl">
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
          </div>
        </li>
        <li className="snap-center">
          <div className="relative flex-shrink-0 max-w-[95vw] overflow-hidden rounded-3xl">
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
          </div>
        </li>
        <li className="snap-center">
          <div className="relative flex-shrink-0 max-w-[95vw] overflow-hidden rounded-3xl">
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
          </div>
        </li>
        <li className="snap-center">
          <div className="relative flex-shrink-0 max-w-[95vw] overflow-hidden rounded-3xl">
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
          </div>
        </li>
      </ul>
    </div>
  )
}

export default CardSection

import { ExclamationCircleIcon } from '@heroicons/react/outline'
import React from 'react'
import { Facebook, Instagram, Youtube } from '../../assets'
import SquareButton from '../shared/SquareButton'
import { Tooltip } from '../shared/Tooltip'
import { colors } from '../types'
import Label from './Label'
import Logo from './Logo'

const Footer: React.FC = () => {
  return (
    <>
      <div className="bg-background  grid px-8 pt-6 sm:pb-48 md:pb-0 md:grid-cols-2 md:grid-rows-1">
        <div className="flex-1 flex flex-col justify-between row-start-2 sm:h-0 md:h-full md:row-start-1">
          <div className="pt-4">
            <div className="flex flex-row justify-start items-end">
              <div className="w-14">
                <Logo />
              </div>
              <div className="pl-2">
                <Label />
              </div>
            </div>
            <p className="font-nunito text-gray-600 sm:w-4/5 lg:w-2/3 xl:w-1/2">
              Le site de ressource pour apprendre Français langue étrangère de
              manière ludique
            </p>
          </div>
          <div className="flex flex-row justify-start row-start-1 sm:pt-4">
            <a
              className="pr-2"
              href="https://www.facebook.com/apprendreAvecPantouFLE"
              target="_blank"
              rel="noreferrer">
              <Facebook color={colors['primary-dark']} size={26} />
            </a>
            <a
              className="pr-2"
              target="_blank"
              href="https://www.instagram.com/pantou_fle/"
              rel="noreferrer">
              <Instagram color={colors['primary-dark']} size={26} />
            </a>
            <a
              className="pr-2"
              target="_blank"
              href="https://www.youtube.com/channel/UCYFLgaAWqetra1x03v7XacQ/featured"
              rel="noreferrer">
              <Youtube color={colors['primary-dark']} size={26} />
            </a>
            <a
              className="pr-2"
              target="_blank"
              href="https://www.youtube.com/channel/UCYFLgaAWqetra1x03v7XacQ/featured"
              rel="noreferrer">
              <ExclamationCircleIcon color={colors['primary-dark']} size={26} />
            </a>
          </div>
        </div>
        <div className="flex-1 flex sm:justify-center md:justify-end">
          <div className="w-2/3 sm:w-full lg:w-2/3">
            <form
              className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8"
              action="https://www.getrevue.co/profile/nathan-brachotte/add_subscriber"
              method="post"
              id="revue-form"
              name="revue-form"
              target="_blank">
              <span role="img" aria-label="Newsletter" className="text-6xl">
                📫
              </span>
              <div className="mb-6">
                <input
                  className="bg-gray-100 appearance-none rounded-lg w-full py-2 px-3 text-gray-600 mb-3 leading-large mt-2"
                  placeholder="Prénom (optionel)"
                  type="text"
                  name="member[first_name]"
                  id="member_first_name"
                />
                <div className="flex flex-row">
                  <input
                    className="bg-gray-100 appearance-none rounded-lg w-full py-2 px-3 text-gray-600 mb-3 leading-large"
                    placeholder="Adresse email"
                    type="email"
                    name="member[email]"
                    id="member_email"
                  />
                  <Tooltip content="yoo les kheyyy">
                    <input
                      type="submit"
                      value="Subscribe"
                      name="member[subscribe]"
                      id="member_submit"
                    />
                    {/* <SquareButton /> */}
                  </Tooltip>
                </div>
                {/* <p className="text-red-500 text-xs italic">
                  Please enter a valid address.
                </p> */}
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="h-16 sm:h-20 bg-background" />
    </>
  )
}

export default Footer

import React from 'react'
import {
  Email,
  Facebook,
  Instagram,
  Logo,
  LogoLabel,
  Youtube,
} from '../../assets'
import SquareButton from './SquareButton'
import { colors } from '../colors'

const Footer: React.FC = () => {
  return (
    <div className="bg-whitish w-full">
      <div className="grid pt-6 px-2 sm:px-8 md:pb-0 md:grid-cols-2 md:grid-rows-1">
        <div className="flex-1 flex flex-col justify-between row-start-2  md:h-full md:row-start-1">
          <div className="pt-4">
            <div className="flex flex-row justify-start items-end">
              <div className="w-14">
                <Logo />
              </div>
              <div className="pl-2 w-28">
                <LogoLabel />
              </div>
              <div className="pl-2">{/* <Label /> */}</div>
            </div>
            <p className="font-nunito text-gray-600 py-2 w-4/5 lg:w-2/3 xl:w-1/2">
              Le site de ressource pour apprendre Français langue étrangère de
              manière ludique
            </p>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row justify-start items-end row-start-1 pt-4">
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
                href="mailto:cathy.nguyen.fle@gmail.com"
                rel="noreferrer">
                <Email color={colors['primary-dark']} size={26} />
              </a>
            </div>
            <p className="text-primary text-xs pt-2">
              @
              {new Intl.DateTimeFormat('fr-FR', {
                // dateStyle: 'short',
                year: 'numeric',
                // eslint-disable-next-line react/jsx-one-expression-per-line
              }).format(Date.now())}{' '}
              Pantou-fle - Tous droits réservés
            </p>
          </div>
        </div>

        <div className="flex-1 flex justify-center md:justify-end">
          <div className="w-full lg:w-2/3 max-w-lg">
            <form
              className="bg-background shadow-lg rounded-lg px-4 pt-6 pb-2 sm:px-8"
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
                  className="bg-gray-100 appearance-none rounded-lg w-full py-2 px-3 text-gray-600 mb-3 leading-large mt-2 outline-none"
                  placeholder="Prénom (optionel)"
                  type="text"
                  name="member[first_name]"
                  id="member_first_name"
                />
                <div className="flex flex-row mb-3">
                  <input
                    className="bg-gray-100 appearance-none rounded-l-lg w-full py-2 px-3 text-gray-600 leading-large outline-none"
                    placeholder="Adresse email"
                    type="email"
                    name="member[email]"
                    id="member_email"
                  />
                  <SquareButton />
                </div>
                <p className="text-sm text-primary-dark">
                  Ne manquez aucune nouvelle resource en vous abonnant à notre
                  newsletter!
                </p>
                {/* <p className="text-red-500 text-xs italic">
                  Please enter a valid address.
                </p> */}
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="h-20" />
    </div>
  )
}

export default Footer

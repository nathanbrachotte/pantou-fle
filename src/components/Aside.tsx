import React from 'react'
import { FicheExercice, Rocket, Youtube } from '../../assets'
import { colors } from '../colors'
import RoundButton from './RoundButton'

const ICON_SIZE = 20

const Aside: React.FC = () => {
  return (
    <aside className="px-4">
      <RoundButton
        label="Fiche Exercices"
        id="FicheExerciceSection"
        bgColor="bg-tertiary-light"
        Icon={() => <FicheExercice color={colors.tertiary} size={ICON_SIZE} />}
      />
      <RoundButton
        label="Jeux"
        id="FicheExerciceSection"
        bgColor="bg-primary-light"
        Icon={() => <Rocket color={colors.primary} size={ICON_SIZE} />}
      />
      <RoundButton
        label="Vidéos"
        link="https://www.youtube.com/channel/UCYFLgaAWqetra1x03v7XacQ/featured"
        bgColor="bg-secondary-very-light"
        Icon={() => (
          <Youtube color={colors['secondary-dark']} size={ICON_SIZE} />
        )}
      />
      {/* <Instagram color={colors['primary-dark']} size={50} />
      <Facebook color={colors['primary-dark']} size={50} />
      <Youtube color={colors['primary-dark']} size={50} /> */}
    </aside>
  )
}

export default Aside

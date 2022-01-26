import React from 'react'
import {
  Book,
  Chat,
  Eye,
  FicheExercice,
  Headphone,
  Notes,
  OpenBook,
  Rocket,
  SearchFile,
  Youtube,
} from '../assets'
import { colors } from './colors'
import { ICON_SIZE } from './constants'
import ScaleOnHoverWrapper from './shared/ScaleOnHoverWrapper'
import { ActivityType } from './types'

export const NON_BREAKING_SPACE = `\u00A0`

export function getActivityTypeLabel(text: ActivityType): string {
  switch (text) {
    case ActivityType.COMPREHENSION_ECRITE:
      return `Comp.${NON_BREAKING_SPACE}Écrite`
    case ActivityType.COMPREHENSION_ORALE:
      return `Comp.${NON_BREAKING_SPACE}Orale`
    case ActivityType.FICHE_EXERCICE:
      return `Fiche${NON_BREAKING_SPACE}Exercice`
    case ActivityType.ORTHOGRAPHE:
      return 'Orthographe'
    case ActivityType.PRODUCTION_ECRITE:
      return `Prod.${NON_BREAKING_SPACE}Écrite`
    case ActivityType.PRODUCTION_ORALE:
      return `Prod.${NON_BREAKING_SPACE}Orale`
    case ActivityType.VOCABULAIRE:
      return `Vocabulaire`

    default:
      throw new Error('activity type not found')
  }
}
export function getColorsAndLogoFromLabel(
  text: ActivityType,
): {
  backgroundColor: string
  logo: JSX.Element
} {
  switch (text) {
    case ActivityType.COMPREHENSION_ECRITE:
      return {
        backgroundColor: 'bg-tertiary-light',
        logo: (
          <ScaleOnHoverWrapper>
            <Eye color={colors.tertiary} size={ICON_SIZE} />
          </ScaleOnHoverWrapper>
        ),
      }
    case ActivityType.COMPREHENSION_ORALE:
      return {
        backgroundColor: 'bg-primary-light',
        logo: (
          <ScaleOnHoverWrapper>
            <Headphone color={colors.primary} size={ICON_SIZE} />
          </ScaleOnHoverWrapper>
        ),
      }
    case ActivityType.FICHE_EXERCICE:
      return {
        backgroundColor: 'bg-secondary-very-light',
        logo: (
          <ScaleOnHoverWrapper>
            <Notes color={colors['secondary-dark']} size={ICON_SIZE} />
          </ScaleOnHoverWrapper>
        ),
      }
    case ActivityType.ORTHOGRAPHE:
      return {
        backgroundColor: 'bg-primary-light',
        logo: (
          <ScaleOnHoverWrapper>
            <SearchFile color={colors['secondary-dark']} size={ICON_SIZE} />
          </ScaleOnHoverWrapper>
        ),
      }
    case ActivityType.PRODUCTION_ECRITE:
      return {
        backgroundColor: 'bg-tertiary-light',
        logo: (
          <ScaleOnHoverWrapper>
            <OpenBook color={colors.primary} size={ICON_SIZE} />
          </ScaleOnHoverWrapper>
        ),
      }
    case ActivityType.PRODUCTION_ORALE:
      return {
        backgroundColor: 'bg-secondary-light',
        logo: (
          <ScaleOnHoverWrapper>
            <Chat color={colors.white} size={ICON_SIZE} />
          </ScaleOnHoverWrapper>
        ),
      }
    case ActivityType.VOCABULAIRE:
      return {
        backgroundColor: 'bg-secondary-very-light',
        logo: (
          <ScaleOnHoverWrapper>
            <Book color={colors.primary} size={ICON_SIZE} />
          </ScaleOnHoverWrapper>
        ),
      }

    default:
      throw new Error('activity type not found')
  }
}

import React from 'react'
import {
  Book,
  Chat,
  Eye,
  Headphone,
  Notes,
  OpenBook,
  SearchFile,
} from '../assets'
import { colors } from './colors'
import { ICON_SIZE } from './constants'
import ScaleOnHoverWrapper from './shared/ScaleOnHoverWrapper'
import { ActivityType, ACTIVITY_TYPE, LEVELS, Level } from './types'

export const NON_BREAKING_SPACE = `\u00A0`

export function removeNodeFieldFromData<T>(data: { node: T }[]): T[] {
  return Object.values(data).map((node) => node.node)
}

export function getActivityTypeLabel(
  text: ActivityType,
  shouldDisplayFull?: boolean,
): string {
  switch (text) {
    case ActivityType.COMPREHENSION_ECRITE:
      return shouldDisplayFull
        ? `Compréhension Écrite`
        : `Comp.${NON_BREAKING_SPACE}Écrite`
    case ActivityType.COMPREHENSION_ORALE:
      return shouldDisplayFull
        ? `Compréhension Orale`
        : `Comp.${NON_BREAKING_SPACE}Orale`
    case ActivityType.FICHE_EXERCICE:
      return `Fiche${NON_BREAKING_SPACE}Exercice`
    case ActivityType.ORTHOGRAPHE:
      return 'Orthographe'
    case ActivityType.PRODUCTION_ECRITE:
      return shouldDisplayFull
        ? `Production Écrite`
        : `Prod.${NON_BREAKING_SPACE}Écrite`
    case ActivityType.PRODUCTION_ORALE:
      return shouldDisplayFull
        ? `Production Orale`
        : `Prod.${NON_BREAKING_SPACE}Orale`
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

export function includesALevel(uri: string): boolean {
  return (
    LEVELS.find((lvl) => {
      return uri.includes(lvl.toLocaleLowerCase())
    })?.length !== undefined
  )
}

export function includesAnActivityType(uri: string): boolean {
  return (
    ACTIVITY_TYPE.find((act) => {
      return uri.includes(act.toLocaleLowerCase())
    })?.length !== undefined
  )
}

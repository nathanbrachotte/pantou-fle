import React from 'react'
import { PageProps } from 'gatsby'
import { Image, Text, Flex, Box, Heading } from 'rebass/styled-components'

import RehypeReact from 'rehype-react'
import type { FicheExercice as FicheExerciceType } from '../types'
import { options, richText } from '../components/RichText'

const FicheExercice: React.FC<PageProps<FicheExerciceType>> = ({
  pageContext,
}) => {
  const dateTimeFormat = new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  const createdAt = new Date('2020-10-13T15:51:52.796Z')
  const createdAt2 = dateTimeFormat.format(createdAt)

  return <span>{richText(pageContext)}</span>
}

export default FicheExercice

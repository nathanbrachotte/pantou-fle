import React from 'react'
import { PageProps } from 'gatsby'

import type { FicheExercice as FicheExerciceType } from '../types'
import { richText } from '../components/RichText'
import PDF from '../components/PDF'
import Root from '../components/Root'
import BackButton from '../shared/BackButton'
import Heading1 from '../shared/Heading1'
import ItemHeader from '../shared/ItemHeader'

const FicheExercice: React.FC<PageProps<FicheExerciceType>> = ({
  pageContext,
  ...rest
}) => {
  console.log({ pageContext, rest })
  return (
    <Root uri={rest.uri}>
      <ItemHeader title={`Fiche Exercice - ${pageContext.title}`} />
      <PDF title={pageContext.title} url={pageContext.pdf.file.url} />
      <span>{richText(pageContext)}</span>
    </Root>
  )
}

export default FicheExercice

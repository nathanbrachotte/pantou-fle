import React from 'react'
import { PageProps } from 'gatsby'

import type { FicheExercice as FicheExerciceType } from '../types'
import { richText } from '../components/RichText'
import PDF from '../components/PDF'
import Root from '../components/Root'
import ItemHeader from '../shared/ItemHeader'

const FicheExercice: React.FC<PageProps<FicheExerciceType>> = ({
  pageContext,
  ...rest
}) => {
  const data = pageContext as FicheExerciceType

  console.log({ data, rest })

  return (
    <Root uri={rest.uri}>
      <ItemHeader title={`Fiche Exercice - ${data.title}`} />
      <div className="z-10 mb-4 md:px-12">
        <div className="mb-2">
          <PDF title={data.title} url={data.pdf.file.url} />
        </div>
        <span>{richText(data)}</span>
      </div>
    </Root>
  )
}

export default FicheExercice

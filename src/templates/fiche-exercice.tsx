import React from 'react'
import { PageProps } from 'gatsby'

import { DownloadIcon } from '@heroicons/react/outline'
import type { FicheExercice as FicheExerciceType } from '../types'
import { richText } from '../components/RichText'
import PDF from '../components/PDF'
import Root from '../components/Root'

const FicheExercice: React.FC<PageProps<FicheExerciceType>> = ({
  pageContext,
  ...rest
}) => {
  console.log({ pageContext, rest })
  return (
    <Root uri={rest.uri}>
      <PDF title={pageContext.title} url={pageContext.pdf.file.url} />
      <a
        href={pageContext.pdf.file.url}
        target="_blank"
        rel="noreferrer"
        className="bg-tertiary">
        <DownloadIcon height={20} className="bg-slate-600 rounded-full" />
      </a>
      <span>{richText(pageContext)}</span>
    </Root>
  )
}

export default FicheExercice

import React from 'react'
import { PageProps } from 'gatsby'
import { Image, Text, Flex, Box, Heading } from 'rebass/styled-components'

import RehypeReact from 'rehype-react'
import { DownloadIcon } from '@heroicons/react/outline'
import type { FicheExercice as FicheExerciceType } from '../types'
import { options, richText } from '../components/RichText'
import PDF from '../components/PDF'
import Root from '../components/Root'
import { colors } from '../colors'

const FicheExercice: React.FC<PageProps<FicheExerciceType>> = ({
  pageContext,

  ...rest
}) => {
  console.log({ pageContext, rest })
  return (
    <Root uri={rest.uri}>
      <div className="">
        <PDF title={pageContext.title} url={pageContext.pdf.file.url} />
      </div>
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

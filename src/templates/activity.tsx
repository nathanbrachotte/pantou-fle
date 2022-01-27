import React from 'react'
import { PageProps } from 'gatsby'

import type { Activity as ActivityType } from '../types'
import { richText } from '../components/RichText'
import PDF from '../components/PDF'
import Root from '../components/Root'
import ItemHeader from '../shared/ItemHeader'
import ActivityTypeHeader from '../shared/ActivityTypeHeader'

const FicheExercice: React.FC<PageProps<ActivityType>> = ({
  pageContext,
  ...rest
}) => {
  const data = pageContext as ActivityType

  // console.log({ data, rest })

  return (
    <Root uri={rest.uri}>
      <ItemHeader title={`Activités - ${data.title}`} />
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

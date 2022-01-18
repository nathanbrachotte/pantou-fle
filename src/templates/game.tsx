import React from 'react'
import { PageProps, navigate } from 'gatsby'

import { ArrowLeftIcon } from '@heroicons/react/outline'
import type { Game as GameType } from '../types'
import { options, richText } from '../components/RichText'
import Root from '../components/Root'
import Game from '../components/Game'
import Heading1 from '../shared/Heading1'
import BackButton from '../shared/BackButton'
import ItemHeader from '../shared/ItemHeader'

const GameTemplate: React.FC<PageProps<GameType>> = ({
  pageContext,
  ...rest
}) => {
  // console.log({ pageContext, rest })

  return (
    <Root uri={rest.uri}>
      <ItemHeader title={`Jeu - ${pageContext.title}`} />
      <div className="z-10 mb-4 md:px-12">
        <div className="mb-2">
          <Game link={pageContext.link} />
        </div>

        <span>{richText(pageContext)}</span>
      </div>
    </Root>
  )
}

export default GameTemplate

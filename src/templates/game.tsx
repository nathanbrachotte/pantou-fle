import React from 'react'
import { PageProps } from 'gatsby'

import type { Game as GameType } from '../types'
import { richText } from '../components/RichText'
import Root from '../components/Root'
import Game from '../components/Game'
import ItemHeader from '../shared/ItemHeader'

const GameTemplate: React.FC<PageProps<GameType>> = ({
  pageContext,
  ...rest
}) => {
  const data = pageContext as GameType
  // console.log({ pageContext, rest })

  return (
    <Root uri={rest.uri}>
      <ItemHeader title={`Jeu - ${data.title}`} />
      <div className="z-10 mb-4 md:px-12">
        <div className="mb-2">
          <Game link={data.link} />
        </div>

        <span>{richText(data)}</span>
      </div>
    </Root>
  )
}

export default GameTemplate

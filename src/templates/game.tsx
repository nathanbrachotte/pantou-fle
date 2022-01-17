import React from 'react'
import { PageProps, navigate } from 'gatsby'
import { Image, Text, Flex, Box, Heading } from 'rebass/styled-components'

import RehypeReact from 'rehype-react'

import { ArrowLeftIcon } from '@heroicons/react/outline'
import type { Game as GameType } from '../types'
import { options, richText } from '../components/RichText'
import Root from '../components/Root'
import Game from '../components/Game'
import Heading1 from '../shared/Heading1'

const GameTemplate: React.FC<PageProps<GameType>> = ({
  pageContext,
  ...rest
}) => {
  // console.log({ pageContext, rest })

  return (
    <Root uri={rest.uri}>
      <button
        type="button"
        className="flex flex-row justify-start items-center pl-4 sm:py-2 md:py-0 "
        onClick={() => navigate(-1)}>
        <ArrowLeftIcon height={30} />
      </button>
      <div className="mx-auto text-center pt-4 py-2">
        <Heading1>Jeu - {pageContext.title}</Heading1>
      </div>
      <div className="px-1 sm:px-6 md:px-12 z-10 pb-10">
        <Game link={pageContext.link} />
      </div>
      {/* <span>{JSON.stringify(pageContext, null, 2)}</span> */}
    </Root>
  )
}

export default GameTemplate

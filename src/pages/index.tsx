import React from 'react'
import { graphql, PageProps, useStaticQuery } from 'gatsby'

import styled from 'styled-components'
import Root from '../components/Root'
import Game from '../components/Game'
import PDF from '../components/PDF'
import Header from '../components/Header'
import { Badge } from '../components/Badge'
import { Article } from '../components/Article'
import KoFiFrame from '../components/KoFiFrame'
import useKoFiButton from '../hooks/useKoFiButton'
import { IndexContenfulResponse } from '../types'
import FicheExerciceSection from '../components/FicheExercice/FicheExerciceSection'
import GamesSection from '../components/Games/GamesSection'

// TODO: DESC and filter to last 4
export const query = graphql`
  query ExerciseSheetQuery {
    allContentfulFicheExercice {
      nodes {
        title
        slug
        pdf {
          id
          file {
            fileName
            url
            contentType
          }
        }
        level {
          title
        }
        createdAt
        description {
          raw
        }
      }
    }
    allContentfulGame {
      nodes {
        title
        link
        level {
          title
        }
        createdAt
        description {
          raw
        }
      }
    }
  }
`

const IndexPage: React.FC<PageProps> = ({ uri }) => {
  useKoFiButton()

  // TODO: https://dev.to/kojikanao/generate-types-from-contentful-49p8
  const staticData = useStaticQuery(query) as IndexContenfulResponse
  console.log({ staticData })
  return (
    <Root uri={uri}>
      {/* <h1 className="text-3xl font-nunito font-light text-secondary-light">
        Hello world!
      </h1>
      <h1 className="text-3xl font-nunito  text-primary">Hello world!</h1>
      <h1 className="text-3xl font-nunito font-bold text-primary">
        Hello world!
      </h1>
      <Badge text="yo" />
      <Badge text="yo" />
      <Badge text="yo" />
      <Badge text="yo" /> */}

      <FicheExerciceSection
        fiches={staticData.allContentfulFicheExercice.nodes}
      />
      {/* <h1 className="text-3xl font-logo font-bold text-primary">
        Hello world!
      </h1> */}
      {/* <Game link="https://view.genial.ly/61b0ac256b7b2f0d4c0e7ed1" /> */}
      {/* <PDF
          title={data.allContentfulFicheExercice.nodes[0].title}
          url={data.allContentfulFicheExercice.nodes[0].pdf.file.url}
        /> */}
      {/* <Landing />
    <About />
    <BlogPosts />
    <Footer /> */}

      {/* <iframe
        width="960"
        height="633.6"
        data-original-width="1050"
        data-original-height="693"
        src="https://www.thinglink.com/card/1531686867668303873"
        type="text/html"
        frameBorder="0"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowFullScreen
        scrolling="no"
      /> */}
      <GamesSection games={staticData.allContentfulGame.nodes} />

      {/* <script async src="//cdn.thinglink.me/jse/responsive.js" /> */}
    </Root>
  )
}

export default IndexPage

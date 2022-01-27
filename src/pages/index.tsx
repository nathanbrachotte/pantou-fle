import React from 'react'
import { graphql, PageProps, useStaticQuery } from 'gatsby'

import Root from '../components/Root'
import { IndexContenfulResponse } from '../types'
import ActivitySection from '../components/Activity/ActivitySection'
import GamesSection from '../components/Games/GamesSection'
import SocialSection from '../components/SocialSection'

export const query = graphql`
  query ExerciseSheetQuery {
    allContentfulActivity {
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
        preview {
          file {
            url
          }
        }
        price {
          paymentType
        }
        priceAmount
        activityType {
          type
        }
        previewDescription
      }
    }
    allContentfulGame {
      nodes {
        title
        slug
        link
        level {
          title
        }
        createdAt
        description {
          raw
        }
        preview {
          file {
            url
          }
        }
      }
    }
  }
`

const IndexPage: React.FC<PageProps> = ({ uri }) => {
  // TODO: https://dev.to/kojikanao/generate-types-from-contentful-49p8
  const staticData = useStaticQuery(query) as IndexContenfulResponse

  console.log({ staticData })
  return (
    <Root uri={uri}>
      <ActivitySection
        fiches={staticData.allContentfulActivity.nodes}
        maxItems={4}
      />
      {/* <SocialSection /> */}
      <GamesSection games={staticData.allContentfulGame.nodes} />
      {/* <script async src="//cdn.thinglink.me/jse/responsive.js" /> */}
    </Root>
  )
}

export default IndexPage

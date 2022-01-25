import React from 'react'
import { StaticQuery, graphql, PageProps } from 'gatsby'

import LevelRoot from '../../shared/LevelRoot'
import { Level } from '../../types'

const A1Page: React.FC<PageProps> = ({ uri }) => {
  return (
    <StaticQuery
      query={graphql`
        query AllA1Query {
          allContentfulActivity(
            filter: { level: { title: { eq: "A1" } } }
            sort: { fields: createdAt, order: DESC }
          ) {
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
            }
          }
          allContentfulGame(
            filter: { level: { title: { eq: "A1" } } }
            sort: { fields: createdAt, order: DESC }
          ) {
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
      `}
      render={(staticData) => {
        return <LevelRoot uri={uri} level={Level.A1} staticData={staticData} />
      }}
    />
  )
}

export default A1Page

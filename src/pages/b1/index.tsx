import React from 'react'
import { StaticQuery, graphql, PageProps } from 'gatsby'

import LevelRoot from '../../shared/LevelRoot'
import { Level } from '../../types'

const B1Page: React.FC<PageProps> = ({ uri }) => {
  return (
    <StaticQuery
      query={graphql`
        query AllB1Query {
          allContentfulActivity(
            filter: { level: { title: { eq: "B1" } } }
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
            filter: { level: { title: { eq: "B1" } } }
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
        return <LevelRoot uri={uri} level={Level.B1} staticData={staticData} />
      }}
    />
  )
}

export default B1Page

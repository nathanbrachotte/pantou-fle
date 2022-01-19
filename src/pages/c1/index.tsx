import React from 'react'
import { StaticQuery, graphql, PageProps } from 'gatsby'

import LevelRoot from '../../shared/LevelRoot'
import { Level } from '../../types'

const C1Page: React.FC<PageProps> = ({ uri }) => {
  return (
    <StaticQuery
      query={graphql`
        query AllC1Query {
          allContentfulFicheExercice(
            filter: { level: { title: { eq: "C1" } } }
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
            }
          }
          allContentfulGame(
            filter: { level: { title: { eq: "C1" } } }
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
        return <LevelRoot uri={uri} level={Level.C1} staticData={staticData} />
      }}
    />
  )
}

export default C1Page

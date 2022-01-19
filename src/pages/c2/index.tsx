import React from 'react'
import { StaticQuery, graphql, PageProps } from 'gatsby'

import LevelRoot from '../../shared/LevelRoot'
import { Level } from '../../types'

const C2Page: React.FC<PageProps> = ({ uri }) => {
  return (
    <StaticQuery
      query={graphql`
        query AllC2Query {
          allContentfulFicheExercice(
            filter: { level: { title: { eq: "C2" } } }
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
            filter: { level: { title: { eq: "C2" } } }
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
        return <LevelRoot uri={uri} level={Level.C2} staticData={staticData} />
      }}
    />
  )
}

export default C2Page

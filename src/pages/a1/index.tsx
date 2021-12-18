import React from 'react'
import { StaticQuery, graphql, navigate } from 'gatsby'

const A1Page: React.FC = () => (
  <StaticQuery
    query={graphql`
      query AllA1Query {
        allContentfulFicheExercice(filter: { level: { title: { eq: "A1" } } }) {
          edges {
            node {
              pdf {
                id
                file {
                  url
                }
              }
              level {
                title
              }
            }
          }
        }
        allContentfulGame(filter: { level: { title: { eq: "A1" } } }) {
          edges {
            node {
              title
              link
              level {
                title
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      console.log('yooo')
      return null
    }}
  />
)

export default A1Page

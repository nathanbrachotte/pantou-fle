import React from 'react'
import { StaticQuery, graphql, PageProps } from 'gatsby'
import Root from '../../components/Root'

const A1Page: React.FC<PageProps> = ({ uri }) => {
  return (
    <Root uri={uri}>
      <StaticQuery
        query={graphql`
          query AllA1Query {
            allContentfulFicheExercice(
              filter: { level: { title: { eq: "A1" } } }
              sort: { fields: createdAt, order: DESC }
            ) {
              edges {
                node {
                  pdf {
                    id
                    file {
                      url
                    }
                    createdAt
                  }
                  level {
                    title
                  }
                }
              }
            }
            allContentfulGame(
              filter: { level: { title: { eq: "A1" } } }
              sort: { fields: createdAt, order: DESC }
            ) {
              edges {
                node {
                  title
                  link
                  level {
                    title
                  }
                  createdAt
                }
              }
            }
          }
        `}
        render={(data) => {
          console.log({ data })
          return <span>yooo A1</span>
        }}
      />
    </Root>
  )
}

export default A1Page

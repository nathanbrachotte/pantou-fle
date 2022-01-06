import React from 'react'
import { StaticQuery, graphql, PageProps } from 'gatsby'
import Root from '../../components/Root'

const A1Page: React.FC<PageProps> = ({ uri }) => {
  return (
    <Root uri={uri}>
      <StaticQuery
        query={graphql`
          query AllC1Query {
            allContentfulFicheExercice(
              filter: { level: { title: { eq: "C1" } } }
            ) {
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
            allContentfulGame(filter: { level: { title: { eq: "C1" } } }) {
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
          console.log({ data })
          return <span>yooo C1</span>
        }}
      />
    </Root>
  )
}

export default A1Page

import React from 'react'
import { StaticQuery, graphql, PageProps } from 'gatsby'
import Root from '../../components/Root'

const A1Page: React.FC<PageProps> = ({ uri }) => {
  return (
    <Root uri={uri}>
      <StaticQuery
        query={graphql`
          query AllA2Query {
            allContentfulFicheExercice(
              filter: { level: { title: { eq: "A2" } } }
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
            allContentfulGame(filter: { level: { title: { eq: "A2" } } }) {
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
          console.log({ data })
          return <span>yooo A2</span>
        }}
      />
    </Root>
  )
}

export default A1Page

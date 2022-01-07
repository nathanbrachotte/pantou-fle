import React from 'react'
import { StaticQuery, graphql, PageProps } from 'gatsby'
import { ArrowLeftIcon } from '@heroicons/react/outline'
import Root from '../../components/Root'
import Heading1 from '../../shared/Heading1'

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
          console.log('yooo')
          console.log({ data })
          return (
            <>
              <ArrowLeftIcon height={20} />
              <Heading1>Tous niveau</Heading1>
            </>
          )
        }}
      />
    </Root>
  )
}

export default A1Page

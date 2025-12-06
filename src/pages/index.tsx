import React from 'react'
import { graphql, PageProps } from 'gatsby'
import Layout from '../components/Layout'
import { ActivitesContent } from '../components/ActivitiesContent'
import { Activity, ActivityType } from '../types'
import { removeNodeFieldFromData, groupActivitiesByLevel } from '../helpers'

interface IndexPageProps {
  allContentfulActivity: {
    edges: {
      node: Activity
    }[]
  }
}

const IndexPage: React.FC<PageProps<IndexPageProps>> = ({ data, uri }) => {
  const arrayData = removeNodeFieldFromData(data.allContentfulActivity.edges)
  const perLevel = groupActivitiesByLevel(arrayData)
  const hasContent = arrayData.length > 0

  return (
    <Layout uri={uri} enableAds={hasContent}>
      <div className="relative max-w-full px-2 pt-2">
        <ActivitesContent
          arrayData={arrayData}
          activity={ActivityType.TOUTE_ACTIVITE}
          uri={uri}
          perLevel={perLevel}
        />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query IndexPageQuery {
    allContentfulActivity(sort: { fields: createdAt, order: DESC }) {
      edges {
        node {
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
            references {
              ... on ContentfulReference {
                contentful_id
              }
              ... on ContentfulAsset {
                id
                createdAt
                file {
                  url
                  fileName
                  contentType
                  details {
                    size
                    image {
                      width
                      height
                    }
                  }
                }
              }
            }
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
    }
  }
`

export default IndexPage

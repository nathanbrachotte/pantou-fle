/*
  Code in the file gatsby-node.js is run once in the process of building your site. 
  You can use its APIs to create pages dynamically, add data into GraphQL, or respond to events during the build lifecycle. 
*/

const path = require('path')

// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`)
}

const LEVELS = ['tous-niveaux', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2']
const ACTIVITY_TYPE = [
  'toute-activite',
  'production-ecrite',
  'production-orale',
  'orthographe',
  'vocabulaire',
  'comprehension-orale',
  'comprehension-ecrite',
  'fiche-exercice',
  'grammaire',
  'chanson',
]

// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions
  const activityTemplate = path.resolve(`src/templates/activity.tsx`)
  const allActivitiesTemplate = path.resolve(`src/templates/all-activities.tsx`)
  // const levelTemplate = path.resolve(`src/templates/level.tsx`)

  createRedirect({
    fromPath: `/`,
    toPath: `/${LEVELS[0]}/${ACTIVITY_TYPE[0]}`,
    isPermanent: true,
    redirectInBrowser: true,
  })

  const result = await graphql(`
    query AllElementsQuery {
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
      allContentfulGame {
        edges {
          node {
            title
            link
            level {
              title
            }
            createdAt
            slug
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
    }
  `)

  result.data.allContentfulActivity.edges.forEach((edge) => {
    createPage({
      path: `/${edge.node.slug}`,
      component: activityTemplate,
      context: edge.node,
    })
  })

  LEVELS.forEach((level) => {
    const filteredByLevelActivities = result.data.allContentfulActivity.edges.filter(
      (edge) => {
        // Keep all activities if level is "tous-niveaux"
        if (level === LEVELS[0]) {
          return true
        }

        // Otherwise, filter by level
        const currentLevel = edge.node.level.title
        return currentLevel === level
      },
    )

    // const filteredByLevelGames = result.data.allContentfulGame.edges.filter(
    //   (edge) => {
    //     if (level === LEVELS[0]) {
    //       return true
    //     }

    //     return edge.node.level.title === level
    //   },
    // )

    // Create a level page with uri `/:level/toute-activite`
    // createPage({
    //   path: `/${level.toLocaleLowerCase()}/${ACTIVITY_TYPE[0]}`,
    //   component: levelTemplate,
    //   context: {
    //     activities: filteredByLevelActivities,
    //     games: filteredByLevelGames,
    //   },
    // })

    // 1: Filtering per activity
    ACTIVITY_TYPE.forEach((activity) => {
      const filteredForActivityTypeActivities = filteredByLevelActivities.filter(
        (edge) => {
          if (activity === ACTIVITY_TYPE[0]) {
            return true
          }

          return (
            edge.node.activityType && edge.node.activityType.type === activity
          )
        },
      )

      createPage({
        path: `/${level.toLocaleLowerCase()}/${activity}`,
        component: allActivitiesTemplate,
        context: {
          data: filteredForActivityTypeActivities,
          activity,
        },
      })
    })
  })
}

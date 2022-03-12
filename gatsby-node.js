/*
  Code in the file gatsby-node.js is run once in the process of building your site. 
  You can use its APIs to create pages dynamically, add data into GraphQL, or respond to events during the build lifecycle. 
*/

const path = require('path')

// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`)
}

// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const activityTemplate = path.resolve(`src/templates/activity.tsx`)
  const allActivitiesTemplate = path.resolve(`src/templates/all-activities.tsx`)
  const gameTemplate = path.resolve(`src/templates/game.tsx`)
  const levelTemplate = path.resolve(`src/templates/level.tsx`)

  const LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']

  const ACTIVITY_TYPE = [
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
                id
                contentful_id
                createdAt
                file {
                  contentType
                  details {
                    size
                    image {
                      height
                      width
                    }
                  }
                  fileName
                  url
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

  // console.log({
  //   allContentfulActivity: JSON.stringify(result, null, 2),
  // })
  result.data.allContentfulActivity.edges.forEach((edge) => {
    // console.log({ edge: JSON.stringify(edge, null, 2) })
    createPage({
      path: `/${edge.node.slug}`,
      component: activityTemplate,
      context: edge.node,
    })
  })

  result.data.allContentfulGame.edges.forEach((edge) => {
    // console.log({ edge: JSON.stringify(edge, null, 2) })
    createPage({
      path: `/${edge.node.slug}`,
      component: gameTemplate,
      context: edge.node,
    })
  })

  ACTIVITY_TYPE.forEach((activity) => {
    // console.log({ activity })

    const filteredForActivityTypeActivities = result.data.allContentfulActivity.edges.filter(
      (edge) => {
        // console.log({ edge })
        // console.log({ activityType: edge.node.activityType })
        return (
          edge.node.activityType && edge.node.activityType.type === activity
        )
      },
    )
    createPage({
      path: `/${activity}`,
      component: allActivitiesTemplate,
      context: {
        data: filteredForActivityTypeActivities,
        activity,
      },
    })
  })

  // createPage({
  //   path: `/activities`,
  //   component: allActivitiesTemplate,
  //   context: result.data.allContentfulActivity.edges,
  // })

  // TODO: Is this useful?
  // LEVELS.forEach((level) => {
  //   const filteredResults = result.data.allContentfulActivity.edges.filter(
  //     (edge) => {
  //       console.log(edge.node.level.title)
  //       return edge.node.level.title === level
  //     },
  //   )

  //   createPage({
  //     path: `/${level.toLocaleLowerCase()}/fiches-exercices`,
  //     component: allActivitiesTemplate,
  //     context: filteredResults,
  //   })
  // })

  // createPage({
  //   path: `/games`,
  //   component: allActivitiesTemplate,
  //   context: result.data.allContentfulActivity.edges,
  // })

  // 2: Filtering per level
  LEVELS.forEach((level) => {
    const filteredByLevelActivities = result.data.allContentfulActivity.edges.filter(
      (edge) => {
        return edge.node.level.title === level
      },
    )

    const filteredByLevelGames = result.data.allContentfulGame.edges.filter(
      (edge) => {
        return edge.node.level.title === level
      },
    )

    createPage({
      path: `/${level.toLocaleLowerCase()}`,
      component: levelTemplate,
      context: {
        filteredByLevelActivities,
        filteredByLevelGames,
      },
    })

    // 1: Filtering per activity
    ACTIVITY_TYPE.forEach((activity) => {
      // console.log({ activity })
      const filteredForActivityTypeActivities = filteredByLevelActivities.filter(
        (edge) => {
          // console.log({ edge })
          // console.log({ activityType: edge.node.activityType })
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

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
  const ficheExerciceTemplate = path.resolve(`src/templates/fiche-exercice.tsx`)
  const allficheExercicesTemplate = path.resolve(
    `src/templates/all-fiches-exercices.tsx`,
  )
  const gameTemplate = path.resolve(`src/templates/game.tsx`)

  const result = await graphql(`
    query AllElementsQuery {
      allContentfulFicheExercice {
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
            }
            preview {
              file {
                url
              }
            }
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

  // console.log({ result })
  // console.log({
  //   allContentfulFicheExercice: JSON.stringify(
  //     result.data.allContentfulFicheExercice.edges,
  //     null,
  //     2,
  //   ),
  // })
  result.data.allContentfulFicheExercice.edges.forEach((edge) => {
    // console.log({ edge: JSON.stringify(edge, null, 2) })
    createPage({
      path: `/${edge.node.slug}`,
      component: ficheExerciceTemplate,
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

  const LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']

  createPage({
    path: `/fiches-exercices`,
    component: allficheExercicesTemplate,
    context: result.data.allContentfulFicheExercice.edges,
  })

  LEVELS.forEach((level) => {
    const filteredResults = result.data.allContentfulFicheExercice.edges.filter(
      (edge) => {
        console.log(edge.node.level.title)
        return edge.node.level.title === level
      },
    )

    createPage({
      path: `/${level.toLocaleLowerCase()}/fiches-exercices`,
      component: allficheExercicesTemplate,
      context: filteredResults,
    })
  })

  createPage({
    path: `/games`,
    component: allficheExercicesTemplate,
    context: result.data.allContentfulFicheExercice.edges,
  })
}

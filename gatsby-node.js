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
  const gameTemplate = path.resolve(`src/templates/game.tsx`)

  const result = await graphql(`
    query AllElementsQuery {
      allContentfulFicheExercice {
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
            slug
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
}

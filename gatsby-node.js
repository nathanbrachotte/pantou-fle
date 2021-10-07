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
// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions
//   const ficheExerciceTemplate = path.resolve(`src/templates/blog-post.tsx`)

//   const result = await graphql(`
//     query BlogPostQuery {
//       allContentfulBlogPost {
//         edges {
//           node {
//             id
//             tags
//             title
//             createdAt
//             body {
//               body
//               childMarkdownRemark {
//                 htmlAst
//               }
//             }
//             description {
//               description
//             }
//             heroImage {
//               id
//               file {
//                 fileName
//                 url
//               }
//             }
//             video {
//               video
//             }
//             dev
//             slug
//           }
//         }
//       }
//     }
//   `)

//   result.data.allContentfulBlogPost.edges.forEach((edge) => {
//     createPage({
//       path: `blog/${edge.node.slug}`,
//       component: blogPostTemplate,
//       context: edge.node,
//     })
//   })
// }

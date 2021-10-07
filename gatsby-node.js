const path = require('path')

// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`)
}
// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/blog-post.tsx`)

  const result = await graphql(`
    query BlogPostQuery {
      allContentfulBlogPost {
        edges {
          node {
            id
            tags
            title
            createdAt
            body {
              body
              childMarkdownRemark {
                htmlAst
              }
            }
            description {
              description
            }
            heroImage {
              id
              file {
                fileName
                url
              }
            }
            video {
              video
            }
            dev
            slug
          }
        }
      }
    }
  `)

  result.data.allContentfulBlogPost.edges.forEach((edge) => {
    createPage({
      path: `blog/${edge.node.slug}`,
      component: blogPostTemplate,
      context: edge.node,
    })
  })
}

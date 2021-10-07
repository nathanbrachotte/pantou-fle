import { graphql } from 'gatsby'

export const allBlogPostsQuery = graphql`
  query MyQuery {
    allContentfulBlogPost {
      edges {
        node {
          id
          tags
          title
          createdAt
          childContentfulBlogPostBodyTextNode {
            id
            body
          }
          childContentfulBlogPostDescriptionTextNode {
            id
            description
          }
          body {
            id
            body
          }
          heroImage {
            id
            file {
              fileName
              url
            }
          }
        }
      }
    }
  }
`

import React from 'react'
import { Heading, Text, Flex, Box } from 'rebass/styled-components'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import FontAwesomeIcon from 'react-fontawesome'
import Fade from 'react-reveal/Fade'
import Section from '../../components/Section'
import { CardContainer, Card } from '../../components/Card'
import Background from './Background'
import { ExternalArticle } from '../../Article/Article'

const MEDIUM_CDN = 'https://cdn-images-1.medium.com/max/400'
const MEDIUM_URL = 'https://medium.com'

const EllipsisHeading = styled(Heading)`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-inline-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  border-bottom: ${(props) => props.theme.colors.primary} 5px solid;
`
const parsePost =
  (author: { username: string; name: string }) => (postFromGraphql: any) => {
    const { id, uniqueSlug, createdAt, title, virtuals } = postFromGraphql
    const image =
      virtuals.previewImage.imageId &&
      `${MEDIUM_CDN}/${virtuals.previewImage.imageId}`

    console.log(createdAt)

    return {
      id,
      title,
      time: virtuals.readingTime,
      date: createdAt,
      text: virtuals.subtitle,
      image,
      url: `${MEDIUM_URL}/@${author.username}/${uniqueSlug}`,
      Component: ExternalArticle,
    }
  }

interface MorePostsProps {
  username: string
  name: string
  number?: number
}

const MorePosts: React.FC<MorePostsProps> = ({ username, name, number }) => (
  <Card
    onClick={() => window.open(`${MEDIUM_URL}/${username}/`, '_blank')}
    p={4}>
    <Flex
      flexDirection="column"
      justifyContent="space-between"
      style={{ height: '100%' }}>
      <Box>
        <EllipsisHeading fontSize={5} my={2}>
          Hooray! &nbsp;
          <span role="img" aria-label="party">
            🎉
          </span>
        </EllipsisHeading>
        <Heading lineHeight={1.5}>
          It seems that
          <Text color="secondary">{name}</Text>
          {`has published ${number} more posts!`}
        </Heading>
      </Box>
      <Heading color="primary" mt={5} textAlign="right">
        Go to Medium &nbsp;
        <FontAwesomeIcon name="arrow-right" aria-label="Go to Medium" />
      </Heading>
    </Flex>
  </Card>
)

const edgeToArray = (data: { edges: { node: any }[]; totalCount: number }) => {
  return data.edges.map((edge) => edge.node)
}

// const Writing: React.FC = () => (
//   <StaticQuery
//     query={graphql`
//       query MediumPostQuery {
//         site {
//           siteMetadata {
//             isMediumUserDefined
//           }
//         }
//         allMediumPost(limit: 7, sort: { fields: createdAt, order: DESC }) {
//           totalCount
//           edges {
//             node {
//               id
//               uniqueSlug
//               title
//               createdAt(formatString: "MMM YYYY")
//               virtuals {
//                 subtitle
//                 readingTime
//                 previewImage {
//                   imageId
//                 }
//               }
//             }
//           }
//         }
//         author: mediumUser {
//           username
//           name
//         }
//       }
//     `}
//     render={({ allMediumPost, site, author }) => {
//       const posts = edgeToArray(allMediumPost).map(parsePost(author))
//       const diffAmountArticles = allMediumPost.totalCount - posts.length
//       if (diffAmountArticles > 0) {
//         posts.push({
//           ...author,
//           id: 'more-field',
//           number: diffAmountArticles,
//           Component: MorePosts,
//         })
//       }

//       const { isMediumUserDefined } = site.siteMetadata

//       return (
//         isMediumUserDefined && (
//           <Section.Container id="writing" Background={Background}>
//             <Section.Header name="Writing" icon="✍️" label="writing" />
//             <CardContainer>
//               {posts.map(({ Component, ...rest }) => (
//                 <Fade bottom key={rest.id}>
//                   <Component {...rest} key={rest.id} />
//                 </Fade>
//               ))}
//             </CardContainer>
//           </Section.Container>
//         )
//       )
//     }}
//   />
// )

export default Writing = () => null

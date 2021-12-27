import React from 'react'
import { PageProps } from 'gatsby'
import { Image, Text, Flex, Box, Heading } from 'rebass/styled-components'

import RehypeReact from 'rehype-react'
// import Section from '../components/Section'

import Layout from '../components/Root'
// import SimpleHeader from '../components/Header/SimpleHeader'
// import Footer from '../components/Footer/Footer'
// import Spacer from '../shared/Spacer'

function getBlogPostFromContext(pageContext: any) {
  const post: any = {
    id: pageContext?.id,
    body: pageContext?.body?.body,
    bodyAst: pageContext?.body?.childMarkdownRemark?.htmlAst,
    description: pageContext?.description?.description,
    createdAt: pageContext?.createdAt,
    image: pageContext?.heroImage?.file?.url,
    title: pageContext?.title,
    tags: pageContext?.tags,
    video: pageContext?.video?.video,
    showInDevOnly: pageContext?.dev,
    slug: pageContext?.slug,
  }

  return post
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const renderAst = new RehypeReact({
  createElement: React.createElement,
  components: {
    h1: (props: any) => (
      <Heading
        fontSize={[3, 4, 5]}
        mt={[3, 3]}
        mb={[2, 3]}
        color="textDark"
        {...props}
      />
    ),
    h2: (props: any) => (
      <Heading
        fontSize={[2, 3, 4]}
        mt={[3, 3]}
        mb={[2, 3]}
        color="text"
        {...props}
      />
    ),
    p: (props: any) => (
      <Text fontSize={[1, 2, 3]} color="textLight" {...props} />
    ),
    // FIXME: some real styling for code should be added
    code: (props: any) => (
      <Text
        fontSize={[1, 2, 3]}
        color="red"
        // color={['secondaryDark', 'primary', 'textDark']}
        {...props}
      />
    ),
  },
}).Compiler

const BlogPostTemplate: React.FC<PageProps> = ({ pageContext }) => {
  const currentPost = getBlogPostFromContext(pageContext)

  if (!currentPost) {
    return null
  }

  const dateTimeFormat = new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  const createdAt = new Date('2020-10-13T15:51:52.796Z')
  const createdAt2 = dateTimeFormat.format(createdAt)

  // const AssetComponent = currentPost?.video ? (
  //   <>
  //     <VideoBox video={currentPost.video} title={currentPost.title} />
  //     <Spacer height="10px" />
  //   </>
  // ) : (
  //   currentPost?.image && (
  //     <>
  //       <Image alt={currentPost?.title} src={currentPost?.image} />
  //       <Spacer height="10px" />
  //     </>
  //   )
  // )
  return null
  // return (
  //   <Layout>
  //     <SimpleHeader />
  //     <Section.Container
  //       id={currentPost?.title || 'error'}
  //       Background={Background}>
  //       <Flex flexWrap="wrap" justifyContent="center">
  //         <Box width={[0.95, 0.8, 0.7]}>
  //           <Heading fontSize={[5, 6, 7]} color="textDark">
  //             {currentPost?.title}
  //           </Heading>
  //           <Spacer height="30px" />
  //           {AssetComponent}
  //           {currentPost?.tags?.map((text, id) => (
  //             <Badge key={`badge-${text}-${id}`}>{text}</Badge>
  //           ))}
  //           <Spacer height="10px" />
  //           {renderAst(currentPost?.bodyAst)}
  //           <Text style={{ textAlign: 'right' }} color="text">
  //             {createdAt2}
  //           </Text>
  //         </Box>
  //       </Flex>
  //     </Section.Container>
  //     <Footer />
  //   </Layout>
  // )
}

export default BlogPostTemplate

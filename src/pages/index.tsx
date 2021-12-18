import React, { useState } from 'react'
import { Image } from 'rebass'
import { graphql, StaticQuery, navigate } from 'gatsby'

import styled from 'styled-components'
import Layout from '../components/Layout'
import Landing from '../old-components/screens/Landing/Landing'
import About from '../old-components/screens/About'
import Projects from '../old-components/screens/Projects/Projects'
import BlogPosts from '../old-components/screens/BlogPosts/BlogPosts'
import Writing from '../old-components/screens/Writing/Writing'
import Footer from '../components/Footer/Footer'
import { allExerciseSheetQuery } from '../api/queries'
import SEO from '../components/SEO'
import Game from '../components/Game'
import PDF from '../components/PDF'

// export const query = graphql`
//   query ExerciseSheetQuery {
//     allContentfulFicheExercice {
//       nodes {
//         title
//         slug
//         pdf {
//           id
//           file {
//             fileName
//             url
//             contentType
//           }
//         }
//         level {
//           id
//         }
//       }
//     }
//   }
// `

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  background-color: red;
`

const IndexPage: React.FC = ({ data }: any) => {
  return (
    <Layout>
      <Wrapper>
        <SEO />
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        {/* <Header /> */}
        <Game link="https://view.genial.ly/61b0ac256b7b2f0d4c0e7ed1" />
        {/* <PDF
          title={data.allContentfulFicheExercice.nodes[0].title}
          url={data.allContentfulFicheExercice.nodes[0].pdf.file.url}
        /> */}
      </Wrapper>
      {/* <Landing />
    <About />
    <BlogPosts />
    <Footer /> */}
    </Layout>
  )
}

export default IndexPage

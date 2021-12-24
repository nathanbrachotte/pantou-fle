import React, { useState } from 'react'
import { Image } from 'rebass'
import { graphql, StaticQuery, navigate, PageProps } from 'gatsby'

import styled from 'styled-components'
import Root from '../components/Root'
import Landing from '../old-components/screens/Landing/Landing'
import About from '../old-components/screens/About'
import Projects from '../old-components/screens/Projects/Projects'
import BlogPosts from '../old-components/screens/BlogPosts/BlogPosts'
import Writing from '../old-components/screens/Writing/Writing'
import Footer from '../components/Footer/Footer'
import { allExerciseSheetQuery } from '../api/queries'
import Game from '../components/Game'
import PDF from '../components/PDF'
import Header from '../components/Header'

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
  /* background-color: red; */
`

const IndexPage: React.FC<PageProps> = ({ data, uri }) => {
  return (
    <Root uri={uri}>
      <div className="h-screen w-screen bg-red-400">
        <h1 className="text-3xl font-nunito-300 underline text-stone-100">
          Hello world!
        </h1>
        <h1 className="text-3xl font-nunito font-thin underline text-primary">
          Hello world!
        </h1>
        <h1 className="text-3xl font-nunito font-bold underline text-primary">
          Hello world!
        </h1>
        <h1 className="text-3xl font-sans underline text-secondary-primary-dark">
          Hello world!
        </h1>
        <Game link="https://view.genial.ly/61b0ac256b7b2f0d4c0e7ed1" />
        {/* <PDF
          title={data.allContentfulFicheExercice.nodes[0].title}
          url={data.allContentfulFicheExercice.nodes[0].pdf.file.url}
        /> */}
      </div>
      {/* <Landing />
    <About />
    <BlogPosts />
    <Footer /> */}
    </Root>
  )
}

export default IndexPage

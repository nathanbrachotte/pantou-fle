import React, { useState } from 'react'
import { Image } from 'rebass'
import { graphql, StaticQuery } from 'gatsby'

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

export const query = graphql`
  query ExerciseSheetQuery {
    allContentfulFicheExercice {
      nodes {
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
          id
        }
      }
    }
  }
`

const IFrameWrapper = styled.div`
  /* height: 0.7 vh; */
  min-height: 675px;
`
const IFrame = styled.iframe`
  width: 100%;
  min-height: 675px;
`

const IndexPage: React.FC = ({ data }: any) => {
  return (
    <Layout>
      <SEO title="Blog" />
      {/* <Header /> */}
      <IFrameWrapper>
        <IFrame
          title="iframe"
          src="https://view.genial.ly/61b0ac256b7b2f0d4c0e7ed1"
          allowFullScreen={false}
          scrolling="yes"
          frameBorder="0"
        />
      </IFrameWrapper>

      <iframe
        title={data.allContentfulFicheExercice.nodes[0].title}
        src={`${data.allContentfulFicheExercice.nodes[0].pdf.file.url}#toolbar=0`}
        // style={{ pointerEvents: 'none' }}
        width="100%"
        height="1000px"
      />
      {/* <Landing />
    <About />
    <BlogPosts />
    <Footer /> */}
    </Layout>
  )
}

export default IndexPage

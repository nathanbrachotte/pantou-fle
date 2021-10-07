import React from 'react'
import { Image } from 'rebass'
import { graphql, StaticQuery } from 'gatsby'

import Layout from '../Layout'
import Landing from '../old-components/screens/Landing/Landing'
import About from '../old-components/screens/About'
import Projects from '../old-components/screens/Projects/Projects'
import BlogPosts from '../old-components/screens/BlogPosts/BlogPosts'
import Writing from '../old-components/screens/Writing/Writing'
import Header from '../components/Header/Header'
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

const IndexPage: React.FC = ({ data }: any) => {
  console.log({ allExerciseSheetQuery })

  return (
    <Layout>
      <SEO title="Blog" />
      {/* <Header /> */}
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

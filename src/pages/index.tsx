import React from 'react'
import { Image } from 'rebass'
import { graphql, StaticQuery } from 'gatsby'

import Layout from '../Layout'
import Landing from '../screens/Landing/Landing'
import About from '../screens/About'
import Projects from '../screens/Projects/Projects'
import BlogPosts from '../screens/BlogPosts/BlogPosts'
import Writing from '../screens/Writing/Writing'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { allExerciseSheetQuery } from '../api/queries'

const IndexPage: React.FC = () => {
  console.log({ allExerciseSheetQuery })

  return (
    <Layout>
      {/* <Header /> */}
      <StaticQuery
        query={graphql`
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
        `}
        render={(data) => {
          console.log({ data })
          return (
            <iframe
              title={data.allContentfulFicheExercice.nodes[0].title}
              src={`${data.allContentfulFicheExercice.nodes[0].pdf.file.url}#toolbar=0`}
              // style={{ pointerEvents: 'none' }}
              width="100%"
              height="1000px"
            />
          )
        }}
      />

      {/* <Landing />
    <About />
    <BlogPosts />
    <Footer /> */}
    </Layout>
  )
}

export default IndexPage

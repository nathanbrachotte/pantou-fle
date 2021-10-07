import React from 'react'
import Layout from '../Layout'
import Landing from '../screens/Landing/Landing'
import About from '../screens/About'
import Projects from '../screens/Projects/Projects'
import BlogPosts from '../screens/BlogPosts/BlogPosts'
import Writing from '../screens/Writing/Writing'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

const IndexPage: React.FC = () => (
  <Layout>
    <Header />
    <Landing />
    <About />
    <BlogPosts />
    {/* <Projects /> */}
    {/* <Writing /> */}
    <Footer />
  </Layout>
)

export default IndexPage

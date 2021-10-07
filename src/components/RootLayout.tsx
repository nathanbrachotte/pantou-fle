import React from 'react'

import './variables.css'
import './global.css'
import SEO from './seo'
import Navigation from './navigation'
import Footer from './footer'

class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <>
        <SEO />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </>
    )
  }
}

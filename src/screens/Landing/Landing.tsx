import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Section from '../../components/Section'
import CentralInfo from './CentralInfo'
import Background from './Background'
import { Mouse } from '../../shared/Mouse'
import { WebsiteScreen } from '../types'

const LandingPage = () => (
  <Section.Container id="home" Background={Background}>
    {/* <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          contentfulAbout {
            name
            roles
            socialLinks {
              id
              url
              name
              fontAwesomeIcon
            }
          }
          site {
            siteMetadata {
              deterministicBehaviour
            }
          }
        }
      `}
      render={({ contentfulAbout, site }) => {
        const { name, socialLinks, roles } = contentfulAbout
        const { deterministicBehaviour } = site.siteMetadata

        return (
          <>
            <CentralInfo name={name} roles={roles} socialLinks={socialLinks} />
            <Mouse to={WebsiteScreen.about} />
          </>
        )
      }}
    /> */}
  </Section.Container>
)

export default LandingPage

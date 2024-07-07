const tailwind = require('./tailwind.config.js')
require('dotenv').config()

const {
  theme: {
    extend: {
      colors: { primary, background },
    },
  },
} = tailwind

const { ACCESS_TOKEN, SPACE_ID, DETERMINISTIC } = process.env

const plugins = [
  'gatsby-plugin-react-helmet',
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      name: `Pantou-fle - Français Langue Étrangère`,
      short_name: `Pantou-fle`,
      start_url: '/',
      background_color: background,
      theme_color: primary,
      display: 'minimal-ui',
      icon: 'assets/logo_circle.svg',
    },
  },
  'gatsby-plugin-styled-components',
  {
    resolve: 'gatsby-source-contentful',
    options: {
      spaceId: SPACE_ID,
      accessToken: ACCESS_TOKEN,
    },
  },
  'gatsby-transformer-remark',
  'gatsby-plugin-offline',
  'gatsby-plugin-use-dark-mode',
  {
    resolve: 'gatsby-plugin-simple-analytics',
    options: {
      trackPageViews: true,
      events: true,
    },
  },
  'gatsby-plugin-postcss',
  'gatsby-plugin-image',
  {
    resolve: `gatsby-plugin-google-adsense`,
    options: {
      publisherId: `ca-pub-2142870138777008`,
    },
  },
]

module.exports = {
  plugins,
  siteMetadata: {
    // isMediumUserDefined: !!about.mediumUser,
    deterministicBehaviour: !!DETERMINISTIC,
  },
}

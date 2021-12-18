const colors = require('./colors')
// const about = require('./about.json')

require('dotenv').config()

const { ACCESS_TOKEN, SPACE_ID, ANALYTICS_ID, DETERMINISTIC } = process.env

const plugins = [
  'gatsby-plugin-react-helmet',
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      // name: `${about.name} Portfolio`,
      // short_name: `${about.name} Portfolio`,
      start_url: '/',
      background_color: colors.background,
      theme_color: colors.primary,
      display: 'minimal-ui',
      icon: 'media/icon.png',
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
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      // The property ID; the tracking code won't be generated without it
      trackingId: 'G-XGLWBW1Q4C',
      // Defines where to place the tracking script - `true` in the head and `false` in the body
      head: false,
      // Setting this parameter is optional
      anonymize: true,
      // Setting this parameter is also optional
      respectDNT: true,
      // Avoids sending pageview hits from custom paths
      // exclude: ['/preview/**', '/do-not-track/me/too/'],
      // Delays sending pageview hits on route update (in milliseconds)
      pageTransitionDelay: 0,
      // Enables Google Optimize using your container Id
      // optimizeId: 'YOUR_GOOGLE_OPTIMIZE_TRACKING_ID',
      // Enables Google Optimize Experiment ID
      // experimentId: 'YOUR_GOOGLE_EXPERIMENT_ID',
      // Set Variation ID. 0 for original 1,2,3....
      // variationId: 'YOUR_GOOGLE_OPTIMIZE_VARIATION_ID',
      // Defers execution of google analytics script after page load
      defer: false,
      // Any additional optional fields
      // sampleRate: 5,
      // siteSpeedSampleRate: 10,
      // cookieDomain: 'example.com',
      // defaults to false
      enableWebVitalsTracking: true,
    },
  },
  'gatsby-plugin-postcss',
]

module.exports = {
  plugins,
  siteMetadata: {
    // isMediumUserDefined: !!about.mediumUser,
    deterministicBehaviour: !!DETERMINISTIC,
  },
}

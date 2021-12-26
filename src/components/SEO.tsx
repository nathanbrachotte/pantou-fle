import * as React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const SEO: React.FC = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `,
  )
  const description = ''
  const lang = 'fr'
  const meta: string[] = []
  const title = ''
  const image = ''

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title

  React.useEffect(() => {
    const scriptTag = document.createElement('script')
    console.log('yo', scriptTag)
    scriptTag.src = 'https://storage.ko-fi.com/cdn/scripts/overlay-widget.js'
    scriptTag.addEventListener('load', (e) => {
      console.log('KoFi Loaded', e)
      kofiWidgetOverlay.draw('pantou_fle', {
        type: 'floating-chat',
        'floating-chat.donateButton.text': 'Aidez-nous!',
        'floating-chat.donateButton.background-color': '#1C1E52',
        'floating-chat.donateButton.text-color': '#F9FAFF',
      })
    })
    document.body.appendChild(scriptTag)
  }, [])

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      defaultTitle={defaultTitle}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `image`,
          content: image,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: image,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.social?.twitter || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

export default SEO

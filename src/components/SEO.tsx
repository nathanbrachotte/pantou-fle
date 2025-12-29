import * as React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

interface SEOProps {
  title?: string
  description?: string
  lang?: string
  meta?: Array<
    { name: string; content: string } | { property: string; content: string }
  >
  image?: string
  enableAds?: boolean
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  lang = 'fr',
  meta = [],
  image,
  enableAds = true,
}) => {
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

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title
  const siteUrl = site.siteMetadata?.siteUrl
  const defaultImage = `` // Ensure you have a default OG image

  const fullTitle = title ? `${title}` : defaultTitle
  const ogImage = image || defaultImage

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      defaultTitle={defaultTitle}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: fullTitle,
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
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.social?.twitter || ``,
        },
        {
          name: `twitter:title`,
          content: fullTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        ...(image
          ? [
              {
                name: `image`,
                content: image,
              },
              {
                property: `og:image`,
                content: ogImage,
              },
              {
                name: `twitter:image`,
                content: ogImage,
              },
            ]
          : []),
      ].concat(meta)}>
      {enableAds && (
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2142870138777008"
          crossOrigin="anonymous"
          type="text/plain"
        />
      )}
    </Helmet>
  )
}

export default SEO

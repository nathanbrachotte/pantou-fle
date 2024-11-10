import React from 'react'
import { PageProps } from 'gatsby'

import { OverHeaderAdSense } from '../components/Ads/AdSense'
import type { Activity as ActivityType } from '../types'
import { richText } from '../components/RichText'
import PDF from '../components/PDF'
import Layout from '../components/Layout'
import ItemHeader from '../shared/ItemHeader'

// Activity page (showing PDF and rich text)
const activity: React.FC<PageProps<ActivityType>> = ({
  pageContext,
  ...rest
}) => {
  const data = pageContext as ActivityType

  return (
    <Layout
      uri={rest.uri}
      pageData={{
        activity: data.activityType.type,
        level: data.level.title,
      }}>
      <OverHeaderAdSense path={`${rest.uri}-${data.activityType.type}`} />
      <ItemHeader title={`${data.title}`} />
      <div className="z-10 mb-4 md:px-12">
        {data?.pdf?.file?.url && (
          <div className="mb-2">
            <PDF title={data.title} url={data.pdf.file.url} />
          </div>
        )}
        <span>{richText(data)}</span>
      </div>
    </Layout>
  )
}

export default activity

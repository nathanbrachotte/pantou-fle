import React from 'react'

export const OverHeaderAdSense: React.FC<{ path: string }> = ({ path }) => {
  console.log('🚀 ~ displaying ad for path:', path)
  return (
    <ins
      className="adsbygoogle"
      style={{ display: 'block' }}
      data-ad-client="ca-pub-2142870138777008"
      data-ad-slot="5603770416"
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  )
}

export const InBetweenActivitiesAd: React.FC<{ activityId: string }> = ({
  activityId,
}) => {
  return (
    <ins
      className="adsbygoogle"
      style={{ display: 'block' }}
      data-ad-format="fluid"
      data-ad-layout-key="-6z+dr+1e-1m+57"
      data-ad-client="ca-pub-2142870138777008"
      data-ad-slot="7581801144"
    />
  )
}

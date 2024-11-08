import React, { useEffect } from 'react'

export const OverHeaderAdSense: React.FC<{ path: string }> = ({ path }) => {
  useEffect(() => {
    ;(window.adsbygoogle = window.adsbygoogle || []).push({})
  }, [path])
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
  useEffect(() => {
    ;(window.adsbygoogle = window.adsbygoogle || []).push({})
  }, [activityId])
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

export const BottomOfPageAdSense: React.FC<{ path: string }> = ({ path }) => {
  useEffect(() => {
    ;(window.adsbygoogle = window.adsbygoogle || []).push({})
  }, [path])

  return (
    <ins
      className="adsbygoogle"
      style={{ display: 'block' }}
      data-ad-format="autorelaxed"
      data-ad-client="ca-pub-2142870138777008"
      data-ad-slot="8497527064"
    />
  )
}

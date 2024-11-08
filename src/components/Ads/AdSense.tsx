import React, { useEffect, useRef } from 'react'

export const OverHeaderAdSense: React.FC<{ path: string }> = ({ path }) => {
  return null
  // useEffect(() => {
  //   if (typeof window !== 'undefined' && window.adsbygoogle) {
  //     ;(window.adsbygoogle = window.adsbygoogle || []).push({})
  //   }
  // }, [path])
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
  return null
  const isInitialized = useRef(false)

  useEffect(() => {
    try {
      if (
        typeof window !== 'undefined' &&
        window.adsbygoogle &&
        !isInitialized.current
      ) {
        ;(window.adsbygoogle = window.adsbygoogle || []).push({})
        isInitialized.current = true
      }
    } catch (error) {
      console.error('AdSense error:', error)
    }
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
  return null
  const isInitialized = useRef(false)

  useEffect(() => {
    try {
      if (
        typeof window !== 'undefined' &&
        window.adsbygoogle &&
        !isInitialized.current
      ) {
        ;(window.adsbygoogle = window.adsbygoogle || []).push({})
        isInitialized.current = true
      }
    } catch (error) {
      console.error('AdSense error:', error)
    }
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

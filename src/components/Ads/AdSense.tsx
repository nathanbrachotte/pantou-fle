import React from 'react'
import { useAdsense } from '../../hooks/useAdsense'

interface AdProps {
  path?: string
  activityId?: string
}

export const OverWebsiteAdSense: React.FC<AdProps> = () => {
  return null
  // const adProps = useAdsense({
  //   adSlot: '2882619175',
  //   customStyle: {
  //     height: '280px',
  //     backgroundColor: '#f0f0f0',
  //   },
  // })

  // return (
  //   <div className="w-full bg-primary-light">
  //     <ins {...adProps} />
  //   </div>
  // )
}

export const OverHeaderAdSense: React.FC<AdProps> = () => {
  return null
  // const adProps = useAdsense({
  //   adSlot: '5603770416',
  // })

  // return (
  //   <div className="px-4 py-4 sm:px-6 sm:py-6 md:px-8 md:py-8 w-full">
  //     <ins {...adProps} />
  //   </div>
  // )
}

export const InBetweenActivitiesAd: React.FC<AdProps> = () => {
  return null
  // const adProps = useAdsense({
  //   adSlot: '7581801144',
  //   adFormat: 'fluid',
  //   adLayoutKey: '-6z+dr+1e-1m+57',
  // })

  // return <ins {...adProps} />
}

export const BottomOfPageAdSense: React.FC<AdProps> = () => {
  return null
  // const adProps = useAdsense({
  //   adSlot: '8497527064',
  //   isAutoRelaxed: true,
  // })

  // return (
  //   <div className="px-4 py-4 sm:px-6 sm:py-6 md:px-8 md:py-8 w-full">
  //     <ins {...adProps} />
  //   </div>
  // )
}

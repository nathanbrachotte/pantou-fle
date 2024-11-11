import React from 'react'
import { useAdsense } from '../../hooks/useAdsense'

interface AdProps {
  path?: string
  activityId?: string
}

export const OverHeaderAdSense: React.FC<AdProps> = () => {
  const adProps = useAdsense({
    adSlot: '5603770416',
  })

  return <ins {...adProps} />
}

export const InBetweenActivitiesAd: React.FC<AdProps> = () => {
  const adProps = useAdsense({
    adSlot: '7581801144',
    adFormat: 'fluid',
    adLayoutKey: '-6z+dr+1e-1m+57',
  })

  return <ins {...adProps} />
}

export const BottomOfPageAdSense: React.FC<AdProps> = () => {
  const adProps = useAdsense({
    adSlot: '8497527064',
    isAutoRelaxed: true,
  })

  return <ins {...adProps} />
}

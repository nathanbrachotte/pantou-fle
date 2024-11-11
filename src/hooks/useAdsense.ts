import { useEffect, useRef, CSSProperties } from 'react'
import { AD_CLIENT } from '../constants'

interface UseAdsenseProps {
  adSlot: string
  adFormat?: string
  adLayoutKey?: string
  isAutoRelaxed?: boolean
}

interface AdsenseAttributes {
  className: string
  style: CSSProperties
  'data-ad-client': string
  'data-ad-slot': string
  'data-ad-format': string
  'data-ad-layout-key'?: string
  'data-full-width-responsive': string
}

export function useAdsense({
  adSlot,
  adFormat,
  adLayoutKey,
  isAutoRelaxed,
}: UseAdsenseProps): AdsenseAttributes {
  const isInitialized = useRef(false)

  useEffect(() => {
    if (typeof window === 'undefined' || isInitialized.current) return

    try {
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
      isInitialized.current = true
    } catch (error) {
      console.error('AdSense initialization error:', error)
    }
  }, [])

  return {
    className: 'adsbygoogle',
    style: {
      display: 'block',
      textAlign: 'center' as const,
    },
    'data-ad-client': AD_CLIENT,
    'data-ad-slot': adSlot,
    'data-ad-format': adFormat || 'auto',
    ...(adLayoutKey && { 'data-ad-layout-key': adLayoutKey }),
    ...(isAutoRelaxed && { 'data-ad-format': 'autorelaxed' }),
    'data-full-width-responsive': 'true',
  }
}

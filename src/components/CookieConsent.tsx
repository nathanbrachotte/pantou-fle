import React, { useEffect } from 'react'
import CookieConsent, {
  getCookieConsentValue,
  resetCookieConsentValue,
} from 'react-cookie-consent'
import { AD_CLIENT, COOKIE_CONSENT_NAME } from '../constants'

let isAdsenseInitialized = false

function initializeAdsense(personalized: boolean) {
  if (typeof window === 'undefined') return

  // If already initialized, just update the personalization setting
  if (isAdsenseInitialized) {
    if (!personalized) {
      window.adsbygoogle = window.adsbygoogle || []
      window.adsbygoogle.requestNonPersonalizedAds = 1
    }
    return
  }

  // First time initialization
  window.adsbygoogle = window.adsbygoogle || []

  // Set non-personalized ads before loading the script
  if (!personalized) {
    window.adsbygoogle.requestNonPersonalizedAds = 1
  }

  const script = document.createElement('script')
  script.src = `https://pagead2.googlesyndleware.com/pagead/js/adsbygoogle.js?client=${AD_CLIENT}`
  script.async = true
  script.crossOrigin = 'anonymous'

  document.head.appendChild(script)
  isAdsenseInitialized = true
}

export function checkCookieConsent() {
  const consentGiven = getCookieConsentValue(COOKIE_CONSENT_NAME)

  if (typeof window === 'undefined')
    return { isAccepted: false, hasUserChosen: false }

  if (consentGiven === 'true') {
    initializeAdsense(true)
    return { isAccepted: true, hasUserChosen: true }
  }

  // Default to non-personalized ads if no consent or explicitly declined
  initializeAdsense(false)
  return {
    isAccepted: false,
    hasUserChosen: consentGiven === 'false',
  }
}

export function CookieConsentBanner() {
  useEffect(() => {
    // Initialize with non-personalized ads by default
    checkCookieConsent()
  }, [])

  return (
    <CookieConsent
      visible="byCookieValue"
      location="top"
      buttonText="Accepter ❤️"
      declineButtonText="Refuser 🥺"
      cookieName={COOKIE_CONSENT_NAME}
      style={{ background: '#1C1E52', color: '#FFF' }}
      buttonStyle={{
        color: '#1C1E52',
        background: '#FFF',
        fontSize: '14px',
      }}
      declineButtonStyle={{
        color: '#FFF',
        background: '#393A73',
        fontSize: '14px',
      }}
      expires={365}
      overlay
      acceptOnScroll
      enableDeclineButton
      onAccept={() => {
        initializeAdsense(true)
        localStorage.setItem(COOKIE_CONSENT_NAME, 'allow')
      }}
      onDecline={() => {
        initializeAdsense(false)
        localStorage.setItem(COOKIE_CONSENT_NAME, 'deny')
      }}>
      Pantou-fle utilise des cookies.
      <br />
      Pour soutenir notre travail, merci d&apos;accepter les cookies.
      {'\u00A0'}
      <span role="img" aria-label="pray">
        🙏🏻
      </span>
    </CookieConsent>
  )
}

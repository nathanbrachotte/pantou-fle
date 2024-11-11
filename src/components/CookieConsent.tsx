import React, { useEffect } from 'react'
import CookieConsent, {
  getCookieConsentValue,
  resetCookieConsentValue,
} from 'react-cookie-consent'
import { AD_CLIENT, COOKIE_CONSENT_NAME } from '../constants'

function initializeAdsense(personalized: boolean) {
  // Remove existing adsense script if any
  const existingScript = document.querySelector('script[src*="adsbygoogle"]')
  if (existingScript) {
    existingScript.remove()
  }

  const script = document.createElement('script')
  script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${AD_CLIENT}`
  script.async = true
  script.crossOrigin = 'anonymous'

  if (!personalized) {
    ;(window.adsbygoogle = window.adsbygoogle || []).push({
      google_ad_client: AD_CLIENT,
      enable_page_level_ads: true,
      non_personalized_ads: true,
    })
  }

  document.head.appendChild(script)
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
      Pantou-fle utilise des cookies. <br />
      Pour soutenir notre travail, merci d&apos;accepter les cookies.{' '}
      <span role="img" aria-label="pray">
        🙏🏻
      </span>
    </CookieConsent>
  )
}

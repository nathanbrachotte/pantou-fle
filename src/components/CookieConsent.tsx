import React from 'react'
import CookieConsent, {
  getCookieConsentValue,
  resetCookieConsentValue,
} from 'react-cookie-consent'
import { AD_CLIENT, COOKIE_CONSENT_NAME } from '../constants'

function enableAdsense(personalized: boolean) {
  console.log('🚀 ~ enableAdsense ~ personalized:', personalized)
  const script = document.createElement('script')
  script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'
  script.async = true
  script.crossOrigin = 'anonymous'
  script.dataset.adClient = AD_CLIENT

  if (!personalized) {
    script.dataset.nonPersonalizedAds = 'true'
  }
  console.log('🚀 ~ enableAdsense ~ script:', script)

  document.head.appendChild(script)
}

export function checkCookieConsent() {
  console.log('Checking cookie consent...')
  const consentGiven = getCookieConsentValue(COOKIE_CONSENT_NAME)
  console.log('consentGiven:', consentGiven)
  if (consentGiven === 'true') {
    enableAdsense(true)
    return { isAccepted: true, hasUserChosen: true }
  }

  if (consentGiven === 'false') {
    enableAdsense(false)
    return { isAccepted: false, hasUserChosen: true }
  }

  return { isAccepted: false, hasUserChosen: false }
}

function resetConsent() {
  resetCookieConsentValue()
  console.log('Cookie consent has been reset')
  // The cookie consent bar will become visible again
}

// https://www.npmjs.com/package/react-cookie-consent
export function CookieConsentBanner() {
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
      onAccept={(acceptedByScrolling: boolean) => {
        enableAdsense(true)

        localStorage.setItem(COOKIE_CONSENT_NAME, 'allow')
      }}
      onDecline={() => {
        enableAdsense(false)
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

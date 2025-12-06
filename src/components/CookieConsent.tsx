import React from 'react'

// CookieBot now handles all cookie consent via gatsby-ssr.js
// The CookieBot banner and consent management replaces react-cookie-consent
// AdSense script is loaded with data-cookieconsent="marketing" attribute
// and will only be activated after user consents via CookieBot

// This component is kept for backwards compatibility but no longer renders anything
// CookieBot provides its own consent banner
export function CookieConsentBanner() {
  return null
}

// Legacy function kept for backwards compatibility
export function checkCookieConsent() {
  if (typeof window === 'undefined') {
    return { isAccepted: false, hasUserChosen: false }
  }

  // Check CookieBot consent state
  // @ts-ignore - Cookiebot is loaded globally
  const consent = window.Cookiebot?.consent

  return {
    isAccepted: consent?.marketing === true,
    hasUserChosen: consent?.stamp !== undefined && consent?.stamp !== 0,
  }
}

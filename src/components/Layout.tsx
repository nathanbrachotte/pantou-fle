import React, { useEffect } from 'react'
// import useDarkMode from 'use-dark-mode'
import config from 'react-reveal/globals'

// import { ThemeProvider } from 'styled-components'
import { ScrollingProvider } from 'react-scroll-section'
// import { Helmet } from 'react-helmet'

import { ActivityPageData } from '../types'
import Header from './Header'
import SEO from './SEO'
import Aside from './Aside'
import Footer from './Footer'
import useKoFiButton from '../hooks/useKoFiButton'
import { checkCookieConsent, CookieConsentBanner } from './CookieConsent'

// declare global {
//   interface Window {
//     adsbygoogle: any[]
//   }
// }

config({ ssrFadeout: true })

const Layout: React.FC<{
  uri: string
  pageData?: ActivityPageData
}> = ({ children, uri, pageData }) => {
  useKoFiButton()

  useEffect(() => {
    checkCookieConsent()
  }, [])
  // const darkMode = useDarkMode(false, {
  //   storageKey: 'darkMode',
  // })
  // useEffect(() => {
  //   // eslint-disable-next-line @typescript-eslint/no-extra-semi
  //   ;(window.adsbygoogle = window.adsbygoogle || [])?.push({})
  // }, [])

  return (
    <>
      <SEO />
      <CookieConsentBanner />
      <main className="min-h-screen w-full flex flex-col justify-between">
        <ScrollingProvider>
          <Header uri={uri} pageData={pageData} />
          <div className="flex-1 grid gap-x-0 gap-y-0 auto-cols-max grid-cols-1 px-2 lg:px-4 lg:grid-cols-10">
            <div className="col-span-2">
              <Aside uri={uri} pageData={pageData} />
            </div>
            <div className="col-span-8 pb-8">{children}</div>
          </div>
          <Footer />
        </ScrollingProvider>
      </main>
    </>
  )
}

export default Layout

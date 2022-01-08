/* eslint-disable import/extensions */

import React, { useEffect } from 'react'
import useDarkMode from 'use-dark-mode'
import config from 'react-reveal/globals'

import { ThemeProvider } from 'styled-components'
import { ScrollingProvider } from 'react-scroll-section'

import Header from './Header'
import SEO from './SEO'
import Aside from './Aside'
import KoFiFrame from './KoFiFrame'
import Footer from './Footer'

// eslint-disable-next-line import/no-unresolved
// import Helmet from './Helmet'
// import { GlobalStyle } from './shared/GlobalStyles'

config({ ssrFadeout: true })

const loadScript = (src: string) => {
  const tag = document.createElement('script')
  tag.src = src
  tag.defer = true

  document.getElementsByTagName('body')[0].appendChild(tag)
}

const Root: React.FC<{ uri: string }> = ({ children, uri }) => {
  const darkMode = useDarkMode(false, {
    storageKey: 'darkMode',
  })

  useEffect(() => {
    // loadScript('https://use.fontawesome.com/fd58d214b9.js')
  }, [])

  const theme = {
    // ...preset,
    // colors: darkMode.value ? colors.dark : colors.light,
    // fonts: {
    //   body: 'Cabin, Open Sans, sans-serif',
    //   heading: 'inherit',
    //   monospace: 'monospace',
    // },
  }

  return (
    <>
      <SEO />
      <ScrollingProvider>
        <main className="h-screen w-screen flex flex-col justify-between">
          <Header uri={uri} />
          <div className="grid sm:grid-cols-1 gap-x-0 gap-y-0 auto-cols-max md:grid-cols-10 flex-1">
            <div className="col-span-2">
              <Aside />
            </div>
            {/* <ThemeProvider theme={theme}> */}
            {/* <GlobalStyle /> */}
            {/* <ScrollingProvider> */}
            <div className="col-span-8">{children}</div>
            {/* </ScrollingProvider> */}
            {/* </ThemeProvider> */}
          </div>
          {/* <KoFiFrame /> */}
          <Footer />
        </main>
      </ScrollingProvider>
    </>
  )
}

export default Root

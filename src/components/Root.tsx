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
import useKoFiButton from '../hooks/useKoFiButton'

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
  useKoFiButton()

  const darkMode = useDarkMode(false, {
    storageKey: 'darkMode',
  })

  // useEffect(() => {
  // loadScript('https://use.fontawesome.com/fd58d214b9.js')
  // }, [])

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
      <main className="min-h-screen w-full flex flex-col justify-between">
        <ScrollingProvider>
          <Header uri={uri} />
          {/* <ScrollingProvider> */}
          <div className="flex-1 grid gap-x-0 gap-y-0 auto-cols-max grid-cols-1 px-2 lg:px-4 lg:grid-cols-10">
            <div className="col-span-2">
              <Aside uri={uri} />
            </div>
            {/* <ThemeProvider theme={theme}> */}
            {/* <GlobalStyle /> */}
            <div className="col-span-8 pb-8">{children}</div>
            {/* </ThemeProvider> */}
          </div>
          {/* <KoFiFrame /> */}
          <Footer />
          {/* </ScrollingProvider> */}
        </ScrollingProvider>
      </main>
    </>
  )
}

export default Root

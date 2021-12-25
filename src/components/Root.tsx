/* eslint-disable import/extensions */

import React, { useEffect } from 'react'
import useDarkMode from 'use-dark-mode'
import config from 'react-reveal/globals'

import { ThemeProvider } from 'styled-components'
import { ScrollingProvider } from 'react-scroll-section'

import Header from './Header'
import SEO from './SEO'

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
      <main className="bg-background h-screen w-screen">
        <Header uri={uri} />
        {/* <ThemeProvider theme={theme}> */}
        {/* <GlobalStyle /> */}
        {/* <ScrollingProvider> */}
        {children}
        {/* </ScrollingProvider> */}
        {/* </ThemeProvider> */}
      </main>
    </>
  )
}

export default Root

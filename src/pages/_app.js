import React from 'react'
import { BaseProvider } from 'baseui'
import { func, shape } from 'prop-types'
import { Provider as StyletronProvider } from 'styletron-react'

import { NextMovieTheme } from '../components/styles'
import { engine } from '../styletron'

import './_app.css'

function App({ Component, pageProps }) {
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={NextMovieTheme} zIndex={2}>
        <Component {...pageProps} />
      </BaseProvider>
    </StyletronProvider>
  )
}

App.propTypes = {
  Component: func.isRequired,
  pageProps: shape({}).isRequired,
}

export default App

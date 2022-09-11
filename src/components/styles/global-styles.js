import React from 'react'
import { Provider as StyletronProvider } from 'styletron-react'
import { BaseProvider } from 'baseui'
import { node } from 'prop-types'

import { engine } from '../../styletron'

import { NextMovieTheme } from './next-movie-theme'

export const GlobalStyles = (Story) => (
  <StyletronProvider value={engine}>
    <BaseProvider theme={NextMovieTheme}>
      <Story />
    </BaseProvider>
  </StyletronProvider>
)

GlobalStyles.propTypes = {
  children: node.isRequired,
}

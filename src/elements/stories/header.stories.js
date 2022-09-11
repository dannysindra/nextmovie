import React from 'react'
import { KIND } from 'baseui/button'
import Plus from 'baseui/icon/plus'

import { Button } from '../../components'

import { fixtures } from '../../utils'
import { HeaderMovie } from '../header/header-movie'
import { HeaderTv } from '../header/header-tv'

// eslint-disable-next-line react/prop-types
const WatchlistButton = ({ children, ...rest }) => (
  <Button
    startEnhancer={() => <Plus size={24} />}
    kind={KIND.primary}
    {...rest}
  >
    {children}
  </Button>
)

export default {
  title: 'elements/Header',
}

export const movie = () => (
  <HeaderMovie
    data={fixtures.movie}
    controls={<WatchlistButton>Watchlist</WatchlistButton>}
  />
)

export const tv = () => (
  <HeaderTv
    data={fixtures.tv}
    controls={<WatchlistButton>Watchlist</WatchlistButton>}
  />
)

export const loading = () => (
  <HeaderMovie
    data={null}
    loading
    controls={<WatchlistButton>Watchlist</WatchlistButton>}
  />
)

import React from 'react'
import { Block } from 'baseui/block'
import { useRouter } from 'next/router'
import { number } from 'prop-types'

import { InfoButton, AddToWatchlistButton } from '../../elements'
// import { WatchlistButton } from '../watchlist-button'

export const HeroControls = ({ id }) => {
  const router = useRouter()

  const onClickMore = () => {
    router.push(`/movies/${id}`)
  }

  return (
    <>
      <InfoButton onClick={onClickMore}>More Info</InfoButton>
      <Block display="inline" marginRight="scale600" />
      <AddToWatchlistButton>Watchlist</AddToWatchlistButton>
    </>
  )
}

HeroControls.propTypes = {
  id: number.isRequired,
}

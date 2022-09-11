import React from 'react'
import { Block } from 'baseui/block'
// import { withRouter } from 'react-router-dom';

import { InfoButton, AddToWatchlistButton } from '../../elements'
// import { WatchlistButton } from '../watchlist-button'

export const HeroControlsView = () => {
  const onClickMore = () => {
    // history.push(`/movie/${id}`);
  }

  return (
    <>
      <InfoButton onClick={onClickMore}>More Info</InfoButton>
      <Block display="inline" marginRight="scale600" />
      <AddToWatchlistButton>Watchlist</AddToWatchlistButton>
    </>
  )
}

// export const HeroControls = withRouter(HeroControlsView)
export const HeroControls = HeroControlsView

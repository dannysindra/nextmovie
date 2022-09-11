import React from 'react'
import { Block } from 'baseui/block'

import { Content } from '../../components/layout'
// TODO: remove when GQL comes
import { upcomingMovies } from '../../utils/fixtures'

// import {
//     useQueryNowPlayingMovies,
//     useQueryPopularMovies,
//     useQueryUpcomingMovies,
//     useQueryPopularTvs
// } from '../../utils/graphql';

import { Hero } from './hero'

// import {
//     PopularMoviesDeck,
//     NowPlayingMoviesDeck,
//     UpcomingMoviesDeck,
//     PopularTvsDeck
// } from '../decks';

export const Home = () => {
  // const upcomingMovies = useQueryUpcomingMovies();
  // const nowPlayingMovies = useQueryNowPlayingMovies();
  // const popularMovies = useQueryPopularMovies();
  // const popularTvs = useQueryPopularTvs();

  return (
    <Block>
      <Hero data={{ upcomingMovies }} />
      <Content>
        Content coming soon
        {/* <NowPlayingMoviesDeck {...nowPlayingMovies} />
                <Block marginBottom="scale900" />
                <UpcomingMoviesDeck {...upcomingMovies} />
                <Block marginBottom="scale900" />
                <PopularMoviesDeck {...popularMovies} />
                <Block marginBottom="scale900" />
                <PopularTvsDeck {...popularTvs} />
                <Block marginBottom="scale900" /> */}
      </Content>
    </Block>
  )
}

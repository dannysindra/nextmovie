import React from 'react'
import { Block } from 'baseui/block'

import { Content } from '../../components/layout'

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

// TODO: replace with GQL
const upcomingMovies = [
  {
    id: 19995,
    title: 'Avatar',
    releaseDate: 'Dec 18, 2009',
    posterImgUrl: {
      medium: 'https://image.tmdb.org/t/p/w342/jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg',
      larger: 'https://image.tmdb.org/t/p/w780/jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg',
    },
    backdropImgUrl: {
      small: 'https://image.tmdb.org/t/p/w300/Yc9q6QuWrMp9nuDm5R8ExNqbEq.jpg',
      original:
        'https://image.tmdb.org/t/p/original/Yc9q6QuWrMp9nuDm5R8ExNqbEq.jpg',
    },
  },
  {
    id: 717728,
    title: 'Jeepers Creepers: Reborn',
    releaseDate: 'Sep 19, 2022',
    posterImgUrl: {
      medium: 'https://image.tmdb.org/t/p/w342/pyFyhcXx4kNnLbzEY5z5fc3RehQ.jpg',
      larger: 'https://image.tmdb.org/t/p/w780/pyFyhcXx4kNnLbzEY5z5fc3RehQ.jpg',
    },
    backdropImgUrl: {
      small: 'https://image.tmdb.org/t/p/w300/zEMVGHpkxQ1GIgD6rATaYz6a7dk.jpg',
      original:
        'https://image.tmdb.org/t/p/original/zEMVGHpkxQ1GIgD6rATaYz6a7dk.jpg',
    },
  },
  {
    id: 619730,
    title: "Don't Worry Darling",
    releaseDate: 'Sep 23, 2022',
    posterImgUrl: {
      medium: 'https://image.tmdb.org/t/p/w342/3xrZ1vrUaXX5PaEi3WGEDOtbYrJ.jpg',
      larger: 'https://image.tmdb.org/t/p/w780/3xrZ1vrUaXX5PaEi3WGEDOtbYrJ.jpg',
    },
    backdropImgUrl: {
      small: 'https://image.tmdb.org/t/p/w300/4O9kFXsBjlxtgzXWHfgMS9CjhbN.jpg',
      original:
        'https://image.tmdb.org/t/p/original/4O9kFXsBjlxtgzXWHfgMS9CjhbN.jpg',
    },
  },
  {
    id: 633657,
    title: 'The Good House',
    releaseDate: 'Sep 30, 2022',
    posterImgUrl: {
      medium: 'https://image.tmdb.org/t/p/w342/a0tSiNq9Ze4ucWFU6oRPd4OEGJr.jpg',
      larger: 'https://image.tmdb.org/t/p/w780/a0tSiNq9Ze4ucWFU6oRPd4OEGJr.jpg',
    },
    backdropImgUrl: {
      small: 'https://image.tmdb.org/t/p/w300/DU6YTQjoIs6pURh5q5uqIejHZd.jpg',
      original:
        'https://image.tmdb.org/t/p/original/DU6YTQjoIs6pURh5q5uqIejHZd.jpg',
    },
  },
  {
    id: 522526,
    title: 'Mona Lisa and the Blood Moon',
    releaseDate: 'Sep 30, 2022',
    posterImgUrl: {
      medium: 'https://image.tmdb.org/t/p/w342/uhnhK44jencEdzJlS1IQuQ4vbr2.jpg',
      larger: 'https://image.tmdb.org/t/p/w780/uhnhK44jencEdzJlS1IQuQ4vbr2.jpg',
    },
    backdropImgUrl: {
      small: 'https://image.tmdb.org/t/p/w300/hdSMekJvDaMMgW7OaeQXUiyZwtW.jpg',
      original:
        'https://image.tmdb.org/t/p/original/hdSMekJvDaMMgW7OaeQXUiyZwtW.jpg',
    },
  },
  {
    id: 828558,
    title: "God's Creatures",
    releaseDate: 'Sep 30, 2022',
    posterImgUrl: {
      medium: 'https://image.tmdb.org/t/p/w342/4xjkwZ8EwDzZ3dsQRvyW1fntqXT.jpg',
      larger: 'https://image.tmdb.org/t/p/w780/4xjkwZ8EwDzZ3dsQRvyW1fntqXT.jpg',
    },
    backdropImgUrl: {
      small: 'https://image.tmdb.org/t/p/w300/qJ1x7kL9nZDTpQBtGFbe6qgbT4T.jpg',
      original:
        'https://image.tmdb.org/t/p/original/qJ1x7kL9nZDTpQBtGFbe6qgbT4T.jpg',
    },
  },
]

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

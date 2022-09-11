// import { useHistory, useParams } from 'react-router-dom';

// import { useQueryMovieById } from '../../utils/graphql';

import { movie } from '../../utils/fixtures'

export const useMovie = (movieId) => {
  // TODO
  // const history = useHistory()
  // const result = useQueryMovieById({
  //   variables: {
  //     id: parseInt(id),
  //   },
  // })
  const result = {
    data: {
      movie,
    },
  }

  // const navigateTo = (movieId) => {
  //   history.push(`/movie/${movieId}`)
  // }
  const navigateTo = () => {}

  return [result, navigateTo]
}

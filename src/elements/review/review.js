import React from 'react'
import { Block } from 'baseui/block'
import { shape, func, arrayOf } from 'prop-types'

import { ReviewItem } from '../../components'

// Pick first 5 reviews
const LIMIT = 5

export const Review = ({ data, onClickReview }) => {
  if (!data || data.length === 0) {
    return null
  }

  const sliced = data.slice(0, Math.min(LIMIT, data.length))

  return (
    <Block marginTop="scale600">
      {sliced.map((datum, index) => (
        <ReviewItem
          key={datum.id}
          author={datum.author}
          content={datum.content}
          last={index === Math.min(LIMIT, data.length) - 1}
          onClick={(e) => {
            onClickReview(e, datum)
          }}
        />
      ))}
    </Block>
  )
}

Review.propTypes = {
  data: arrayOf(shape({})),
  onClickReview: func.isRequired,
}

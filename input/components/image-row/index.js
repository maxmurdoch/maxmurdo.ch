import PropTypes from 'prop-types'
import {hh, div} from 'react-hyperscript-helpers'
import {css} from 'glamor'
import {compose} from 'recompose'
import R from 'ramda'

import toggleHover from '../toggle-hover'
import screenImage from '../screen-image'
import grid from '../grid'
import cell from '../cell'

const ImageRow = ({images = []}) => {
  const mapWithIndex = R.addIndex(R.map)
  const cells = mapWithIndex((src, index) => {
    return cell(
      {
        small: {column: 1, of: 1},
        medium: {column: 1, of: R.length(images)},
        large: {column: 1, of: R.length(images)},
        justify: 'center',
        bottomGutter: true
      },
      [
        div(
          {
            'data-aos': 'fade-up',
            'data-aos-delay': R.multiply(100, index),
            'data-aos-offset': 100,
            'data-aos-duration': 300,
            'data-aos-anchor-placement': 'top-bottom',
            className: css({width: '100%'})
          },
          [screenImage({src})]
        )
      ]
    )
  }, images)

  return grid(cells)
}

ImageRow.propTypes = {
  images: PropTypes.array.isRequired
}

export default compose(hh, toggleHover)(ImageRow)

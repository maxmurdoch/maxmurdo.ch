import PropTypes from 'prop-types'
import {hh, div} from 'react-hyperscript-helpers'
import {css} from 'glamor'
import {compose} from 'recompose'
import R from 'ramda'

import link from '../link'
import toggleHover from '../toggle-hover'
import screenImage from '../screen-image'
import grid from '../grid'
import cell from '../cell'
import text from '../text'

const slideOutDown = css.keyframes({
  '0%': {
    transform: `translated3d(0, 0, 0)`
  },
  '100%': {
    visibility: `hidden`,
    transform: `translated3d(0, 100%.0, 0)`
  }
})
const viewProjectCell = ({isHovered}) =>
  link(
    {
      style: {
        position: `absolute`,
        top: -10,
        bottom: -10,
        transition: `150ms background-color`,
        width: `100%`,
        height: `100%`,
        opacity: 1,
        zIndex: 3,
        display: isHovered ? `flex` : `none`,
        alignItems: `center`,
        justifyContent: `center`,
        backgroundColor: isHovered
          ? `rgba(255, 255, 255, 0.5)`
          : `rgba(255, 255, 255, 0.0)`
      },
      href: `/maths-builders`
    },
    isHovered
      ? [
          text(
            {
              size: 3,
              'data-aos': `fade-up`,
              className: css({
                animationDuration: `2s`,
                animationName: slideOutDown
              })
            },
            `View project`
          )
        ]
      : null
  )

const ImageRow = ({isHovered, images = [], onMouseEnter, onMouseLeave}) => {
  const mapWithIndex = R.addIndex(R.map)
  const cells = mapWithIndex((src, index) => {
    return cell(
      {
        small: {column: 1, of: 1},
        medium: {column: 1, of: 3},
        large: {column: 1, of: 3},
        justify: `center`
      },
      [
        div(
          {
            'data-aos': `fade-up`,
            'data-aos-delay': R.pipe(R.inc, R.multiply(200))(index),
            'data-aos-offset': 100,
            'data-aos-anchor-placement': `top-bottom`,
            className: css({width: `100%`})
          },
          [screenImage({src})]
        )
      ]
    )
  }, images)

  return div(
    {
      onMouseEnter,
      onMouseLeave,
      className: css({
        flex: `1 1 auto`
      })
    },
    [
      viewProjectCell({isHovered}),
      div(
        {
          className: css({
            width: `100%`,
            transition: `250ms filter, 250ms opacity`,
            filter: isHovered ? `blur(5px)` : 0
          })
        },
        [grid(cells)]
      )
    ]
  )
}

ImageRow.propTypes = {
  isHovered: PropTypes.bool.isRequired,
  images: PropTypes.array.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired
}

export default compose(hh, toggleHover)(ImageRow)

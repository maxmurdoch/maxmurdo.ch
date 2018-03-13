import PropTypes from 'prop-types'
import {hh, div} from 'react-hyperscript-helpers'
import R from 'ramda'
import {css} from 'glamor'

import containerBox from '../site-container-box'
import grid from '../grid'
import cell from '../cell'
import text from '../text'
import space from '../../constants/space'

const ColourPalette = ({colors}) =>
  containerBox([
    grid([
      cell(
        {
          className: css({marginBottom: R.nth(5, space)})
        },
        [text({size: 1}, 'Colour')]
      )
    ]),
    grid(
      {
        mediumWrap: false,
        largeWrap: false
      },
      R.map(
        color =>
          cell(
            {
              small: {column: 1, of: 3},
              medium: {column: 1, of: 6},
              large: {column: 1, of: 6},
              bottomGutter: true
            },
            [
              div({
                className: css({
                  width: '5rem',
                  height: '5rem',
                  backgroundColor: color
                })
              })
            ]
          ),
        colors
      )
    )
  ])

ColourPalette.propTypes = {
  colors: PropTypes.array
}

export default hh(ColourPalette)

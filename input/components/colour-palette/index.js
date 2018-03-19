import PropTypes from 'prop-types'
import {hh, div} from 'react-hyperscript-helpers'
import R from 'ramda'
import {css} from 'glamor'

import container from '../site-container'
import grid from '../grid'
import cell from '../cell'
import text from '../text'
import space from '../../constants/space'
import {large} from '../../constants/media'

const ColourPalette = ({colors}) =>
  container({top: true}, [
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
              medium: {column: 1, of: 3},
              large: {column: 1, of: 6},
              bottomGutter: true
            },
            [
              div({
                className: css({
                  backgroundColor: color,
                  width: '3rem',
                  height: '3rem',
                  [large]: {
                    width: '5rem',
                    height: '5rem'
                  }
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

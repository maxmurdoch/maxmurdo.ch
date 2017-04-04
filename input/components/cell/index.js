import {PropTypes} from 'react'
import {hh, div} from 'react-hyperscript-helpers'
import R from 'ramda'
import {css} from 'glamor'

import media from '../../constants/media'
import validAlign from '../../constants/valid-align'
import validJustify from '../../constants/valid-justify'
import justifyContentMap from '../../constants/justify-content-map'
import alignItemsMap from '../../constants/align-items-map'

import toFixed from '../../helpers/to-fixed'
import {
  smallHalf,
  small as smallGutter,
  mediumHalf,
  medium as mediumGutter,
  largeHalf,
  large as largeGutter
} from '../../constants/gutter'

const Cell = ({
  grow = 0,
  shrink = 1,
  small = {column: 1, of: 1, auto: false, gutter: smallHalf},
  medium = {column: 1, of: 1, auto: false, gutter: mediumHalf},
  large = {column: 1, of: 1, auto: false, gutter: largeHalf},
  alignSelf,
  justify = 'start',
  align = 'start',
  bottomGutter = false,
  children
}) => {
  const percent = (styleShape = {column: 1, of: 1}) => `${R.pipe(R.divide(100), R.multiply(R.prop('column', styleShape)), toFixed(2))(R.prop('of', styleShape))}%`

  const baseClass = css({
    alignSelf: R.prop(alignSelf, alignItemsMap),
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: R.prop(align, alignItemsMap),
    justifyContent: R.prop(justify, justifyContentMap),
    flexGrow: grow,
    flexShrink: shrink,
    height: '100%',
    [R.prop('small', media)]: {
      flexBasis: R.prop('auto', small) ? 'auto' : percent(small),
      paddingRight: smallHalf,
      paddingLeft: smallHalf,
      paddingBottom: bottomGutter ? smallGutter : 0
    },
    [R.prop('medium', media)]: {
      flexBasis: R.prop('auto', medium) ? 'auto' : percent(medium),
      paddingRight: mediumHalf,
      paddingLeft: mediumHalf,
      paddingBottom: bottomGutter ? mediumGutter : 0
    },
    [R.prop('large', media)]: {
      flexBasis: R.prop('auto', large) ? 'auto' : percent(large),
      paddingRight: largeHalf,
      paddingLeft: largeHalf,
      paddingBottom: bottomGutter ? largeGutter : 0
    }
  })

  return div({
    className: baseClass
  }, [children])
}

Cell.propTypes = {
  small: PropTypes.shape({
    column: PropTypes.number,
    of: PropTypes.number
  }),
  medium: PropTypes.shape({
    column: PropTypes.number,
    of: PropTypes.number
  }),
  large: PropTypes.shape({
    column: PropTypes.number,
    of: PropTypes.number
  }),
  alignSelf: PropTypes.oneOf(validAlign),
  align: PropTypes.oneOf(validAlign),
  justify: PropTypes.oneOf(validJustify),
  grow: PropTypes.number,
  shrink: PropTypes.number
}

export default hh(Cell)

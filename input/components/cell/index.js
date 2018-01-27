import {Component} from 'react'
import PropTypes from 'prop-types'
import {hh, div} from 'react-hyperscript-helpers'
import R from 'ramda'
import {css} from 'glamor'

import media from '../../constants/media'
import validAlign from '../../constants/valid-align'
import validJustify from '../../constants/valid-justify'
import justifyContentMap from '../../constants/justify-content-map'
import alignItemsMap from '../../constants/align-items-map'

import toFixed from '../../helpers/to-fixed'
import flexDirection from '../../helpers/flex-direction'
import {
  smallHalf,
  small as smallGutter,
  mediumHalf,
  medium as mediumGutter,
  largeHalf,
  large as largeGutter
} from '../../constants/gutter'

class Cell extends Component {
  render() {
    const {
      grow = 0,
      shrink = 1,
      small = {column: 1, of: 1, auto: false, gutter: smallHalf},
      medium = {column: 1, of: 1, auto: false, gutter: mediumHalf},
      large = {column: 1, of: 1, auto: false, gutter: largeHalf},
      className,
      style,
      alignSelf,
      direction,
      reverse,
      justify = 'start',
      align = 'start',
      topGutter = false,
      rightGutter = true,
      bottomGutter = false,
      leftGutter = true,
      children,
      ...props
    } = this.props
    const percent = (styleShape = {column: 1, of: 1}) =>
      `${R.pipe(
        R.divide(100),
        R.multiply(R.prop('column', styleShape)),
        toFixed(2)
      )(R.prop('of', styleShape))}%`

    const baseClass = css({
      alignSelf: R.prop(alignSelf, alignItemsMap),
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: flexDirection(direction, reverse),
      alignItems: R.prop(align, alignItemsMap),
      justifyContent: R.prop(justify, justifyContentMap),
      flexGrow: grow,
      flexShrink: shrink,
      height: '100%',
      [R.prop('small', media)]: {
        flexBasis: R.prop('auto', small) ? 'auto' : percent(small),
        paddingRight: rightGutter ? smallHalf : 0,
        paddingLeft: leftGutter ? smallHalf : 0,
        paddingBottom: bottomGutter ? smallGutter : 0,
        paddingTop: topGutter ? smallGutter : 0
      },
      [R.prop('medium', media)]: {
        flexBasis: R.prop('auto', medium) ? 'auto' : percent(medium),
        paddingRight: rightGutter ? mediumHalf : 0,
        paddingLeft: leftGutter ? mediumHalf : 0,
        paddingBottom: bottomGutter ? mediumGutter : 0,
        paddingTop: topGutter ? mediumGutter : 0
      },
      [R.prop('large', media)]: {
        flexBasis: R.prop('auto', large) ? 'auto' : percent(large),
        paddingRight: rightGutter ? largeHalf : 0,
        paddingLeft: leftGutter ? largeHalf : 0,
        paddingBottom: bottomGutter ? largeGutter : 0,
        paddingTop: topGutter ? largeGutter : 0
      }
    })

    return div(
      {
        className: css(baseClass, className),
        style,
        ...props
      },
      [children]
    )
  }
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
  direction: PropTypes.oneOf(['row', 'column']),
  reverse: PropTypes.bool,
  grow: PropTypes.number,
  shrink: PropTypes.number,
  className: PropTypes.object,
  style: PropTypes.object,
  children: PropTypes.node.isRequired,
  topGutter: PropTypes.bool,
  rightGutter: PropTypes.bool,
  bottomGutter: PropTypes.bool,
  leftGutter: PropTypes.bool
}

export default hh(Cell)

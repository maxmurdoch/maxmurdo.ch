import {PropTypes} from 'prop-types'
import {hh, h} from 'react-hyperscript-helpers'
import R from 'ramda'
import {css} from 'glamor'

import {small, medium, large} from '../../constants/media'
import {
  size as typeSize,
  lineHeight,
  family as fontFamily
} from '../../constants/typography'
import space from '../../constants/space'
import {black} from '../../constants/colour'

css.global('::selection', {
  backgroundColor: 'blue',
  color: 'white'
})

const Text = ({
  tag = 'p',
  align = 'left',
  size,
  smallSize,
  mediumSize,
  largeSize,
  marginBottom = false,
  family = 'sans',
  weight = 400,
  shade = 1,
  color,
  fontStyle = 'normal',
  className,
  children,
  ...props
}) => {
  const shadeSet = [R.last(black), R.nth(8, black), R.nth(5, black)]

  const baseStyle = css({
    fontFamily: R.prop(family, fontFamily),
    textAlign: align,
    fontWeight: weight,
    color: color ? color : R.nth(R.dec(shade), shadeSet),
    fontStyle,
    lineHeight,
    margin: 0,
    marginBottom: marginBottom ? R.nth(3, space) : 0
  })
  const sizeStyle = css({
    [small]: {fontSize: R.nth(R.defaultTo(size)(smallSize), typeSize)},
    [medium]: {fontSize: R.nth(R.defaultTo(size)(mediumSize), typeSize)},
    [large]: {fontSize: R.nth(R.defaultTo(size)(largeSize), typeSize)}
  })
  const mergedStyle = css(
    baseStyle,
    className,
    R.all(R.isNil, [size, smallSize, mediumSize, largeSize]) ? null : sizeStyle
  )

  return h(tag, {className: mergedStyle, ...props}, [children])
}

Text.propTypes = {
  tag: PropTypes.string,
  className: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  family: PropTypes.oneOf(['sans', 'mono', 'wide', 'serif']),
  weight: PropTypes.number,
  style: PropTypes.object
}

export default hh(Text)

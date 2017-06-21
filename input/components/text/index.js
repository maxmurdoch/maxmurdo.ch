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
import {black} from '../../constants/colour'

css.global(`::selection`, {
  backgroundColor: `blue`,
  color: `white`
})

const Text = ({
  tag = `p`,
  size = 2,
  smallSize,
  mediumSize,
  largeSize,
  family = `sans`,
  weight = 400,
  shade = 1,
  fontStyle = `normal`,
  className,
  style,
  children,
  ...props
}) => {
  const shadeSet = [R.last(black), R.nth(8, black), R.nth(5, black)]

  const cx = css(
    {
      fontFamily: R.prop(family, fontFamily),
      fontWeight: weight,
      color: R.nth(R.dec(shade), shadeSet),
      fontStyle,
      lineHeight,
      margin: 0,
      [small]: {fontSize: R.nth(R.defaultTo(size)(smallSize), typeSize)},
      [medium]: {fontSize: R.nth(R.defaultTo(size)(mediumSize), typeSize)},
      [large]: {fontSize: R.nth(R.defaultTo(size)(largeSize), typeSize)}
    },
    className
  )

  return h(tag, {className: cx, ...props}, [children])
}

Text.propTypes = {
  tag: PropTypes.string,
  className: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  family: PropTypes.oneOf([`sans`, `mono`]),
  weight: PropTypes.number
}

export default hh(Text)

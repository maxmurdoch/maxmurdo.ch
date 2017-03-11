import { PropTypes } from 'react'
import { hh, h } from 'react-hyperscript-helpers'
import R from 'ramda'
import { size as typeSize, lineHeight, family as fontFamily } from '../../constants/typography'
import { black } from '../../constants/colour'
import classnames from 'classnames'
import style from '../../helpers/style'

const Text = ({tag = 'p', size = 3, family = 'sans', weight = 400, className, children}) => {
  const base = style({
    fontFamily: R.prop(family, fontFamily),
    fontWeight: weight,
    color: R.nth(8, black),
    lineHeight,
    fontSize: R.nth(size, typeSize),
    '-webkit-font-smoothing': 'antialiased',
  })

  return h(tag, {
    className: classnames(base, className),
  }, children)
}

Text.propTypes = {
  tag: PropTypes.string,
  className: PropTypes.string,
  family: PropTypes.oneOf(['sans', 'mono']),
  weight: PropTypes.number,
}

export default hh(Text)

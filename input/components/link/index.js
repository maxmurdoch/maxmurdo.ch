import R from 'ramda'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import {hh, h, a} from 'react-hyperscript-helpers'
import {css} from 'glamor'

import {blue} from '../../constants/colour'
import internalCursor from '../../assets/cursor-2-internal.svg'
import externalCursor from '../../assets/cursor-2-external.svg'
import defaultCursor from '../../assets/cursor-2.svg'

const cursorFor = R.cond([
  [R.equals('internal'), R.always(`url(${internalCursor}) 8 8, auto`)],
  [R.equals('external'), R.always(`url(${externalCursor}), auto`)],
  [R.T, R.always(`url(${defaultCursor}), auto`)]
])

const LinkWrapper = ({
  to,
  className,
  onMouseEnter,
  target,
  onMouseLeave,
  children,
  ...props
}) => {
  const linkStyle = css(
    {
      display: 'inline-flex',
      flex: '0 1 auto',
      textDecoration: 'none',
      transition: 'opacity 250ms cubic-bezier(0.2, 1, 0.4, 1)',
      color: blue,
      ':hover': {opacity: 0.6, cursor: cursorFor(target)},
      ':focus': {color: blue, outline: 0},
      ':visited': {textDecoration: 'line-through'}
    },
    className
  )

  const isEmail = R.test(/mailto/, to)

  return R.equals(target, 'external')
    ? a(
        {
          href: to,
          target: isEmail ? '_top' : '_blank',
          className: linkStyle,
          onMouseEnter,
          onMouseLeave,
          ...props
        },
        [children]
      )
    : h(
        Link,
        {
          to,
          onMouseEnter,
          onMouseLeave,
          className: linkStyle,
          ...props
        },
        [children]
      )
}

LinkWrapper.propTypes = {
  target: PropTypes.oneOf(['internal', 'external']),
  onMouseOver: PropTypes.func
}

export default hh(LinkWrapper)

import R from 'ramda'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import {hh, h} from 'react-hyperscript-helpers'
import {css} from 'glamor'
import internalCursor from '../../assets/cursor-2-internal.svg'
import externalCursor from '../../assets/cursor-2-external.svg'
import defaultCursor from '../../assets/cursor-2.svg'

const cursorFor = R.cond([
  [R.equals('internal'), R.always(`url(${internalCursor}) 8 8, auto`)],
  [R.equals('external'), R.always(`url(${externalCursor}), auto`)],
  [R.T, R.always(`url(${defaultCursor}), auto`)]
])

const LinkWrapper = ({
  color = 'inherit',
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
      transition: 'opacity 250ms cubic-bezier(0.2, 1, 0.4, 1)',
      display: 'inline-flex',
      flex: '0 1 auto',
      textDecoration: 'none',
      color,
      ':hover': {
        opacity: 0.6,
        cursor: cursorFor(target)
      },
      ':focus': {backgroundColor: 'blue', outline: 0},
      ':visited': {color}
    },
    className
  )

  return h(
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

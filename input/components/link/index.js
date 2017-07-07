import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import {hh, h} from 'react-hyperscript-helpers'
import {css} from 'glamor'
import R from 'ramda'

const LinkWrapper = ({
  color = 'inherit',
  to,
  className,
  target = 'internal',
  onMouseEnter,
  onMouseLeave,
  children,
  ...props
}) => {
  const linkStyle = css(
    {
      transition: '250ms opacity',
      display: 'inline-flex',
      flex: '0 1 auto',
      textDecoration: 'none',
      color,
      ':hover': {opacity: 0.6},
      ':focus': {backgroundColor: '#E8F5E9', outline: 0},
      ':visited': {color}
    },
    className
  )

  const targetMap = {internal: '_self', external: '_blank'}

  return h(
    Link,
    {
      to,
      onMouseEnter,
      onMouseLeave,
      className: linkStyle,
      target: R.prop(target, targetMap),
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

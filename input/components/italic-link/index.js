import PropTypes from 'prop-types'
import {hh, a} from 'react-hyperscript-helpers'
import {css} from 'glamor'
import R from 'ramda'

const Link = ({
  color = `inherit`,
  href,
  className,
  target = `internal`,
  onMouseEnter,
  onMouseLeave,
  children,
  ...props
}) => {
  const linkStyle = css(
    {
      transition: `300ms all ease-in-out`,
      transform: `skewX(0)`,
      display: `inline-flex`,
      flex: `0 1 auto`,
      textDecoration: `none`,
      color,
      ':hover': {
        transform: `skewX(-8deg)`,
        transformOrigin: `left bottom`
      },
      ':focus': {backgroundColor: `#E8F5E9`, outline: 0},
      ':visited': {color}
    },
    className
  )

  const targetMap = {internal: `_self`, external: `_blank`}

  return a(
    {
      href,
      onMouseEnter,
      onMouseLeave,
      className: linkStyle,
      target: R.prop(target, targetMap),
      ...props
    },
    [children]
  )
}

Link.propTypes = {
  target: PropTypes.oneOf([`internal`, `external`]),
  onMouseOver: PropTypes.func
}

export default hh(Link)

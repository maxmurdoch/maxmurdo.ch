import {PropTypes} from 'prop-types'
import {hh, a} from 'react-hyperscript-helpers'
import {css} from 'glamor'
import R from 'ramda'

const Link = ({
  color = `inherit`,
  href,
  className,
  target = `internal`,
  children
}) => {
  const linkStyle = css(
    {
      textDecoration: `none`,
      transition: `opacity 250ms ease-in-out, font-style 250ms ease-in-out`,
      display: `inline-flex`,
      flex: `0 1 auto`,
      background: `linear-gradient(white, white), linear-gradient(white, white), linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))`,
      backgroundSize: `0.05em 1px, 0.05em 1px, 1px 1px`,
      backgroundPositionY: `0%, 0%, 80%`,
      backgroundPositionX: `0%, 100%, 0%`,
      backgroundRepeat: `no-repeat, no-repeat, repeat-x`,
      textShadow: `0.03em 0 white, -0.03em 0 white, 0 0.03em white, 0 -0.03em white, 0.06em 0 white, -0.06em 0 white, 0.09em 0 white, -0.09em 0 white, 0.12em 0 white, -0.12em 0 white, 0.15em 0 white, -0.15em 0 white`,
      color,
      ':hover': {opacity: 0.6},
      ':focus': {backgroundColor: `#E8F5E9`, outline: 0},
      ':visited': {color}
    },
    className
  )

  const targetMap = {internal: `_self`, external: `_blank`}

  return a(
    {
      href,
      className: linkStyle,
      target: R.prop(target, targetMap)
    },
    [children]
  )
}

Link.propTypes = {
  target: PropTypes.oneOf([`internal`, `external`])
}

export default hh(Link)

import {PropTypes} from 'react'
import {h, hh, a} from 'react-hyperscript-helpers'
import {css} from 'glamor'
import R from 'ramda'

import Arrow from '../../components/arrow'
import {black, blue} from '../../constants/colour'

const Link = ({
  primary = false,
  href,
  className,
  target = 'internal',
  children
}) => {
  const linkStyle = css({
    textDecoration: 'none',
    transition: 'opacity 250ms ease-in-out, font-style 250ms ease-in-out',
    display: 'inline-flex',
    flex: '0 1 auto',
    color: primary ? blue : 'inherit',
    ':hover': {
      opacity: 0.6
    },
    ':focus': {
      backgroundColor: '#E8F5E9',
      outline: 0
    },
    ':visited': {
      color: primary ? blue : R.last(black)
    }
  },
  className)

  const iconEl = h(Arrow, {className: css({paddingLeft: '0.5vmax'}), width: 8, height: 8})

  const targetMap = {
    internal: '_self',
    external: '_blank'
  }

  return a({
    href,
    className: linkStyle,
    target: R.prop(target, targetMap)
  }, [children, R.equals(target, 'external') ? iconEl : null])
}

Link.propTypes = {
  target: PropTypes.oneOf(['internal', 'external'])
}

export default hh(Link)

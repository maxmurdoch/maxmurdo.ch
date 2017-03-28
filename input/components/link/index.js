import {a, hh} from 'react-hyperscript-helpers'
import {css} from 'glamor'
import R from 'ramda'
import {black, blue} from '../../constants/colour'

const Link = ({
  primary = false,
  href,
  className,
  children
}) => {
  const style = css({
    WebkitFontSmoothing: 'antialiased',
    textDecoration: 'none',
    transition: 'opacity 250ms ease-in-out, font-style 250ms ease-in-out',
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
      textDecoration: 'line-through',
      color: primary ? blue : R.last(black)
    }
  },
  className)

  return a({
    href,
    className: style
  }, [children])
}

export default hh(Link)

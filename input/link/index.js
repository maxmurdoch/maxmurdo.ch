import { a, hh } from 'react-hyperscript-helpers'
import R from 'ramda'
import { shade, blue } from '../constants/colour'
import cxs from 'cxs'

const Link = ({
  primary = false,
  href,
  children,
}) => {
  const className = cxs({
    textDecoration: 'none',
    transition: 'opacity 250ms ease-in-out, font-style 250ms ease-in-out',
    color: primary ?  blue : R.last(shade),
    ':hover': {
      opacity: 0.6,
    },
    ':focus': {
      outline: `2px ${R.nth(7, shade)} dashed`,
    },
    ':visited': {
      textDecoration: 'line-through',
      color: primary ?  blue : R.last(shade),
    },
  })

  return a({href, className}, [children])
}

export default hh(Link)

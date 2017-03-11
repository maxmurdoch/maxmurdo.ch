import { a, hh } from 'react-hyperscript-helpers'
import R from 'ramda'
import { black, blue } from '../../constants/colour'
import style from '../../helpers/style'

const Link = ({primary = false, href, children}) => {
  const className = style({
    '-webkit-font-smoothing': 'antialiased',
    textDecoration: 'none',
    transition: 'opacity 250ms ease-in-out, font-style 250ms ease-in-out',
    color: primary ? blue : R.last(black),
    ':hover': {
      opacity: 0.6,
    },
    ':focus': {
      outline: `2px ${R.nth(7, black)} dashed`,
    },
    ':visited': {
      textDecoration: 'line-through',
      color: primary ? blue : R.last(black),
    },
  })

  return a({
    href,
    className,
  }, [children])
}

export default hh(Link)

import { hh, h1 } from 'react-hyperscript-helpers'
import { size, family } from '../../constants/typography'
import { black } from '../../constants/colour'
import link from '../link'
import R from 'ramda'
import style from '../../helpers/style'

const className = style({
  color: R.last(black),
  display: 'flex',
  alignItems: 'center',
  fontFamily: R.prop('sans', family),
  fontSize: R.nth(2, size),
  fontWeight: 400,
  lineHeight: 1,
  margin: 0,
})

const Logo = () => h1({
  className,
}, [link({
  href: '/',
}, 'Murdoch Studio')])

export default hh(Logo)

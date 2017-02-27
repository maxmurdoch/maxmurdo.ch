import { hh, h1 } from 'react-hyperscript-helpers'
import { size, family } from '../constants/typography'
import { shade } from '../constants/colour'
import link from '../link'
import R from 'ramda'
import cxs from 'cxs'

const className = cxs({
  color: R.last(shade),
  display: 'flex',
  alignItems: 'center',
  fontFamily: R.prop('sans', family),
  fontSize: R.nth(2, size),
  fontWeight: 400,
  lineHeight: 1,
})

const Logo = () => h1({className}, [link({ href: '/'}, 'Murdoch Studio')])

export default hh(Logo)

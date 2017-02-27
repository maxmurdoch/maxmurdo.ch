import { hh, p } from 'react-hyperscript-helpers'
import R from 'ramda'
import { size, lineHeight, family } from '../constants/typography'
import { shade } from '../constants/colour'
import cxs from 'cxs'

const className = cxs({
  fontFamily: R.prop('sans', family),
  color: R.nth(8, shade),
  lineHeight,
  fontSize: R.nth(5, size),
})

const Text = ({ children }) => p({className}, children)

export default hh(Text)

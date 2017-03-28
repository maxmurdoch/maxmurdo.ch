import {hh, h1} from 'react-hyperscript-helpers'
import {css} from 'glamor'
import R from 'ramda'

import {size, family} from '../../constants/typography'
import {black} from '../../constants/colour'
import link from '../link'

const className = css({
  color: R.last(black),
  display: 'flex',
  alignSelf: 'stretch',
  alignItems: 'center',
  fontFamily: R.prop('sans', family),
  fontSize: R.nth(2, size),
  fontWeight: 400,
  lineHeight: 1,
  margin: 0
})

const Logo = () => h1({
  className
}, [link({
  href: '/'
}, 'Max Murdoch')])

export default hh(Logo)

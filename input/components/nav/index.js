import { h, hh, ul } from 'react-hyperscript-helpers'
import { v4 } from 'uuid'
import R from 'ramda'

import link from '../../components/link'
import { size, sansSerif } from '../../constants/typography'
import { black } from '../../constants/colour'
import navItem from '../navItem'
import mapIndex from '../../helpers/mapIndex'
import style from '../../helpers/style'

const className = style({
  color: R.last(black),
  display: 'flex',
  alignItems: 'center',
  flexBasis: '50%',
  padding: 0,
  justifyContent: 'space-between',
  listStyle: 'none',
  fontFamily: sansSerif,
  fontSize: R.nth(2, size),
  fontWeight: 400,
  lineHeight: 1,
  margin: 0,
})

const NavList = ({children}) => ul({
  className,
}, mapIndex((child, index) => navItem({
  key: index,
}, [child]), children))

const Nav = () => h(NavList, [
  link({
    key: v4(),
    href: '#work',
  }, ['Work']),
  link({
    key: v4(),
    href: '#about',
  }, ['About']),
  link({
    key: v4(),
    href: '#contact',
  }, ['Contact']),
])

export default hh(Nav)

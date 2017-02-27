import { hh, ul } from 'react-hyperscript-helpers'
import { size, sansSerif } from '../constants/typography'
import R from 'ramda'
import { shade } from '../constants/colour'
import navItem from '../navItem'
import mapIndex from '../helpers/mapIndex'
import cxs from 'cxs'

const className = cxs({
  color: R.last(shade),
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
})

const Nav = ({ children }) => ul({className}, mapIndex((child, index) => navItem({key: index}, [child]), children))

export default hh(Nav)

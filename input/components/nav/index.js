import { hh, ul } from 'react-hyperscript-helpers'
import { size, sansSerif } from '../../constants/typography'
import R from 'ramda'
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

const Nav = ({children}) => ul({
  className,
}, mapIndex((child, index) => navItem({
  key: index,
}, [child]), children))

export default hh(Nav)

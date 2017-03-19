import { hh, li } from 'react-hyperscript-helpers'
import R from 'ramda'
import { family } from '../../constants/typography'
import style from '../../helpers/style'

const className = style({
  fontFamily: R.prop('sans', family),
})

const NavItem = ({ children }) => li({className}, [children])

export default hh(NavItem)

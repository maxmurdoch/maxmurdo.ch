import { hh, li } from 'react-hyperscript-helpers'
import R from 'ramda'
import space from '../../constants/space'
import { family } from '../../constants/typography'
import style from '../../helpers/style'

const className = style({
  padding: R.nth(3, space),
  fontFamily: R.prop('sans', family),
})

const NavItem = ({ children }) => li({className}, [children])

export default hh(NavItem)

import {hh, p} from "react-hyperscript-helpers"
import R from "ramda"
import {css} from "glamor"
import {size, family} from "../../constants/typography"

const className = css({
  fontFamily: R.prop(`mono`, family),
  fontSize: R.nth(5, size),
  lineHeight: 1.4,
  fontWeight: 300
})

const MonoText = ({children}) => p({className}, children)

export default hh(MonoText)

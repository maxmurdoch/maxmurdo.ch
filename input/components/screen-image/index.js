import { hh } from 'react-hyperscript-helpers'
import R from 'ramda'

import { black } from '../../constants/colour'
import style from '../../helpers/style'
import image from '../image'

const className = style({
  boxShadow: `0 10px 30px ${R.nth(1, black)}, 0 0 50px ${R.nth(1, black)}`,
  border: `1px solid ${R.nth(1, black)}`,
  width: `100%`,
  height: `100%`,
})

const ScreenImage = ({ src }) => image({ className, src })

export default hh(ScreenImage)

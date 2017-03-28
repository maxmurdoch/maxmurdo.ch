import {hh, div} from 'react-hyperscript-helpers'
// Import R from 'ramda'

// import { black } from '../../constants/colour'
import {css} from 'glamor'
import image from '../image'

const className = css({
  width: `100%`,
  height: `100%`
})

const imageStyle = css({
  border: `1px solid rgba(0, 0, 0, 0.05)`,
  boxSizing: 'border-box',
  boxShadow: `0 10px 30px rgba(0, 0, 0, 0.03), 0 0 30px 10px rgba(0, 0, 0, 0.03)`,
  width: '100%'
})

const ScreenImage = ({src}) => div({className}, [image({className: imageStyle, src})])

export default hh(ScreenImage)

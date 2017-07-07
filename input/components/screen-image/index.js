import {hh, div} from 'react-hyperscript-helpers'
import {css} from 'glamor'

import image from '../image'

const container = css({
  width: '100%',
  height: '100%'
})

const imageStyle = css({
  boxSizing: 'border-box',
  boxShadow: '0 20px 25px rgba(0, 0, 0, 0.06), 0 0 30px rgba(0, 0, 0, 0.06)',
  width: '100%'
})

const ScreenImage = ({src, className}) =>
  div({className: container}, [
    image({className: [css(imageStyle), className], src})
  ])

export default hh(ScreenImage)

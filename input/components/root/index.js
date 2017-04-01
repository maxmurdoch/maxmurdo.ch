import {h, div} from 'react-hyperscript-helpers'
import {css} from 'glamor'

import home from '../home'

css.global(':root', {
  fontSize: 'calc(12px + 0.4vmax)'
},
)

const className = css({
  minHeight: '100vh',
  height: '100%',
  display: 'flex'
})

const Root = () => div({
  className
}, [h(home)])

export default Root

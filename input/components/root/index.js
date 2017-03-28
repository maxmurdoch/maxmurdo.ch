import {h, div} from 'react-hyperscript-helpers'
import cxs from 'cxs/monolithic'
import {css} from 'glamor'

import home from '../home'

cxs(':root', {
  fontSize: `calc(16px + 0.2vmax)`
})

const className = css({
  minHeight: '100vh',
  height: '100%',
  display: 'flex'
})

const Root = () => div({
  className
}, [h(home)])

export default Root

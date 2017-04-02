import {h, div} from 'react-hyperscript-helpers'
import {css} from 'glamor'

import {small, medium, large} from '../../constants/media'
import home from '../home'

css.insert(`
${small} {
  :root {
    font-size: calc(12px + 0.2vmax);
  }
}

${medium} {
  :root {
    font-size: calc(14px + 0.2vmax);
  }
}

${large} {
  :root {
    font-size: calc(16px + 0.2vmax);
  }
}
`)

css.global(':root', {
  textRendering: 'optimizeLegibility',
  WebkitFontSmoothing: 'antialiased',
  WebkitBackfaceVisibility: 'hidden'
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

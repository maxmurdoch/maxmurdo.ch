import {Component} from 'react'
import {h, div} from 'react-hyperscript-helpers'
import {css} from 'glamor'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import ScrollToTop from '../scroll-to-top'
import {small, medium, large} from '../../constants/media'
import home from '../home'
import work from '../work'
import about from '../about'

css.insert(`
${small} {
  :root {
    font-size: calc(8px + 0.4vmax);
  }
}

${medium} {
  :root {
    font-size: calc(1.3vmax);
  }
}

${large} {
  :root {
    font-size: calc(1vmax);
  }
}
`)

css.global(':root', {
  textRendering: 'optimizeLegibility',
  WebkitFontSmoothing: 'antialiased'
})

class App extends Component {
  render() {
    return h(Router, [
      h(ScrollToTop, [
        div({className: css({width: '100%'})}, [
          h(Route, {exact: true, path: '/', component: home}),
          h(Route, {path: '/info', component: about}),
          h(Route, {path: '/work', component: work})
        ])
      ])
    ])
  }
}

export default App

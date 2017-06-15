import {Component} from 'react'
import {h, div} from 'react-hyperscript-helpers'
import {css} from 'glamor'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import AOS from 'aos'

import ScrollToTop from '../scroll-to-top'
import {small, medium, large} from '../../constants/media'
import home from '../home'
import work from '../work'
import info from '../info'
import mood from '../mood'
import initialiseAnimation from '../../services/initialise-animation'

css.insert(
  `
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
`
)

css.global(`:root`, {
  textRendering: `optimizeLegibility`,
  WebkitFontSmoothing: `antialiased`,
  maxWidth: `100%`,
  overflowX: `hidden`
})

class App extends Component {
  componentDidMount() {
    initialiseAnimation()
  }

  render() {
    return h(Router, [
      h(
        ScrollToTop,
        {
          onChange: () => {
            console.log(`refresh called`)
            return AOS.refresh()
          }
        },
        [
          div({className: css({width: `100%`})}, [
            h(Route, {exact: true, path: `/`, component: home}),
            h(Route, {path: `/info`, component: info}),
            h(Route, {path: `/work`, component: work})
          ])
        ]
      )
    ])
  }
}

export default App

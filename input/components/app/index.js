import {Component} from 'react'
import {h, div} from 'react-hyperscript-helpers'
import {css} from 'glamor'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'

import ScrollToTop from '../scroll-to-top'
import {small, medium, large} from '../../constants/media'
import Home from '../home'
import Info from '../info'
import MathsBuilder from '../../screens/maths-builder'
import initialiseAnimation from '../../services/initialise-animation'
import defaultCursor from '../../assets/cursor.svg'
import linkStyle from '../../constants/link-style'

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

css.global(`*`, {
  boxSizing: `border-box`
})

css.global(`a`, linkStyle)
css.global(`a:-webkit-any-link`, linkStyle)

css.global(`:root`, {
  cursor: `url(${defaultCursor}), default`,
  textRendering: `optimizeLegibility`,
  WebkitFontSmoothing: `antialiased`,
  maxWidth: `100%`
})

const history = createHistory()

class App extends Component {
  componentDidMount() {
    initialiseAnimation()
  }

  render() {
    return h(Router, {history}, [
      h(ScrollToTop, [
        div({className: css({width: `100%`})}, [
          h(Route, {exact: true, path: `/`, component: Home}),
          h(Route, {path: `/info`, component: Info}),
          h(Route, {path: `/maths-builders`, component: MathsBuilder})
        ])
      ])
    ])
  }
}

export default App

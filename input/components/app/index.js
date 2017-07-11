import {Component} from 'react'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import {composeWithDevTools} from 'redux-devtools-extension'

import createHistory from 'history/createBrowserHistory'
import {Route} from 'react-router-dom'
import {ConnectedRouter, routerMiddleware} from 'react-router-redux'

import {h, div} from 'react-hyperscript-helpers'
import {css} from 'glamor'

import reducer from '../../store/reducers'
import ScrollToTop from '../scroll-to-top'
import {small, medium, large} from '../../constants/media'
import Home from '../home'
import MathsBuilder from '../../screens/maths-builder'
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

css.global('*', {
  boxSizing: 'border-box'
})

css.global('a', linkStyle)
css.global('a:-webkit-any-link', linkStyle)

css.global(':root', {
  cursor: `url(${defaultCursor}), default`,
  textRendering: 'optimizeLegibility',
  WebkitFontSmoothing: 'antialiased',
  maxWidth: '100%'
})

const router = routerMiddleware(history)
const store = createStore(reducer, composeWithDevTools(applyMiddleware(router)))
const history = createHistory()

class App extends Component {
  render() {
    return h(Provider, {store}, [
      h(ConnectedRouter, {history}, [
        h(ScrollToTop, [
          div({className: css({width: '100%'})}, [
            h(Route, {exact: true, path: '/', component: Home}),
            h(Route, {
              exact: true,
              path: '/maths-builders',
              component: MathsBuilder
            })
          ])
        ])
      ])
    ])
  }
}

export default App

import {Component} from 'react'
import 'aos/dist/aos.css'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import {composeWithDevTools} from 'redux-devtools-extension'

import createHistory from 'history/createBrowserHistory'
import {Route} from 'react-router-dom'
import {ConnectedRouter, routerMiddleware} from 'react-router-redux'

import {h, div} from 'react-hyperscript-helpers'
import {css} from 'glamor'

import menu from '../../containers/menu'
import menuBlur from '../../containers/menu-blur'
import menuNoScroll from '../../containers/menu-no-scroll'
import navMargin from '../../components/nav-margin'
import initialiseAnimation from '../../services/initialise-animation'
import reducer from '../../store/reducers'
import ScrollToTop from '../scroll-to-top'
import {small, medium, large, xLarge} from '../../constants/media'
import Home from '../home'
import About from '../../screens/about'
import MathsBuilder from '../../screens/maths-builder'
import defaultCursor from '../../assets/cursor-2.svg'
import linkStyle from '../../constants/link-style'

css.insert(
  `
${small} {
  :root {
    font-size: 0.8rem;
  }
}

${medium} {
  :root {
    font-size: 0.9rem;
  }
}

${large} {
  :root {
    font-size: 1rem;
  }
}

${xLarge} {
  :root {
    font-size: 1.2rem;
  }
}
`
)

css.global('*', {boxSizing: 'border-box'})

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
  componentDidMount() {
    window.addEventListener('load', initialiseAnimation)
  }

  render() {
    return h(Provider, {store}, [
      h(ConnectedRouter, {history}, [
        h(ScrollToTop, [
          menuNoScroll([
            menu(),
            menuBlur([
              div({className: css({width: '100%'})}, [
                h(Route, {exact: true, path: '/', component: Home}),
                h(Route, {
                  exact: true,
                  path: '/maths-builders',
                  component: MathsBuilder
                }),
                h(Route, {
                  exact: true,
                  path: '/about',
                  component: About
                })
              ])
            ]),
            navMargin()
          ])
        ])
      ])
    ])
  }
}

export default App

import {h, div} from 'react-hyperscript-helpers'
import {css} from 'glamor'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import {small, medium, large} from '../../constants/media'
import home from '../home'
import about from '../about'
import contact from '../contact'

css.insert(`
${small} {
  :root {
    font-size: calc(10px + 0.4vmax);
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

css.global(':App', {
  textRendering: 'optimizeLegibility',
  WebkitFontSmoothing: 'antialiased',
  WebkitBackfaceVisibility: 'hidden'
})

const className = css({
  minHeight: '100vh',
  height: '100%',
  display: 'flex'
})

const App = () => div({
  className
}, [h(Router, [
  div([
    h(Route, {exact: true, path: '/', component: home}),
    h(Route, {path: '/about', component: about}),
    h(Route, {path: '/contact', component: contact})
  ])
])])

export default App

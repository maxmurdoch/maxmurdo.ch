import {h} from 'react-hyperscript-helpers'
import {render} from 'react-dom'
import App from './components/app'

document.addEventListener('DOMContentLoaded', () =>
  render(h(App), document.getElementById('root'))
)

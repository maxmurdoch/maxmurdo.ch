import { h } from 'react-hyperscript-helpers'
import { render } from 'react-dom'
import Root from './components/root'

render(
  h(Root),
  document.getElementById('root')
)

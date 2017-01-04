import { createElement } from 'react'
import { render } from 'react-dom'
import Root from './root'

render(
  createElement(Root, null),
  document.getElementById('root')
)

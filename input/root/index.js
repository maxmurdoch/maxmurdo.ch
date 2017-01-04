import {
  DOM,
  createElement,
} from 'react'
import About from '../about'
import styles from './root.css'

const Root = () => DOM.div({ className: styles.root }, createElement(About, null))

export default Root

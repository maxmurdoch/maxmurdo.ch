import {
  p,
  hh,
} from 'react-hyperscript-helpers'
import styles from './text.css'

const Text = ({ children }) => p({ className: styles.text }, children)

export default hh(Text)

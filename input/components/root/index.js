import { h, div } from 'react-hyperscript-helpers'
import Home from '../home'
import style from '../../helpers/style'

const className = style({
  minHeight: '100vh',
  height: '100%',
  display: 'flex',
})

const Root = () => div({
  className,
}, [h(Home)])

export default Root

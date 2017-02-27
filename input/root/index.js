import { h, div } from 'react-hyperscript-helpers'
import Home from '../home'
import cxs from 'cxs'

const className = cxs({
  minHeight: '100vh',
  height: '100%',
  padding: '5%',
  display: 'flex',
})

const Root = () => div({ className }, [h(Home)])

export default Root

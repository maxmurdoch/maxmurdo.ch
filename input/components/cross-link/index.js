import {h, hh} from 'react-hyperscript-helpers'
import {css} from 'glamor'
import {Link} from 'react-router-dom'

import cross from '../../assets/cross.svg'

const className = css({
  display: 'block',
  cursor: `url(${cross}), auto !important`,
  textDecoration: 'none'
})

const CrossLink = ({to = '/', onClick, children}) =>
  h(Link, {className, to, onClick}, [children])

export default hh(CrossLink)

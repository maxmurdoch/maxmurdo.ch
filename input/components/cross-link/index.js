import {hh, div} from 'react-hyperscript-helpers'
import {css} from 'glamor'

import cross from '../../assets/cross.svg'

const className = css({
  display: 'block',
  cursor: `url(${cross}), auto !important`,
  textDecoration: 'none'
})

const CrossLink = ({onClick, children, style}) =>
  div({className, onClick, style}, [children])

export default hh(CrossLink)

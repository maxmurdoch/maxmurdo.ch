import {div} from 'react-hyperscript-helpers'
import {css} from 'glamor'
import container from '../site-container'
import grid from '../grid'
import logo from '../logo'
import menuIcon from '../../containers/menu-icon'
import cell from '../cell'

const Header = () => {
  return div({className: css({zIndex: 6})}, [
    container([
      grid({justify: `between`, align: `center`}, [
        cell(
          {
            small: {column: 1, of: 2},
            medium: {column: 1, of: 2},
            large: {column: 1, of: 2},
            align: `center`
          },
          [logo()]
        ),
        cell(
          {
            small: {column: 1, of: 2},
            medium: {column: 1, of: 2},
            large: {column: 1, of: 2},
            topGutter: true,
            bottomGutter: true,
            align: `center`,
            justify: `end`
          },
          [menuIcon()]
        )
      ])
    ])
  ])
}

export default Header

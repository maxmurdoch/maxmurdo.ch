import {div, hh} from 'react-hyperscript-helpers'
import {css} from 'glamor'
import containerBox from '../site-container-box'
import grid from '../grid'
import logo from '../logo'
import menuIcon from '../../containers/menu-icon'
import cell from '../cell'
import {small, medium, large} from '../../constants/media'
import {smallDouble, mediumDouble, largeDouble} from '../../constants/gutter'

const HEADER_HEIGHT = '10vh'
const SMALL_HEADER_HEIGHT = smallDouble
const MEDIUM_HEADER_HEIGHT = mediumDouble
const LARGE_HEADER_HEIGHT = largeDouble

const Header = () => {
  return div(
    {
      'data-aos': 'fade-in',
      'data-aos-delay': 1200,
      className: css({
        zIndex: 2,
        display: 'flex',
        width: '100%',
        position: 'fixed',
        alignItems: 'stretch',
        height: SMALL_HEADER_HEIGHT,
        [small]: {bottom: 0},
        [medium]: {height: MEDIUM_HEADER_HEIGHT},
        [large]: {height: LARGE_HEADER_HEIGHT}
      })
    },
    [
      containerBox([
        grid({justify: 'between', align: 'center'}, [
          cell(
            {
              small: {column: 1, of: 2},
              medium: {column: 1, of: 2},
              large: {column: 1, of: 2},
              align: 'center'
            },
            [logo()]
          ),
          cell(
            {
              small: {column: 1, of: 2},
              medium: {column: 1, of: 2},
              large: {column: 1, of: 2},
              align: 'center',
              justify: 'end'
            },
            [menuIcon()]
          )
        ])
      ])
    ]
  )
}

export {
  HEADER_HEIGHT,
  SMALL_HEADER_HEIGHT,
  MEDIUM_HEADER_HEIGHT,
  LARGE_HEADER_HEIGHT
}

export default hh(Header)

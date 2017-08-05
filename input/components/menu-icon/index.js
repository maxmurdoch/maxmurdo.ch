import R from 'ramda'
import {css} from 'glamor'
import {hh, button, span} from 'react-hyperscript-helpers'

import {black} from '../../constants/colour'
import linkStyle from '../../constants/link-style'
import {medium, large} from '../../constants/media'

const topBar = hh(({isOpen}) =>
  span({
    className: css({
      background: R.last(black),
      position: 'absolute',
      display: 'block',
      transition: 'all 50ms ease-in-out',
      top: 12,
      willChange: 'transform',
      transform: isOpen ? 'rotate(45deg) translateY(0px)' : 'translateY(-6px)',
      width: 24,
      height: isOpen ? 1 : 2,
      [medium]: {
        width: 32,
        top: 15,
        transform: isOpen ? 'rotate(45deg) translateY(0px)' : 'translateY(-8px)'
      },
      [large]: {
        width: 32,
        top: 15,
        transform: isOpen ? 'rotate(45deg) translateY(0px)' : 'translateY(-8px)'
      }
    })
  })
)

const bottomBar = hh(({isOpen}) =>
  span({
    className: css({
      background: R.last(black),
      position: 'absolute',
      display: 'block',
      bottom: 12,
      transition: 'transform 100ms cubic-bezier(0.1, 0.8, 0.1, 1)',
      willChange: 'transform',
      transform: isOpen ? 'rotate(-45deg) translateY(0px)' : 'translateY(6px)',
      width: 24,
      height: isOpen ? 1 : 2,
      [medium]: {
        width: 32,
        bottom: 15,
        transform: isOpen ? 'rotate(-45deg) translateY(0px)' : 'translateY(8px)'
      },
      [large]: {
        width: 32,
        bottom: 15,
        transform: isOpen ? 'rotate(-45deg) translateY(0px)' : 'translateY(8px)'
      }
    })
  })
)

const menuIconContainer = hh(({onClick, children}) =>
  button(
    {
      onClick,
      className: css(
        {
          ':focus': {outline: 'none'},
          backgroundColor: 'transparent',
          border: 'none',
          position: 'relative',
          zIndex: 3,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: 24,
          height: 25,
          [medium]: {
            width: 34,
            height: 31
          },
          [large]: {
            width: 34,
            height: 31
          }
        },
        linkStyle
      )
    },
    [children]
  )
)

const MenuIcon = ({isOpen, toggle}) => {
  return menuIconContainer({onClick: toggle}, [
    topBar({isOpen}),
    bottomBar({isOpen})
  ])
}

export default MenuIcon

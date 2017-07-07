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
      top: 11,
      transform: isOpen ? 'rotate(45deg) translateY(0px)' : 'translateY(-6px)',
      width: 24,
      height: 2,
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
      bottom: 11,
      transition: 'all 50ms ease',
      transform: isOpen ? 'rotate(-45deg) translateY(0px)' : 'translateY(6px)',
      width: 24,
      height: 2,
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
          height: 24,
          [medium]: {
            width: 32,
            height: 32
          },
          [large]: {
            width: 32,
            height: 32
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

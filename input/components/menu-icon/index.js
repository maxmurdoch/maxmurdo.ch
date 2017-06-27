import R from 'ramda'
import {css} from 'glamor'
import {div} from 'react-hyperscript-helpers'

import {black} from '../../constants/colour'
import linkStyle from '../../constants/link-style'
import {medium, large} from '../../constants/media'

const MenuIcon = ({isOpen, toggle}) => {
  return div(
    {
      onClick: toggle,
      className: css(
        {
          position: `relative`,
          zIndex: 3,
          display: `flex`,
          justifyContent: `center`,
          alignItems: `center`,
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
    [
      div({
        className: css({
          background: R.last(black),
          position: `absolute`,
          display: `block`,
          transition: `all 50ms ease-in-out`,
          top: 11,
          transform: isOpen
            ? `rotate(45deg) translateY(0px)`
            : `translateY(-6px)`,
          width: 24,
          height: 2,
          [medium]: {
            width: 32,
            top: 15,
            transform: isOpen
              ? `rotate(45deg) translateY(0px)`
              : `translateY(-8px)`
          },
          [large]: {
            width: 32,
            top: 15,
            transform: isOpen
              ? `rotate(45deg) translateY(0px)`
              : `translateY(-8px)`
          }
        })
      }),
      div({
        className: css({
          background: R.last(black),
          position: `absolute`,
          display: `block`,
          bottom: 11,
          transition: `all 50ms ease`,
          transform: isOpen
            ? `rotate(-45deg) translateY(0px)`
            : `translateY(6px)`,
          width: 24,
          height: 2,
          [medium]: {
            width: 32,
            bottom: 15,
            transform: isOpen
              ? `rotate(-45deg) translateY(0px)`
              : `translateY(8px)`
          },
          [large]: {
            width: 32,
            bottom: 15,
            transform: isOpen
              ? `rotate(-45deg) translateY(0px)`
              : `translateY(8px)`
          }
        })
      })
    ]
  )
}

export default MenuIcon

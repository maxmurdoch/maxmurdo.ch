import R from 'ramda'
import {hh, div} from 'react-hyperscript-helpers'
import {css} from 'glamor'
import {black} from '../../constants/colour'
import {compose, withState, withHandlers} from 'recompose'

const addOpenToggle = compose(
  withState(`isOpen`, `toggle`, false),
  withHandlers({
    toggle: ({toggle}) => () => toggle(isOpen => R.not(isOpen))
  })
)

const MenuIcon = ({isOpen, toggle}) => {
  return div(
    {
      onClick: toggle,
      className: css({
        position: `absolute`,
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
        width: 24,
        height: 48,
        cursor: `pointer`
      })
    },
    [
      div({
        className: css({
          background: R.last(black),
          width: `24px`,
          height: `2px`,
          position: `absolute`,
          display: `block`,
          transition: `all 100ms ease-in-out`,
          top: 23,
          transform: isOpen
            ? `rotate(45deg) translateY(0px)`
            : `translateY(-4px)`
        })
      }),
      div({
        className: css({
          background: R.last(black),
          width: `24px`,
          height: `2px`,
          position: `absolute`,
          display: `block`,
          bottom: 23,
          transition: `all 100ms ease`,
          transform: isOpen
            ? `rotate(-45deg) translateY(0px)`
            : `translateY(4px)`
        })
      })
    ]
  )
}

export default hh(addOpenToggle(MenuIcon))

import R from 'ramda'
import {hh, div} from 'react-hyperscript-helpers'
import {black} from '../../constants/colour'
import {compose, withState, withHandlers} from 'recompose'
import linkStyle from '../../constants/link-style'

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
      style: R.merge(
        {
          position: `relative`,
          display: `flex`,
          justifyContent: `center`,
          alignItems: `center`,
          width: 32,
          height: 64
        },
        linkStyle
      )
    },
    [
      div({
        style: {
          background: R.last(black),
          width: 32,
          height: 2,
          position: `absolute`,
          display: `block`,
          transition: `all 50ms ease-in-out`,
          top: 31,
          transform: isOpen
            ? `rotate(45deg) translateY(0px)`
            : `translateY(-8px)`
        }
      }),
      div({
        style: {
          background: R.last(black),
          width: 32,
          height: 2,
          position: `absolute`,
          display: `block`,
          bottom: 31,
          transition: `all 50ms ease`,
          transform: isOpen
            ? `rotate(-45deg) translateY(0px)`
            : `translateY(8px)`
        }
      })
    ]
  )
}

export default hh(addOpenToggle(MenuIcon))

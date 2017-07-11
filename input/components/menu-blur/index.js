import {hh, div} from 'react-hyperscript-helpers'
import {css} from 'glamor'

const MenuBlur = ({isOpen, children}) => {
  return div(
    {
      style: {
        filter: isOpen ? 'blur(12px) opacity(20%)' : 'none',
        transitionDuration: '100ms',
        transitionProperty: 'filter',
        transitionTimingFunction: 'ease-in-out',
        zIndex: 1,
        width: '100vw',
        height: '100%'
      }
    },
    [children]
  )
}

export default hh(MenuBlur)

import {hh, div} from 'react-hyperscript-helpers'

const MenuBlur = ({isOpen, children}) => {
  return div(
    {
      style: {
        willChange: 'filter',
        filter: isOpen ? 'blur(12px) opacity(40%)' : 'none',
        transitionDuration: '100ms',
        transitionProperty: 'filter',
        transitionTimingFunction: 'ease-in-out',
        zIndex: 1,
        width: '100%',
        height: '100%'
      }
    },
    [children]
  )
}

export default hh(MenuBlur)

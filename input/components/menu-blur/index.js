import {hh, div} from 'react-hyperscript-helpers'
import {css} from 'glamor'

const MenuBlur = ({isOpen, children}) => {
  return isOpen
    ? div(
        {
          className: css({
            willChange: 'filter',
            filter: isOpen ? 'blur(12px) opacity(40%)' : 'none',
            transitionDuration: '100ms',
            transitionProperty: 'filter',
            transitionTimingFunction: 'ease-in-out',
            width: '100%',
            height: '100%'
          })
        },
        [children]
      )
    : div([children])
}

export default hh(MenuBlur)

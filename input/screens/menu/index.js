import {css} from 'glamor'
import {div, ul} from 'react-hyperscript-helpers'

import container from '../../components/site-container'
import menuIcon from '../../containers/menu-icon'
import cell from '../../components/cell'
import grid from '../../components/grid'
import text from '../../components/text'

const Menu = ({isOpen}) => {
  return div(
    {
      style: {
        position: `fixed`,
        backgroundColor: `#eee`,
        top: 0,
        bottom: isOpen ? 0 : `100%`,
        right: 0,
        left: 0,
        overflow: `scroll`,
        zIndex: 6,
        visibility: isOpen ? `visible` : `hidden`,
        transition: `300ms all cubic-bezier(0.785, 0.135, 0.15, 0.86)`,
        width: `100vw`
      }
    },
    [
      container([
        grid({justify: `between`, align: `center`}, [
          cell(
            {
              align: `center`,
              justify: `end`,
              topGutter: true,
              bottomGutter: true
            },
            [menuIcon()]
          ),
          cell([
            ul({className: css({listStyleType: `none`})}, [
              text({size: 5, tag: `li`}, `Work`)
            ])
          ])
        ])
      ])
    ]
  )
}

export default Menu

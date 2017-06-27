import R from 'ramda'
import {css} from 'glamor'
import {footer, nav} from 'react-hyperscript-helpers'

import container from '../site-container'
import text from '../text'
import link from '../link'
import space from '../../constants/space'
import menuIcon from '../../containers/menu-icon'
import {medium, large} from '../../constants/media'

const StickyFooter = () =>
  footer(
    {
      className: css({
        backgroundColor: `white`,
        width: `100%`,
        position: `fixed`,
        top: 0,
        [medium]: {display: `none`},
        [large]: {display: `none`}
      })
    },
    [
      container([
        nav(
          {
            className: css({
              position: `relative`,
              display: `flex`,
              width: `100%`,
              flex: `1 1 100%`,
              justifyContent: `flex-end`
            })
          },
          [menuIcon()]
        )
      ])
    ]
  )

export default StickyFooter

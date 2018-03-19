import {hh, div} from 'react-hyperscript-helpers'
import {css} from 'glamor'

import {MEDIUM_HEADER_HEIGHT, LARGE_HEADER_HEIGHT} from '../header'
import {medium, large} from '../../constants/media'

const HeaderPadding = ({children, className, ...props}) => {
  return div(
    {
      className: css(
        {
          width: '100%',
          [medium]: {paddingTop: MEDIUM_HEADER_HEIGHT},
          [large]: {paddingTop: LARGE_HEADER_HEIGHT}
        },
        className
      ),
      ...props
    },
    [children]
  )
}

export default hh(HeaderPadding)

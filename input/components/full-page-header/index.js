import {hh, div} from 'react-hyperscript-helpers'
import {css} from 'glamor'

import {
  SMALL_HEADER_HEIGHT,
  MEDIUM_HEADER_HEIGHT,
  LARGE_HEADER_HEIGHT
} from '../header'
import {medium, large} from '../../constants/media'

const FullPageHeader = ({children, className, ...props}) => {
  return div(
    {
      className: css(
        {
          width: '100%',
          minHeight: '100vh',
          display: 'flex',
          paddingTop: SMALL_HEADER_HEIGHT,
          paddingBottom: SMALL_HEADER_HEIGHT,
          [medium]: {
            paddingTop: MEDIUM_HEADER_HEIGHT,
            paddingBottom: MEDIUM_HEADER_HEIGHT
          },
          [large]: {
            paddingTop: LARGE_HEADER_HEIGHT,
            paddingBottom: LARGE_HEADER_HEIGHT
          }
        },
        className
      ),
      ...props
    },
    [children]
  )
}

export default hh(FullPageHeader)

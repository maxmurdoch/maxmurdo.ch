import {hh, div} from 'react-hyperscript-helpers'
import {css} from 'glamor'

import {small, medium, large} from '../../constants/media'
import {
  small as smallGutter,
  medium as mediumGutter,
  large as largeGutter
} from '../../constants/gutter'

const SiteContainer = ({
  className,
  children,
  top,
  right = true,
  bottom,
  left = true
}) => {
  const style = css(
    {
      maxWidth: '80rem',
      position: 'relative',
      width: '100%',
      marginBottom: 0,
      marginRight: 'auto',
      marginLeft: 'auto',
      boxSizing: 'border-box',
      [small]: {
        paddingRight: right ? smallGutter : 0,
        paddingLeft: left ? smallGutter : 0,
        paddingTop: top ? smallGutter : 0,
        paddingBottom: bottom ? smallGutter : 0
      },
      [medium]: {
        paddingRight: right ? mediumGutter : 0,
        paddingLeft: left ? mediumGutter : 0,
        paddingTop: top ? mediumGutter : 0,
        paddingBottom: bottom ? mediumGutter : 0
      },
      [large]: {
        paddingRight: right ? largeGutter : 0,
        paddingLeft: left ? largeGutter : 0,
        paddingTop: top ? largeGutter : 0,
        paddingBottom: bottom ? largeGutter : 0
      }
    },
    className
  )

  return div(
    {
      className: style
    },
    [children]
  )
}

export default hh(SiteContainer)

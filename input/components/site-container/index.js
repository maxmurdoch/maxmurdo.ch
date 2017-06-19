import {hh, div} from 'react-hyperscript-helpers'
import {css} from 'glamor'

import {small, medium, large} from '../../constants/media'
import {
  small as smallGutter,
  mediumDouble as mediumGutter,
  largeDouble as largeGutter
} from '../../constants/gutter'

const SiteContainer = ({children}) => {
  const className = css({
    position: `relative`,
    width: `auto`,
    maxWidth: `100%`,
    margin: `0 auto`,
    boxSizing: `border-box`,
    [small]: {
      paddingRight: smallGutter,
      paddingLeft: smallGutter
    },
    [medium]: {
      paddingRight: mediumGutter,
      paddingLeft: mediumGutter
    },
    [large]: {
      paddingRight: largeGutter,
      paddingLeft: largeGutter
    }
  })

  return div(
    {
      className
    },
    [children]
  )
}

export default hh(SiteContainer)

import {hh, div} from 'react-hyperscript-helpers'
import {css} from 'glamor'

import {small, medium, large} from '../../constants/media'
import {small as smallGutter, medium as mediumGutter, large as largeGutter} from '../../constants/gutter'

const SiteContainer = ({children}) => {
  const className = css({
    position: 'relative',
    width: '100%',
    maxWidth: '100%',
    margin: '0 auto',
    boxSizing: 'border-box',
    [small]: {
      paddingRight: smallGutter,
      paddingLeft: smallGutter
    },
    [medium]: {
      paddingRight: `calc(${mediumGutter} + ${mediumGutter})`,
      paddingLeft: `calc(${mediumGutter} + ${mediumGutter})`
    },
    [large]: {
      paddingRight: `calc(${largeGutter} + ${largeGutter})`,
      paddingLeft: `calc(${largeGutter} + ${largeGutter})`
    }
  })

  return div({
    className
  }, [children])
}

export default hh(SiteContainer)

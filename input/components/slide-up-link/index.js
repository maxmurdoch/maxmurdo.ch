import {Flex} from 'reflexbox'
import {h, hh, div} from 'react-hyperscript-helpers'
import {compose} from 'recompose'
import toggleHover from '../toggle-hover'

import link from '../link'

const SlideUpLink = ({to, isHovered, onMouseEnter, onMouseLeave, children}) =>
  h(Flex, {auto: true}, [
    div(
      {
        onMouseEnter,
        onMouseLeave,
        style: {
          flex: '1 1 auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden'
        }
      },
      [
        link(
          {
            to,
            style: {
              position: 'absolute',
              backgroundColor: 'blue',
              zIndex: 5,
              width: '25%',
              height: '25%',
              bottom: 0,
              right: 0,
              transform: isHovered ? 'translateY(0)' : 'translateY(150%)'
            }
          },
          ['View project']
        )
      ]
    ),
    children
  ])

export default compose(hh, toggleHover)(SlideUpLink)

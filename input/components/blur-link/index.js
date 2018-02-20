import PropTypes from 'prop-types'
import {hh, div} from 'react-hyperscript-helpers'
import {compose} from 'recompose'

import toggleHover from '../toggle-hover'
import link from '../link'
import text from '../text'
import arrow from '../../assets/arrow-up-right-big.svg'

const viewProjectCell = ({to, isHovered}) =>
  link(
    {
      style: {
        cursor: isHovered ? `url(${arrow}) 32 0, auto` : 'auto',
        position: 'absolute',
        transition: 'all 250ms ease-in-out',
        width: '100%',
        height: '100%',
        opacity: isHovered ? 1 : 0,
        filter: isHovered ? 'none' : 'blur(12px) opacity(40%)',
        zIndex: 3,
        display: 'flex',
        visibility: isHovered ? 'visible' : 'hidden',
        alignItems: 'center',
        justifyContent: 'center'
      },
      to
    },
    [
      text(
        {
          size: 3,
          'data-aos': 'fade-in'
        },
        'View project'
      )
    ]
  )

const BlurLink = ({to, isHovered, onMouseEnter, onMouseLeave, children}) =>
  div(
    {
      onMouseEnter,
      onMouseLeave,
      style: {
        flex: '1 1 auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
      }
    },
    [
      viewProjectCell({to, isHovered}),
      div(
        {
          style: {
            width: '105%',
            height: '105%',
            transition: '200ms filter, 200ms opacity',
            filter: isHovered ? 'blur(6px) opacity(0.6)' : 'blur(0px)'
          }
        },
        [children]
      )
    ]
  )

BlurLink.propTypes = {
  isHovered: PropTypes.bool.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired
}

export default compose(hh, toggleHover)(BlurLink)

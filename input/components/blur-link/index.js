import PropTypes from 'prop-types'
import {hh, div} from 'react-hyperscript-helpers'
import {compose} from 'recompose'

import toggleHover from '../toggle-hover'
import link from '../link'
import arrow from '../../assets/arrow-up-right-big.svg'
import text from '../text'

const viewProjectCell = ({isHovered}) =>
  link(
    {
      style: {
        cursor: `url(${arrow}) 32 0, auto`,
        position: `absolute`,
        transition: `all 150ms ease-in-out, cursor 500ms ease-in`,
        width: `100%`,
        height: `100%`,
        opacity: 1,
        zIndex: 3,
        display: `flex`,
        visibility: isHovered ? `visible` : `hidden`,
        alignItems: `center`,
        justifyContent: `center`
      },
      href: `/maths-builders`
    },
    [
      text(
        {
          size: 3,
          'data-aos': `fade-in`
        },
        `View project`
      )
    ]
  )

const BlurLink = ({isHovered, onMouseEnter, onMouseLeave, children}) =>
  div(
    {
      onMouseEnter,
      onMouseLeave,
      style: {
        flex: `1 1 auto`,
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
        position: `relative`
      }
    },
    [
      viewProjectCell({isHovered}),
      div(
        {
          style: {
            width: `105%`,
            height: `105%`,
            transition: `250ms filter, 250ms opacity`,
            filter: isHovered ? `blur(8px) opacity(0.6)` : `none`
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

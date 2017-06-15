import {PropTypes} from 'prop-types'
import {h, hh} from 'react-hyperscript-helpers'
import {Sticky} from 'react-sticky'

import sideLogo from '../side-logo'

const SideLogo = () => {
  return h(
    Sticky,
    {
      style: {
        position: `absolute`,
        top: 0,
        right: 0,
        left: `inherit`
      },
      stickyStyle: {
        position: `fixed`,
        top: 0,
        right: 0,
        left: `inherit`
      }
    },
    [sideLogo()]
  )
}

SideLogo.propTypes = {
  isAnimated: PropTypes.bool
}

export default hh(SideLogo)

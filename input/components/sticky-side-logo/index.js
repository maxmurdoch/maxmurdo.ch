import {PropTypes} from 'prop-types'
import {h, hh} from 'react-hyperscript-helpers'
import {Sticky} from 'react-sticky'

import sideLogo from '../side-logo'

const SideLogo = () => {
  return h(Sticky, [({style}) => sideLogo({style})])
}

SideLogo.propTypes = {
  isAnimated: PropTypes.bool
}

export default hh(SideLogo)

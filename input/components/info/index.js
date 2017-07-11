import {Component} from 'react'
import {css} from 'glamor'
import {h, hh, div} from 'react-hyperscript-helpers'

import container from '../site-container'
import sideNav from '../side-nav'
import sideLogo from '../side-logo'
import {small, medium, large} from '../../constants/media'
import {
  small as smallGutter,
  medium as mediumGutter,
  large as largeGutter
} from '../../constants/gutter'
import infoIntro from '../info-intro'
import howIWork from '../info-how-I-work'
import whyHireMe from '../info-why-hire-me'

class Info extends Component {
  render() {
    return container([
      sideNav({isAnimated: false}),
      sideLogo({isAnimated: false}),
      div(
        {
          className: css({
            [small]: {paddingTop: smallGutter, paddingBottom: smallGutter},
            [medium]: {
              paddingTop: mediumGutter,
              paddingBottom: mediumGutter
            },
            [large]: {paddingTop: largeGutter, paddingBottom: largeGutter}
          })
        },
        [infoIntro(), howIWork(), whyHireMe()]
      )
    ])
  }
}

export default hh(Info)

import {Component} from 'react'
import {css} from 'glamor'
import {h, hh, div} from 'react-hyperscript-helpers'
import {StickyContainer} from 'react-sticky'

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
import RefreshAos from '../refresh-aos'
import howIWork from '../info-how-I-work'
import whyHireMe from '../info-why-hire-me'
import init from '../../services/initialise-animation'

class Info extends Component {
  componentDidMount() {
    init()
  }

  render() {
    return container([
      h(RefreshAos, [
        h(StickyContainer, {className: css({height: '100%'})}, [
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
      ])
    ])
  }
}

export default hh(Info)

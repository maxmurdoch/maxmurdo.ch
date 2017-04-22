import {Component} from 'react'
import {h, div} from 'react-hyperscript-helpers'
import {StickyContainer} from 'react-sticky'
import {css} from 'glamor'

import {small as smallGutter, medium as mediumGutter, large as largeGutter} from '../../constants/gutter'
import {small, medium, large} from '../../constants/media'
import container from '../site-container'
import sideNav from '../side-nav'
import sideLogo from '../side-logo'
import goCardless from '../gocardless'
import codeAtUni from '../code-at-uni'
import mathsBuilders from '../maths-builders'
import initialiseAnimation from '../../services/initialise-animation'

class Work extends Component {
  componentDidMount() {
    initialiseAnimation()
  }

  render() {
    return h(StickyContainer, [
      container([
        sideNav({isAnimated: false}),
        sideLogo({isAnimated: false}),
        div({
          className: css({
            [small]: {paddingTop: smallGutter},
            [medium]: {paddingTop: mediumGutter},
            [large]: {paddingTop: largeGutter}
          })
        }, [
          mathsBuilders()
        ]),
        codeAtUni(),
        goCardless()
      ])
    ])
  }
}
export default Work

import {Component} from 'react'
import {h, div} from 'react-hyperscript-helpers'
import {css} from 'glamor'

import {
  small as smallGutter,
  medium as mediumGutter,
  large as largeGutter
} from '../../constants/gutter'
import {small, medium, large} from '../../constants/media'
import refreshAos from '../refresh-aos'
import container from '../site-container'
import sideNav from '../side-nav'
import sideLogo from '../side-logo'
import goCardless from '../gocardless'
import codeAtUni from '../code-at-uni'
import mathsBuilders from '../maths-builders'

class Work extends Component {
  render() {
<<<<<<< HEAD
    return container([
      sideNav({isAnimated: false}),
      sideLogo({isAnimated: false}),
      div(
        {
          className: css({
            [small]: {paddingTop: smallGutter},
            [medium]: {paddingTop: mediumGutter},
            [large]: {paddingTop: largeGutter}
          })
        },
        [mathsBuilders()]
      ),
      codeAtUni(),
      goCardless()
=======
    return h(StickyContainer, [
      refreshAos([
        container([
          sideNav({isAnimated: false}),
          sideLogo({isAnimated: false}),
          div(
            {
              className: css({
                [small]: {paddingTop: smallGutter},
                [medium]: {paddingTop: mediumGutter},
                [large]: {paddingTop: largeGutter}
              })
            },
            [mathsBuilders()]
          ),
          codeAtUni(),
          goCardless()
        ])
      ])
>>>>>>> parent of 56f2d68... Remove data-aos elements
    ])
  }
}
export default Work

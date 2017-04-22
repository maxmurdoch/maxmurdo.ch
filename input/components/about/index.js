import {Component} from 'react'
import {css} from 'glamor'
import {h, hh, div} from 'react-hyperscript-helpers'
import {StickyContainer} from 'react-sticky'

import container from '../site-container'
import sideNav from '../side-nav'
import sideLogo from '../side-logo'
import {medium, large} from '../../constants/media'
import aboutIntro from '../about-intro'
import howIWork from '../about-how-I-work'
import whatIDo from '../about-what-I-do'
import init from '../../services/initialise-animation'

class About extends Component {
  componentDidMount() {
    init()
  }

  render() {
    return h(StickyContainer, [
      container([
        sideNav({isAnimated: false}),
        sideLogo({isAnimated: false}),
        div({
          className: css({
            height: `100vh`,
            [medium]: {
              height: `100vh`
            },
            [large]: {
              height: `100vh`
            }
          })
        }, [
          aboutIntro(),
          whatIDo(),
          howIWork()
        ])
      ])
    ])
  }
}

export default hh(About)

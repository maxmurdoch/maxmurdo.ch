import {Component} from 'react'
import {css} from 'glamor'
import {h, div} from 'react-hyperscript-helpers'
import {StickyContainer} from 'react-sticky'

import container from '../site-container'
import stickySideNav from '../sticky-side-nav'
import stickySideLogo from '../sticky-side-logo'
import stickyFooter from '../sticky-footer'
import simpleIntro from '../simple-intro'
import goCardless from '../gocardless'
import codeAtUni from '../code-at-uni'
import mathsBuilders from '../maths-builders'
import {large} from '../../constants/gutter'
import {large as largeBp} from '../../constants/media'

class Home extends Component {
  render() {
    return h(StickyContainer, [
      simpleIntro(),
      div({className: css({[largeBp]: {marginTop: large}})}, [
        container([
          stickySideNav(),
          stickySideLogo(),
          mathsBuilders(),
          codeAtUni(),
          goCardless()
        ])
      ]),
      stickyFooter()
    ])
  }
}

export default Home

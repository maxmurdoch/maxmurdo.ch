import R from 'ramda'
import {Component} from 'react'
import {withRouter} from 'react-router'
import {css} from 'glamor'
import {h, div} from 'react-hyperscript-helpers'
import {StickyContainer, Sticky} from 'react-sticky'

import RefreshAos from '../refresh-aos'
import container from '../site-container'
import stickySideNav from '../sticky-side-nav'
import stickySideLogo from '../sticky-side-logo'
import header from '../header'
import stickyFooter from '../sticky-footer'
import simpleIntro from '../simple-intro'
import goCardless from '../gocardless'
import codeAtUni from '../code-at-uni'
import mathsBuilders from '../maths-builders'
import {large} from '../../constants/gutter'

class Home extends Component {
  render() {
    return h(RefreshAos, [
      simpleIntro(),
      div({className: css({marginTop: large})}, [
        container([
          h(StickyContainer, [
            header(),
            mathsBuilders(),
            codeAtUni(),
            goCardless()
          ])
        ]),
        stickyFooter()
      ])
    ])
  }
}

export default withRouter(Home)

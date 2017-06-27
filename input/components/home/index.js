import {Component} from 'react'
import {withRouter} from 'react-router'
import {css} from 'glamor'
import {h, div} from 'react-hyperscript-helpers'
import {StickyContainer} from 'react-sticky'

import container from '../site-container'
import stickyHeader from '../sticky-header'
import stickyFooter from '../sticky-footer'
import simpleIntro from '../simple-intro'
import goCardless from '../gocardless'
import codeAtUni from '../code-at-uni'
import mathsBuilders from '../maths-builders'
import {large} from '../../constants/gutter'

class Home extends Component {
  render() {
    return div([
      simpleIntro(),
      h(StickyContainer, [
        stickyHeader(),
        div({className: css({marginTop: large})}, [
          container([mathsBuilders(), codeAtUni(), goCardless()])
        ])
      ])
    ])
  }
}

export default withRouter(Home)

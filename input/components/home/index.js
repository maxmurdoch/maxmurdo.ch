import {Component} from 'react'
import {h} from 'react-hyperscript-helpers'
import {StickyContainer} from 'react-sticky'

import container from '../site-container'
import sideNav from '../side-nav'
import sideLogo from '../side-logo'
import simpleIntro from '../simple-intro'
import goCardless from '../gocardless'
import codeAtUni from '../code-at-uni'
import mathsBuilders from '../maths-builders'
import initialiseAnimation from '../../services/initialise-animation'

class Home extends Component {
  componentDidMount() {
    initialiseAnimation()
  }

  render() {
    return h(StickyContainer, [
      simpleIntro(),
      container([
        sideNav(),
        sideLogo(),
        mathsBuilders(),
        codeAtUni(),
        goCardless()
      ])
    ])
  }
}

export default Home

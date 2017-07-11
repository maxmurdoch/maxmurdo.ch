import {Component} from 'react'
import {withRouter} from 'react-router'
import {css} from 'glamor'
import {div} from 'react-hyperscript-helpers'

import menuNoScroll from '../../containers/menu-no-scroll'
import menu from '../../containers/menu'
import menuBlur from '../../containers/menu-blur'
import header from '../header'
import container from '../site-container'
import simpleIntro from '../simple-intro'
import goCardless from '../gocardless'
import codeAtUni from '../code-at-uni'
import mathsBuilders from '../maths-builders'
import {large} from '../../constants/gutter'

class Home extends Component {
  render() {
    return div([
      menuNoScroll([
        header(),
        menu(),
        menuBlur([
          simpleIntro(),
          div({className: css({marginTop: large})}, [
            container([mathsBuilders(), codeAtUni(), goCardless()])
          ])
        ])
      ])
    ])
  }
}

export default withRouter(Home)

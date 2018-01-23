import {
  withRouter
} from 'react-router'
import {
  compose
} from 'recompose'
import {
  connect
} from 'react-redux'
import {
  css
} from 'glamor'
import {
  div
} from 'react-hyperscript-helpers'

import menuNoScroll from '../../containers/menu-no-scroll'
import menu from '../../containers/menu'
import menuBlur from '../../containers/menu-blur'
import container from '../site-container'
import colourIntro from '../colour-intro'
import goCardless from '../gocardless'
import codeAtUni from '../code-at-uni'
import mathsBuilders from '../maths-builders'
import {
  large
} from '../../constants/gutter'

const Home = ({
  menuIsOpen
}) => {
  return div([
    menuNoScroll([
      menu(),
      menuBlur([
        colourIntro({
          stopAnimationIf: menuIsOpen
        }),
        div({
          className: css({
            marginTop: large
          })
        }, [
          container([mathsBuilders(), codeAtUni(), goCardless()])
        ])
      ])
    ])
  ])
}

const mapStateToProps = ({
  ui: {
    menu: {
      isOpen
    }
  }
}) => ({
  menuIsOpen: isOpen
})

export default compose(withRouter, connect(mapStateToProps))(Home)
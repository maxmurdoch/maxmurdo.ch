import {withRouter} from 'react-router'
import {compose} from 'recompose'
import {connect} from 'react-redux'
import {div} from 'react-hyperscript-helpers'

import intro from '../intro'
import container from '../site-container'
import navMargin from '../nav-margin'
import goCardless from '../gocardless'
import codeAtUni from '../code-at-uni'
import mathsBuilders from '../maths-builders'

const Home = ({menuIsOpen}) => {
  return div([
    intro({menuIsOpen}),
    div([container([mathsBuilders(), codeAtUni(), goCardless()])]),
    navMargin()
  ])
}

const mapStateToProps = ({ui: {menu: {isOpen}}}) => ({
  menuIsOpen: isOpen
})

export default compose(withRouter, connect(mapStateToProps))(Home)

import {withRouter} from 'react-router'
import {compose} from 'recompose'
import {connect} from 'react-redux'
import {h, div} from 'react-hyperscript-helpers'
import {Link, Element} from 'react-scroll'

import intro from '../intro'
import navMargin from '../nav-margin'
import adaptiveLab from '../adaptive-lab'
import mayhem from '../mayhem'
import goCardless from '../gocardless'
import codeAtUni from '../code-at-uni'
import mathsBuilders from '../maths-builders'

const Home = ({menuIsOpen}) => {
  return div([
    h(Link, {to: 'work', smooth: true, duration: 300}, [intro({menuIsOpen})]),
    h(Element, {name: 'work'}, [
      div([mathsBuilders(), mayhem(), adaptiveLab(), codeAtUni(), goCardless()])
    ]),
    navMargin()
  ])
}

const mapStateToProps = ({ui: {menu: {isOpen}}}) => ({
  menuIsOpen: isOpen
})

export default compose(withRouter, connect(mapStateToProps))(Home)

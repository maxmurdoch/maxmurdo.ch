import {compose} from 'recompose'
import {hh} from 'react-hyperscript-helpers'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {toggleMenu} from '../../store/actions/ui'
import MenuIcon from '../../components/menu-icon'

const mapStateToProps = ({ui: {menu: {isOpen}}}) => ({
  isOpen
})

const mapDispatchToProps = dispatch => ({
  toggle: () => dispatch(toggleMenu())
})

export default compose(
  hh,
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(MenuIcon)

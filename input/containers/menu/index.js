import {compose} from 'recompose'
import {hh} from 'react-hyperscript-helpers'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {closeMenu} from '../../store/actions/ui'
import Menu from '../../screens/menu'

const mapStateToProps = ({ui: {menu: {isOpen}}}) => ({
  isOpen
})

const mapDispatchToProps = dispatch => ({
  closeMenu: () => dispatch(closeMenu())
})

export default compose(
  hh,
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(Menu)

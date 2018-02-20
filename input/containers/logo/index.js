import {compose} from 'recompose'
import {hh} from 'react-hyperscript-helpers'
import {connect} from 'react-redux'
import {closeMenu} from '../../store/actions/ui'
import Logo from '../../components/logo'

const mapStateToProps = ({ui: {menu: {isOpen}}}) => ({
  isOpen
})

const mapDispatchToProps = dispatch => ({
  closeMenu: () => dispatch(closeMenu())
})

export default compose(hh, connect(mapStateToProps, mapDispatchToProps))(Logo)

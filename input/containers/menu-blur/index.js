import {compose} from 'recompose'
import {hh} from 'react-hyperscript-helpers'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import MenuBlur from '../../components/menu-blur'

const mapStateToProps = ({ui: {menu: {isOpen}}}) => ({isOpen})

export default compose(hh, withRouter, connect(mapStateToProps))(MenuBlur)

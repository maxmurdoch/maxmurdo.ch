import {Component} from 'react'
import {div} from 'react-hyperscript-helpers'
import PropTypes from 'prop-types'
import AOS from 'aos'
import {withRouter} from 'react-router'

class RefreshAos extends Component {
  constructor(props) {
    super(props)
    this.state = {
      unlisten: null
    }
  }

  componentDidMount() {
    const unlisten = this.props.history.listen(() => {
      return AOS.refresh()
    })
    this.setState({unlisten})
  }

  componentWillUnmount() {
    this.state.unlisten()
  }

  render() {
    return div([this.props.children])
  }
}

RefreshAos.propTypes = {
  history: PropTypes.object.isRequired,
  children: PropTypes.node
}

export default withRouter(RefreshAos)

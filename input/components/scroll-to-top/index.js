import R from 'ramda'
import PropTypes from 'prop-types'
import {Component} from 'react'
import {withRouter} from 'react-router-dom'

class ScrollToTop extends Component {
  componentWillUpdate(prevProps) {
    const getPathname = R.path([`location`, `pathname`])
    const newPath = getPathname(this.props)
    const prevPath = getPathname(prevProps)

    if (R.not(R.equals(prevPath, newPath))) {
      window.scrollTo(0, 0)
    }
  }

  render() {
    return this.props.children
  }
}

ScrollToTop.propTypes = {
  location: PropTypes.object.isRequired,
  children: PropTypes.node
}

export default withRouter(ScrollToTop)

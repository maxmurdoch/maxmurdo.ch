import R from 'ramda'
import {Component} from 'react'
import {withRouter} from 'react-router-dom'

class ScrollToTop extends Component {
  componentWillUpdate(prevProps) {
    const newPath = R.prop('pathname', this.props.location)
    const prevPath = R.prop('pathname', prevProps.location)
    if (R.not(R.equals(prevPath, newPath))) {
      window.scrollTo(0, 0)
    }
  }

  render() {
    return this.props.children
  }
}

export default withRouter(ScrollToTop)

import PropTypes from 'prop-types'
import {css} from 'glamor'
import {Component} from 'react'
import {div} from 'react-hyperscript-helpers'

class MenuNoScroll extends Component {
  componentWillReceiveProps(nextProps) {
    const {isOpen} = nextProps
    document.body.style.overflow = isOpen ? 'hidden' : 'auto'
  }

  render() {
    return div(
      {
        className: css({
          position: 'relative'
        })
      },
      [this.props.children]
    )
  }
}

MenuNoScroll.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
}

export default MenuNoScroll

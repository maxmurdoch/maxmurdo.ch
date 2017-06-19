import {Component} from 'react'
import {PropTypes} from 'prop-types'
import {h, hh, aside} from 'react-hyperscript-helpers'
import {css} from 'glamor'
import {Link} from 'react-router-dom'

import text from '../text'

class SideLogo extends Component {
  render() {
    const {style} = this.props

    return aside({style}, [
      h(
        Link,
        {
          to: `/`,
          className: css({
            textDecoration: `none`
          })
        },
        [text({size: 2, tag: `h1`}, [`Max\u00A0Murdoch`])]
      )
    ])
  }
}

SideLogo.propTypes = {
  isAnimated: PropTypes.bool
}

export default hh(SideLogo)

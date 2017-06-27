import {css} from 'glamor'
import {Component} from 'react'
import {h, hh, header} from 'react-hyperscript-helpers'
import {Sticky} from 'react-sticky'

import Header from '../header'

class StickyHeader extends Component {
  render() {
    return h(Sticky, [
      ({style}) => header({style, className: css({zIndex: 5})}, [h(Header)])
    ])
  }
}

export default hh(StickyHeader)

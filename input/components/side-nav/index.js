import R from 'ramda'
import {Component} from 'react'
import {h, hh, aside, nav, div} from 'react-hyperscript-helpers'
import {css} from 'glamor'
import {v4} from 'uuid'
import {Link} from 'react-router-dom'

import text from '../../components/text'
import space from '../../constants/space'
import {medium, large} from '../../constants/media'
import {
  medium as mediumGutter,
  large as largeGutter
} from '../../constants/gutter'

const linkClass = css({
  display: 'flex',
  textDecoration: 'none',
  alignItems: 'center',
  paddingRight: R.nth(1, space),
  margin: 0,
  ':last-of-type': {paddingRight: 0}
})

const navItems = [{to: '/info', title: 'Info'}, {to: '/work', title: 'Work'}]
class SideNav extends Component {
  render() {
    const {style, isAnimated = true} = this.props

    return aside({style}, [
      nav(
        R.map(({to, title}) => {
          return h(
            Link,
            {
              key: v4(),
              className: linkClass,
              to
            },
            [text({size: 2}, title)]
          )
        }, navItems)
      )
    ])
  }
}

export default hh(SideNav)

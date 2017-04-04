import {Component} from 'react'
import R from 'ramda'
import {h, hh, aside, nav} from 'react-hyperscript-helpers'
import {css} from 'glamor'
import {v4} from 'uuid'
import {Link} from 'react-router-dom'
import {Sticky} from 'react-sticky'
import aos from 'aos'

import text from '../../components/text'
import space from '../../constants/space'
import {medium, large} from '../../constants/media'
import {medium as mediumGutter, large as largeGutter} from '../../constants/gutter'

const linkClass = css({
  display: 'flex',
  textDecoration: 'none',
  alignItems: 'center',
  paddingRight: R.nth(1, space),
  margin: 0
})

const navItems = [
  {
    to: '/contact',
    title: 'Contact'
  },
  {
    to: '/work',
    title: 'Work'
  },
  {
    to: '/about',
    title: 'About'
  }
]
class SideNav extends Component {
  componentDidMount() {
    aos.init()
  }

  render() {
    const className = css({
      display: 'none',
      [medium]: {
        display: 'block',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        width: `calc(${mediumGutter} + ${mediumGutter})`,
        backgroundColor: 'white'
      },
      [large]: {
        display: 'block',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        backgroundColor: 'white',
        width: `calc(${largeGutter} + ${largeGutter})`
      }
    })

    return h(Sticky, {
      style: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 'inherit'
      },
      stickyStyle: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 'inherit'
      }
    }, [
      aside({
        className
      }, [
        nav({
          className: css({
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            transform: 'rotate(-90deg)',
            transformOrigin: 'center',
            textDecoration: 'none',
            paddingLeft: 0,
            paddingBottom: R.nth(1, space),
            margin: 0,
            flex: '1 1 auto',
            listStyleType: 'none',
            [medium]: {
              padding: 0
            },
            [large]: {
              padding: 0
            }
          })
        }, R.map(({to, title}) => {
          return h(Link, {
            'data-aos': 'fade-right',
            key: v4(),
            className: linkClass,
            to
          }, [
            text({
              size: 1
            }, title)
          ])
        }, navItems))
      ])
    ])
  }
}

export default hh(SideNav)

import R from 'ramda'
import {h, hh, aside, nav, div} from 'react-hyperscript-helpers'
import {css} from 'glamor'
import {v4} from 'uuid'
import {Link} from 'react-router-dom'
import {Sticky} from 'react-sticky'

import text from '../../components/text'
import space from '../../constants/space'
import {medium, large} from '../../constants/media'
import {medium as mediumGutter, large as largeGutter} from '../../constants/gutter'

const linkClass = css({
  display: 'flex',
  textDecoration: 'none',
  alignItems: 'center',
  paddingRight: R.nth(1, space),
  margin: 0,
  ':last-of-type': {
    paddingRight: 0
  }
})

const navItems = [
  {to: '/info', title: 'Info'},
  {to: '/work', title: 'Work'}
]
const SideNav = ({
  isAnimated = true
}) => {
  console.log(isAnimated)
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
      div({
        className: css({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          textDecoration: 'none',
          paddingLeft: 0,
          paddingBottom: R.nth(1, space),
          margin: 0,
          listStyleType: 'none',
          [medium]: {
            padding: 0
          },
          [large]: {
            padding: 0
          }
        })
      }, [
        nav({
          className: css({
            transform: 'rotate(-90deg)',
            transformOrigin: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          })
        }, R.map(({to, title}) => {
          const aosAttrs = {
            'data-aos': 'fade-right',
            'data-aos-anchor-placement': 'top-bottom'
          }
          const linkAttrs = {
            key: v4(),
            className: linkClass,
            to
          }
          const attrs = R.ifElse(
            () => R.equals(isAnimated, true),
            () => R.merge(aosAttrs, linkAttrs),
            () => linkAttrs
          )

          return h(Link, attrs(), [
            text({
              size: 2
            }, title)
          ])
        }, navItems))
      ])
    ])
  ])
}

export default hh(SideNav)

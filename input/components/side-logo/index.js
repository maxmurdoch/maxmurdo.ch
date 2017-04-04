import {Component} from 'react'
import R from 'ramda'
import {div, h, hh, aside} from 'react-hyperscript-helpers'
import {css} from 'glamor'
import {Link} from 'react-router-dom'
import {Sticky} from 'react-sticky'
import aos from 'aos'

import space from '../../constants/space'
import text from '../text'
import {medium, large} from '../../constants/media'
import {medium as mediumGutter, large as largeGutter} from '../../constants/gutter'

class SideLogo extends Component {
  componentDidMount() {
    aos.init()
  }

  render() {
    const className = css({
      display: 'none',
      [medium]: {
        display: 'block',
        width: `calc(${mediumGutter} + ${mediumGutter})`,
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        backgroundColor: 'white'
      },
      [large]: {
        display: 'block',
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        backgroundColor: 'white',
        width: `calc(${largeGutter} + ${largeGutter})`
      }
    })

    return h(Sticky, {
      style: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 'inherit'
      },
      stickyStyle: {
        position: 'fixed',
        top: 0,
        right: 0,
        left: 'inherit'
      }
    }, [
      aside({className}, [
        div({
          className: css({
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            transform: 'rotate(180deg)',
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
        }, [
          div({
            className: css({
              transform: 'rotate(-90deg)',
              transformOrigin: 'center'
            })
          }, [
            h(Link, {
              to: '/',
              'data-aos': 'fade-left',
              className: css({
                display: 'flex',
                textDecoration: 'none'
              })
            }, [
              text({
                size: 1,
                tag: 'h1',
                className: css({
                  width: '100vh',
                  textAlign: 'center'
                })
              }, ['Max Murdoch'])
            ])
          ])
        ])
      ])
    ])
  }
}

export default hh(SideLogo)

import {Component} from 'react'
import {h, hh, header} from 'react-hyperscript-helpers'
import {Sticky} from 'react-sticky'
import {css} from 'glamor'
import aos from 'aos'

import container from '../site-container'
import logo from '../logo'
import nav from '../nav'
import grid from '../grid'
import cell from '../cell'

const className = css({
  backgroundColor: 'white',
  display: 'flex',
  flexWrap: 'wrap',
  height: '15vmin',
  justifyContent: 'space-between',
  left: 0,
  position: 'fixed',
  right: 0,
  top: 0,
  zIndex: 1,
  transition: 'box-shadow 200ms ease-in-out'
})

class Header extends Component {
  componentDidMount() {
    aos.init()
  }

  render() {
    return h(Sticky, {
      style: {
        transition: 'box-shadow 200ms ease-in-out'
      },
      stickyClassName: css({
        zIndex: 3,
        '& header': {
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
        }
      })
    }, [
      header({
        className,
        'data-aos': 'fade-in',
        'data-aos-delay': 100,
        'data-aos-anchor-placement': 'center-center'
      }, [
        container([
          grid({
            wrap: false,
            justify: 'between',
            align: 'stretch'
          }, [
            cell({
              small: {
                auto: true
              },
              medium: {
                column: 1,
                of: 2
              },
              large: {
                column: 1,
                of: 2
              }
            }, [logo()]),
            cell({
              small: {
                auto: true
              },
              medium: {
                column: 1,
                of: 2
              },
              large: {
                column: 1,
                of: 2
              },
              align: 'center',
              grow: 1,
              justify: 'end'
            }, [nav()])
          ])
        ]
  )])
    ])
  }
}

export default hh(Header)

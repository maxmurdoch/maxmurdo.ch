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
  display: 'flex',
  flexWrap: 'wrap',
  height: '15vmin',
  justifyContent: 'space-between',
  zIndex: 3,
  transition: 'box-shadow 200ms ease-in-out'
})

class Header extends Component {
  componentDidMount() {
    aos.init()
  }

  render() {
    return h(Sticky, {stickyStyle: {zIndex: 3}}, [
      header({
        className,
        'data-aos': 'fade-in'
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
              },
              align: 'center'
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

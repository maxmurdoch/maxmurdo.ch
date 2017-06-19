import {Component} from 'react'
import {h, hh, header} from 'react-hyperscript-helpers'
import {Sticky} from 'react-sticky'
import {css} from 'glamor'
import aos from 'aos'

import {medium, large} from '../../constants/media'
import container from '../site-container'
import logo from '../logo'
import nav from '../nav'
import grid from '../grid'
import cell from '../cell'

const className = css({
  display: `flex`,
  flexWrap: `wrap`,
  justifyContent: `space-between`,
  zIndex: 3,
  transition: `box-shadow 200ms ease-in-out`,
  [medium]: {
    height: `10vh`
  },
  [large]: {
    height: `10vh`
  }
})

class Header extends Component {
  componentDidMount() {
    aos.init()
  }

  render() {
    return h(Sticky, [
      ({style}) =>
        header(
          {
            style,
            className,
            'data-aos': `fade-in`
          },
          [
            container([
              grid({justify: `between`, align: `stretch`}, [
                cell(
                  {
                    small: {column: 1, of: 1},
                    medium: {column: 1, of: 2},
                    large: {column: 1, of: 2},
                    align: `center`
                  },
                  [logo()]
                ),
                cell(
                  {
                    small: {column: 1, of: 1},
                    medium: {column: 1, of: 2},
                    large: {column: 1, of: 2},
                    align: `center`
                  },
                  [nav()]
                )
              ])
            ])
          ]
        )
    ])
  }
}

export default hh(Header)

import R from 'ramda'
import {css} from 'glamor'
import {div} from 'react-hyperscript-helpers'

import container from '../../components/site-container'
import cell from '../../components/cell'
import crossLink from '../../components/cross-link'
import grid from '../../components/grid'
import header from '../../components/header'
import bodyText from '../../components/body-text'
import {medium, large} from '../../constants/media'

import {HEADER_HEIGHT} from '../../components/header'

const Menu = ({closeMenu, isOpen}) => {
  return div([
    header(),
    div(
      {
        className: css({
          position: 'fixed',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          overflowY: 'scroll',
          height: '100vh',
          transform: isOpen ? 'translateY(0)' : 'translateY(-150%)',
          transitionDelay: isOpen ? 0 : '100ms',
          zIndex: 2,
          [medium]: {top: HEADER_HEIGHT},
          [large]: {top: HEADER_HEIGHT}
        })
      },
      [
        crossLink(
          {
            to: '/',
            onClick: closeMenu
          },
          [
            container([
              grid({justify: 'between', align: 'center'}, [
                cell({topGutter: true}, [
                  div(
                    R.addIndex(R.map)(
                      (text, index) => {
                        return bodyText(
                          {
                            smallSize: 3,
                            mediumSize: 4,
                            size: 5,
                            className: css({
                              willChange: 'transform, opacity',
                              opacity: isOpen ? 1 : 0,
                              transform: isOpen
                                ? 'translateY(0)'
                                : 'translateY(-20px)',
                              transitionDelay: isOpen
                                ? `${R.add(R.multiply(index, 75), 150)}ms`
                                : '0',
                              transitionProperty: 'opacity, transform',
                              transitionDuration: isOpen ? '250ms' : '100ms',
                              transitionTimingFunction: 'ease-in-out'
                            })
                          },
                          [text]
                        )
                      },
                      [
                        'Hi, I’m Max. This is my tiny design and programming studio.',
                        'I tend to take responsibility for the design and build of project from beginning to end and tend not to do incremental optimisation work.',
                        'I’m booked till September, but if you would like to talk about working together, please get in touch.',
                        'Hi, I’m Max. This is my tiny design and programming studio.',
                        'I tend to take responsibility for the design and build of project from beginning to end and tend not to do incremental optimisation work.',
                        'I’m booked till September, but if you would like to talk about working together, please get in touch.'
                      ]
                    )
                  )
                ])
              ])
            ])
          ]
        )
      ]
    )
  ])
}

export default Menu

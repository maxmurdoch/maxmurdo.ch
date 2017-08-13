import R from 'ramda'
import {css} from 'glamor'
import {div} from 'react-hyperscript-helpers'

import container from '../../components/site-container'
import cell from '../../components/cell'
import crossLink from '../../components/cross-link'
import grid from '../../components/grid'
import header from '../../components/header'
import bodyText from '../../components/body-text'
import {small, medium, large} from '../../constants/media'

import space from '../../constants/space'
import {HEADER_HEIGHT} from '../../components/header'

const Menu = ({closeMenu, isOpen}) => {
  return div(
    {
      className: css({
        position: 'fixed',
        top: 0,
        bottom: isOpen ? 0 : '100%',
        right: 0,
        left: 0,
        overflowY: isOpen ? 'scroll' : 'hidden',
        zIndex: isOpen ? 3 : 1
      })
    },
    [
      header(),
      div(
        {
          className: css({
            minHeight: '100vh',
            transform: isOpen ? 'translateY(0)' : 'translateY(-150%)',
            transitionDelay: isOpen ? 0 : '100ms',
            [medium]: {marginTop: HEADER_HEIGHT},
            [large]: {marginTop: HEADER_HEIGHT}
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
                  cell([
                    div(
                      {
                        className: css({
                          [small]: {
                            marginTop: R.nth(2, space),
                            marginBottom: HEADER_HEIGHT
                          },
                          [medium]: {marginBottom: R.nth(2, space)},
                          [large]: {marginBottom: R.nth(2, space)}
                        })
                      },
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
                                  ? `${R.add(R.multiply(index, 50), 50)}ms`
                                  : '0',
                                transitionProperty: 'opacity, transform',
                                transitionDuration: '200ms',
                                transitionTimingFunction:
                                  'cubic-bezier(0.2, 0.7, 0.2, 0.8)'
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
                          'I’m booked till September, but if you would like to talk about working together, please get in touch.',
                          'I’m booked till September, but if you would like to talk about working together, please get in touch.',
                          'Hi, I’m Max. This is my tiny design and programming studio.',
                          'I tend to take responsibility for the design and build of project from beginning to end and tend not to do incremental optimisation work.',
                          'I’m booked till September, but if you would like to talk about working together, please get in touch.',
                          'Hi, I’m Max. This is my tiny design and programming studio.',
                          'I tend to take responsibility for the design and build of project from beginning to end and tend not to do incremental optimisation work.'
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
    ]
  )
}

export default Menu

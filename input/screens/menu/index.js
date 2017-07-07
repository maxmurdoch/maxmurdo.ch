import R from 'ramda'
import {css} from 'glamor'
import {div} from 'react-hyperscript-helpers'

import container from '../../components/site-container'
import stickyHeader from '../../components/sticky-header'
import cell from '../../components/cell'
import crossLink from '../../components/cross-link'
import grid from '../../components/grid'
import bodyText from '../../components/body-text'

const Menu = ({closeMenu, isOpen, children}) => {
  return div([
    stickyHeader(),
    div(
      {
        className: css({
          minHeight: '100vh',
          position: 'fixed',
          transform: isOpen ? 'translateY(0)' : 'translateY(-150%)',
          zIndex: 2
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
                    R.addIndex(R.map)(
                      (text, index) => {
                        return bodyText(
                          {
                            size: 5,
                            className: css({
                              opacity: isOpen ? 1 : 0,
                              transform: isOpen
                                ? 'translateY(0)'
                                : 'translateY(20px)',
                              transitionDelay: isOpen
                                ? `${R.add(R.multiply(index, 100), 200)}ms`
                                : '0',
                              transitionProperty: 'opacity, transform',
                              transitionDuration: isOpen ? '300ms' : '100ms',
                              transitionTimingFunction: 'ease-in-out'
                            })
                          },
                          [text]
                        )
                      },
                      [
                        'Hi, I\'m Max. I design and build digital products.',
                        'I tend to take responsibility for the design and build of project from beginning to end and tend not to do incremental optimisation work.',
                        'I\'m booked till September, but if you would like to talk about working together, please get in touch.'
                      ]
                    )
                  )
                ])
              ])
            ])
          ]
        )
      ]
    ),
    div(
      {
        className: css({
          filter: isOpen ? 'blur(12px) opacity(30%)' : 'none',
          transitionDuration: '200ms',
          transitionProperty: 'filter',
          transitionTimingFunction: 'ease-in-out',
          width: '100vw',
          minHeight: '100vh',
          height: '100%'
        })
      },
      [children]
    )
  ])
}

export default Menu

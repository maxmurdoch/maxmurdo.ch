import R from 'ramda'
import {css} from 'glamor'
import {div} from 'react-hyperscript-helpers'

import container from '../../components/site-container'
import cell from '../../components/cell'
import crossLink from '../../components/cross-link'
import grid from '../../components/grid'
import bodyText from '../../components/body-text'

const Menu = ({closeMenu, isOpen}) => {
  return div([
    div(
      {
        style: {
          position: 'fixed',
          top: '10vh',
          minHeight: '90vh',
          transform: isOpen ? 'translateY(0)' : 'translateY(-150%)',
          transitionDelay: isOpen ? 0 : '100ms',
          zIndex: 2
        }
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
    )
  ])
}

export default Menu

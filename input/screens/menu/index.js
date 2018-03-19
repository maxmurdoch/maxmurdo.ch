import {Component} from 'react'
import PropTypes from 'prop-types'
import R from 'ramda'
import {css} from 'glamor'
import {div} from 'react-hyperscript-helpers'

import bodyText from '../../components/body-text'
import cell from '../../components/cell'
import containerBox from '../../components/site-container-box'
import crossLink from '../../components/cross-link'
import grid from '../../components/grid'
import header from '../../components/header'
import link from '../../components/link'
import {medium, large} from '../../constants/media'

import space from '../../constants/space'
import {HEADER_HEIGHT} from '../../components/header'

class Menu extends Component {
  render() {
    const {closeMenu, isOpen} = this.props

    return div(
      {
        className: css({
          bottom: isOpen ? 0 : '100%',
          height: isOpen ? '100vh' : 'auto',
          display: 'flex',
          left: 0,
          position: 'fixed',
          right: 0,
          top: 0,
          width: '100%',
          zIndex: isOpen ? 3 : 1
        })
      },
      [
        header(),
        div(
          {
            className: css({
              zIndex: 3,
              width: '100%',
              transform: isOpen ? 'translateY(0)' : 'translateY(-150%)',
              transitionDelay: isOpen ? 0 : '100ms',
              [medium]: {marginTop: HEADER_HEIGHT},
              [large]: {marginTop: HEADER_HEIGHT}
            })
          },
          [
            grid({align: 'stretch'}, [
              cell([
                crossLink(
                  {
                    onClick: closeMenu,
                    style: {
                      height: '100%',
                      width: '100%',
                      display: 'flex',
                      alignItems: 'stretch'
                    }
                  },
                  [
                    containerBox([
                      grid({justify: 'between', align: 'end'}, [
                        cell({align: 'end'}, [
                          div(
                            {
                              className: css({
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-end'
                              })
                            },
                            R.addIndex(R.map)(
                              ({to, text}, index) =>
                                link(
                                  {
                                    to,
                                    onClick: closeMenu
                                  },
                                  [
                                    bodyText(
                                      {
                                        smallSize: 3,
                                        mediumSize: 4,
                                        size: 5,
                                        className: css({
                                          marginTop: R.nth(0, space),
                                          willChange: 'transform, opacity',
                                          opacity: isOpen ? 1 : 0,
                                          transform: isOpen
                                            ? 'translateY(0)'
                                            : 'translateY(-20px)',
                                          transitionDelay: isOpen
                                            ? `${R.add(
                                                R.multiply(index, 50),
                                                50
                                              )}ms`
                                            : '0',
                                          transitionProperty:
                                            'opacity, transform',
                                          transitionDuration: '200ms',
                                          transitionTimingFunction:
                                            'cubic-bezier(0.2, 0.7, 0.2, 0.8)'
                                        })
                                      },
                                      [text]
                                    )
                                  ]
                                ),
                              [
                                {text: 'Work', to: '/'},
                                {text: 'Information', to: '/work-with-me'}
                              ]
                            )
                          )
                        ])
                      ])
                    ])
                  ]
                )
              ])
            ])
          ]
        )
      ]
    )
  }
}

Menu.propTypes = {
  closeMenu: PropTypes.func,
  isOpen: PropTypes.bool
}

export default Menu

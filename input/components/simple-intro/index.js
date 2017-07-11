import {Component} from 'react'
import {h, hh, div} from 'react-hyperscript-helpers'
import {TrackDocument, Track} from 'react-track'
import {topTop, getDocumentRect} from 'react-track/tracking-formulas'
import {tween} from 'react-imation'
import {translate3d} from 'react-imation/tween-value-factories'
import {css} from 'glamor'

import container from '../site-container'
import text from '../text'
import grid from '../grid'
import cell from '../cell'

class SimpleIntro extends Component {
  constructor(props) {
    super(props)
    this.state = {
      opacity: 1
    }
  }

  render() {
    return h(TrackDocument, {formulas: [getDocumentRect, topTop]}, [
      (rect, topTop) => {
        return container([
          div(
            {
              className: css({
                boxSizing: 'border-box',
                overflowX: 'hidden',
                height: '100vh',
                maxWidth: '100%',
                width: '100vw'
              })
            },
            [
              grid({align: 'center'}, [
                cell({align: 'center'}, [
                  h(
                    Track,
                    {
                      component: 'div',
                      formulas: [topTop]
                    },
                    [
                      (Div, posTopTop) => {
                        return h(
                          Div,
                          {
                            style: tween(scrollY, [
                              [
                                0,
                                {
                                  opacity: 1,
                                  transform: translate3d(0, 0, 0)
                                }
                              ],
                              [
                                posTopTop,
                                {
                                  opacity: 0,
                                  transform: translate3d(0, 200, 0)
                                }
                              ]
                            ])
                          },
                          [
                            text(
                              {
                                tag: 'h1',
                                smallSize: 4,
                                mediumSize: 5,
                                largeSize: 7
                              },
                              'Hi'
                            ),
                            text(
                              {
                                tag: 'h1',
                                smallSize: 4,
                                mediumSize: 5,
                                largeSize: 7
                              },
                              'I’m Max'
                            ),
                            text(
                              {
                                tag: 'h1',
                                smallSize: 4,
                                mediumSize: 5,
                                largeSize: 7
                              },
                              'I make digital\u00A0products'
                            )
                          ]
                        )
                      }
                    ]
                  )
                ])
              ])
            ]
          )
        ])
      }
    ])
  }
}

export default hh(SimpleIntro)

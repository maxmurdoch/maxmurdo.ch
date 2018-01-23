import {Component} from 'react'
import {css} from 'glamor'
import {h, hh, div} from 'react-hyperscript-helpers'
import {TrackDocument, Track} from 'react-track'
import {
  topTop,
  getDocumentRect,
  calculateScrollY
} from 'react-track/tracking-formulas'
import {tween} from 'react-imation'
import {translate3d} from 'react-imation/tween-value-factories'

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
    return h(
      TrackDocument,
      {formulas: [getDocumentRect, topTop, calculateScrollY]},
      [
        (rect, topTop, scrollY) => {
          return container([
            div(
              {
                className: css({
                  boxSizing: 'border-box',
                  overflowX: 'hidden',
                  height: '100vh',
                  maxWidth: '100%',
                  width: '100%'
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
                                  size: 6,
                                  className: css({
                                    display: 'flex',
                                    flexDirection: 'column'
                                  })
                                },
                                [
                                  text(
                                    {
                                      tag: 'span',
                                      'data-aos': 'fade-up',
                                      'data-aos-duration': 500,
                                      'data-aos-anchor-placement': 'top-bottom',
                                      'data-aos-delay': 150,
                                      'data-aos-easing': 'ease-in-out-sine'
                                    },
                                    'Hi'
                                  ),
                                  text(
                                    {
                                      tag: 'span',
                                      'data-aos': 'fade-up',
                                      'data-aos-duration': 500,
                                      'data-aos-anchor-placement': 'top-bottom',
                                      'data-aos-delay': 150,
                                      'data-aos-easing': 'ease-in-out-sine'
                                    },
                                    'I’m Max'
                                  ),
                                  text(
                                    {
                                      tag: 'span',
                                      'data-aos-anchor-placement': 'top-bottom',
                                      'data-aos': 'fade-up',
                                      'data-aos-duration': 400,
                                      'data-aos-delay': 300,
                                      'data-aos-easing': 'ease-in-out-sine'
                                    },
                                    'I make digital\u00A0products'
                                  )
                                ]
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
      ]
    )
  }
}

export default hh(SimpleIntro)

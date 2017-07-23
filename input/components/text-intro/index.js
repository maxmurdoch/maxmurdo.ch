import {h, hh, div} from 'react-hyperscript-helpers'
import {css} from 'glamor'
import {TrackDocument, TrackedDiv} from 'react-track'
import {calculateScrollY, topTop} from 'react-track/tracking-formulas'
import {tween} from 'react-imation'
import {translate3d} from 'react-imation/tween-value-factories'

import text from '../text'
import grid from '../grid'
import cell from '../cell'

const TextIntro = () => {
  return h(TrackDocument, {formulas: [calculateScrollY, topTop]}, [
    (scrollY, topTop) =>
      div(
        {
          className: css({
            padding: '5vw',
            height: '90vh',
            maxWidth: '100%',
            boxSizing: 'border-box',
            display: 'flex',
            alignItems: 'center'
          })
        },
        [
          grid({wrap: false, align: 'center'}, [
            cell(
              {
                align: 'center',
                'data-aos': 'fade-in'
              },
              [
                h(TrackedDiv, {formulas: [topTop]}, [
                  posTopTop => {
                    return text(
                      {
                        size: 4,
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
                      'Hi, I’m Max'
                    )
                  }
                ])
              ]
            ),
            cell(
              {
                align: 'end',
                'data-aos': 'fade-in',
                'data-aos-delay': 150
              },
              [
                h(TrackedDiv, {formulas: [topTop]}, [
                  posTopTop => {
                    return text(
                      {
                        size: 4,
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
                              transform: translate3d(0, -700, 0)
                            }
                          ]
                        ])
                      },
                      'I design & build'
                    )
                  }
                ])
              ]
            ),
            cell(
              {
                align: 'start',
                'data-aos': 'fade-in',
                'data-aos-delay': 300
              },
              [
                h(TrackedDiv, {formulas: [topTop]}, [
                  posTopTop => {
                    return text(
                      {
                        size: 4,
                        style: tween(scrollY, [
                          [
                            0,
                            {
                              opacity: 1,
                              transform: translate3d(0, 0, 0)
                            }
                          ],
                          [
                            500,
                            {
                              opacity: 0,
                              transform: translate3d(0, 800, 0)
                            }
                          ]
                        ])
                      },
                      'digital products'
                    )
                  }
                ])
              ]
            )
          ])
        ]
      )
  ])
}

export default hh(TextIntro)

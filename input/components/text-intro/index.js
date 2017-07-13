import {h, hh, div} from 'react-hyperscript-helpers'
import {css} from 'glamor'
import {TrackDocument, Track} from 'react-track'
import {calculateScrollY, topTop} from 'react-track/tracking-formulas'
import {tween} from 'react-imation'
import {rgba} from 'react-imation/tween-value-factories'

import text from '../text'
import grid from '../grid'

const TextIntro = () => {
  return h(TrackDocument, {formulas: [calculateScrollY]}, [
    scrollY =>
      div(
        {
          className: css({
            padding: '5vw',
            height: '100vh',
            maxWidth: '100%',
            boxSizing: 'border-box',
            display: 'flex',
            alignItems: 'center'
          })
        },
        [
          grid(
            {
              align: 'center'
            },
            [
              h(Track, {component: 'div'}, [
                Div => {
                  console.log(scrollY)
                  return h(
                    Div,
                    {
                      style: tween(scrollY, [
                        [0, {backgroundColor: rgba(0, 0, 170, 1)}],
                        [200, {backgroundColor: rgba(40, 73, 7, 1)}],
                        [400, {backgroundColor: rgba(170, 0, 0, 1)}],
                        [600, {backgroundColor: rgba(92, 131, 47, 1)}]
                      ])
                    },
                    [
                      text(
                        {
                          size: 4,
                          className: css({color: 'white'})
                        },
                        'Hi I\'m Max'
                      )
                    ]
                  )
                }
              ])
            ]
          )
        ]
      )
  ])
}

export default hh(TextIntro)

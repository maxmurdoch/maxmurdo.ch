import {hh, h, div} from 'react-hyperscript-helpers'
import R from 'ramda'
import {css} from 'glamor'

import space from '../../constants/space'
import goCardless1 from '../../images/gocardless-1.png'

import link from '../link'
import screenImage from '../screen-image'
import grid from '../grid'
import cell from '../cell'
import text from '../text'
import blurLink from '../blur-link'

const GoCardlessText = () =>
  grid([
    cell(
      {
        small: {column: 1, of: 1},
        medium: {column: 1, of: 3},
        large: {column: 1, of: 3}
      },
      [
        div(
          {
            'data-aos': 'fade-in',
            'data-aos-delay': 200,
            'data-aos-anchor-placement': 'top-bottom'
          },
          [
            text(
              {
                tag: 'h1',
                smallSize: 2,
                size: 3,
                className: css({margin: 0})
              },
              'GoCardless'
            )
          ]
        )
      ]
    ),
    cell(
      {
        small: {column: 1, of: 1},
        medium: {column: 2, of: 3},
        large: {column: 2, of: 3},
        bottomGutter: true
      },
      [
        div(
          {
            'data-aos': 'fade-in',
            'data-aos-delay': 400,
            'data-aos-anchor-placement': 'top-bottom'
          },
          [
            text(
              {
                tag: 'p',
                smallSize: 2,
                size: 3,
                shade: 2,
                className: css({margin: 0})
              },
              [
                '2 years doing design and full-stack web development at ',
                link({target: 'external', to: 'https://gocardless.com'}, [
                  'GoCardless'
                ]),
                ' during a major rewrite of the core product.'
              ]
            )
          ]
        )
      ]
    )
  ])

const GoCardlessImage = () =>
  grid([
    cell({bottomGutter: true}, [
      div(
        {
          'data-aos': 'fade-up',
          'data-aos-offset': 100,
          'data-aos-anchor-placement': 'top-bottom'
        },
        [screenImage({src: goCardless1})]
      )
    ])
  ])

const GoCardless = () => {
  return div(
    {
      className: css({
        paddingTop: R.nth(4, space),
        marginTop: R.nth(4, space),
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      })
    },
    [h(GoCardlessImage), h(GoCardlessText)]
  )
}

export default hh(GoCardless)

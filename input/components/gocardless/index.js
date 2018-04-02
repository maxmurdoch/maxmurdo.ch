import {hh, h, div} from 'react-hyperscript-helpers'
import R from 'ramda'
import {css} from 'glamor'

import containerBox from '../site-container-box'
import goCardless1 from '../../images/gocardless-1.png'
import homePageProjectSection from '../home-page-project-section'

import link from '../link'
import screenImage from '../screen-image'
import imageRow from '../image-row'
import grid from '../grid'
import cell from '../cell'
import text from '../text'
import space from '../../constants/space'
import {lightGrey} from '../../constants/colour'

const GoCardlessText = () =>
  div(
    {
      className: css({
        marginTop: R.nth(3, space)
      })
    },
    [
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
                'data-aos-delay': 150,
                'data-aos-anchor-placement': 'top-bottom'
              },
              [
                text(
                  {
                    tag: 'h1',
                    smallSize: 2,
                    size: 3,
                    largeSize: 4,
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
                'data-aos-delay': 300,
                'data-aos-anchor-placement': 'top-bottom'
              },
              [
                text(
                  {
                    tag: 'p',
                    smallSize: 2,
                    size: 3,
                    largeSize: 4,
                    shade: 2,
                    className: css({margin: 0})
                  },
                  [
                    '2 years doing design and full-stack web development at ',
                    link({target: 'external', to: 'https://gocardless.com'}, [
                      'GoCardless'
                    ]),
                    ' during a major rewrite of the core product'
                  ]
                )
              ]
            )
          ]
        )
      ])
    ]
  )

const GoCardlessImage = () =>
  grid([
    cell([
      containerBox(
        {
          className: css({
            backgroundColor: lightGrey
          })
        },
        [imageRow({images: [goCardless1]})]
      )
    ])
  ])

const GoCardless = () => {
  return homePageProjectSection([
    div(
      {
        className: css({
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        })
      },
      [h(GoCardlessImage), h(GoCardlessText)]
    )
  ])
}

export default hh(GoCardless)

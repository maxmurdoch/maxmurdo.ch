import {hh, div} from 'react-hyperscript-helpers'
import R from 'ramda'
import {css} from 'glamor'

import space from '../../constants/space'
import goCardless1 from '../../images/gocardless-1.png'

import link from '../link'
import screenImage from '../screen-image'
import grid from '../grid'
import cell from '../cell'
import text from '../text'

const GoCardless = () => {
  return div(
    {
      className: css({
        paddingTop: R.nth(4, space),
        marginTop: R.nth(4, space),
        minHeight: `100vh`,
        display: `flex`,
        flexDirection: `column`,
        justifyContent: `center`
      })
    },
    [
      grid([
        cell(
          {
            small: {column: 1, of: 1},
            medium: {column: 1, of: 3},
            large: {column: 1, of: 2},
            bottomGutter: true
          },
          [
            div(
              {
                'data-aos': `fade-in`,
                'data-aos-delay': 200,
                'data-aos-anchor-placement': `top-bottom`
              },
              [
                text(
                  {
                    tag: `h1`,
                    size: 2,
                    largeSize: 3,
                    className: css({margin: 0})
                  },
                  `GoCardless`
                )
              ]
            )
          ]
        ),
        cell(
          {
            small: {column: 1, of: 1},
            medium: {column: 2, of: 3},
            large: {column: 1, of: 2},
            bottomGutter: true
          },
          [
            div(
              {
                'data-aos': `fade-in`,
                'data-aos-delay': 400,
                'data-aos-anchor-placement': `top-bottom`
              },
              [
                text(
                  {
                    tag: `p`,
                    size: 2,
                    largeSize: 3,
                    shade: 2,
                    className: css({margin: 0})
                  },
                  [
                    `I spent 2 years at `,
                    link({href: `https://gocardless.com`}, [`GoCardless`]),
                    ` doing a mix of design and full-stack engineering during a major redo of the core product.`
                  ]
                )
              ]
            )
          ]
        )
      ]),
      grid([
        cell({bottomGutter: true}, [
          div(
            {
              'data-aos': `fade-up`,
              'data-aos-delay': 400,
              'data-aos-offset': 100,
              'data-aos-anchor-placement': `top-bottom`
            },
            [screenImage({src: goCardless1})]
          )
        ])
      ])
    ]
  )
}

export default hh(GoCardless)

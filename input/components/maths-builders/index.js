import R from 'ramda'
import {withRouter} from 'react-router'
import PropTypes from 'prop-types'
import {hh, div, img} from 'react-hyperscript-helpers'
import {css} from 'glamor'

import firstPage from '../../images/first-page.svg'
import geometryAndMeasures from '../../images/maths-builder-geometry-and-measures-1.svg'
import mathsBuilderProfile from '../../images/maths-builder-profile.svg'
import arrowUpRight from '../../assets/arrow-up-right-big.svg'

import space from '../../constants/space'
import imageRow from '../image-row'
import link from '../link'
import grid from '../grid'
import cell from '../cell'
import text from '../text'

const MathsBuilders = ({match}) => {
  return div(
    {
      className: css({
        minHeight: `80vh`,
        display: `flex`,
        flexDirection: `column`,
        justifyContent: `center`,
        alignItems: `flex-start`
      })
    },
    [
      grid({align: `baseline`}, [
        cell(
          {
            small: {column: 1, of: 1},
            medium: {column: 1, of: 3},
            large: {column: 3, of: 9},
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
                  `Maths Builders`
                )
              ]
            )
          ]
        ),
        cell(
          {
            small: {column: 1, of: 1},
            medium: {column: 1, of: 3},
            large: {column: 5, of: 9},
            bottomGutter: true
          },
          [
            div(
              {
                'data-aos': `fade-in`,
                'data-aos-delay': 400,
                'data-aos-anchor-placement': `top-bottom`,
                className: css({
                  display: `flex`,
                  flexWrap: `wrap`
                })
              },
              [
                text(
                  {
                    tag: `p`,
                    size: 2,
                    largeSize: 3,
                    shade: 1,
                    className: css({margin: 0})
                  },
                  [
                    `I worked with the `,
                    link(
                      {target: `external`, href: `http://www.eng.cam.ac.uk/`},
                      `University of Cambridge`
                    ),
                    ` to design an app teaches maths on a phone.`
                  ]
                )
              ]
            )
          ]
        ),
        cell(
          {
            small: {column: 1, of: 1},
            medium: {column: 1, of: 3},
            large: {column: 1, of: 9},
            bottomGutter: true
          },
          [
            div(
              {
                'data-aos': `fade-in`,
                'data-aos-delay': 400,
                'data-aos-anchor-placement': `top-bottom`,
                className: css({
                  display: `flex`,
                  width: `100%`,
                  flexWrap: `wrap`
                })
              },
              [
                link(
                  {
                    className: css({
                      marginLeft: `auto`,
                      display: `flex`
                    }),
                    href: `${match.url}maths-builders`
                  },
                  [
                    img({
                      src: arrowUpRight,
                      className: css({
                        transform: `translateY(8px)`,
                        width: 32,
                        height: 32
                      })
                    })
                  ]
                )
              ]
            )
          ]
        )
      ]),
      grid([
        cell([
          imageRow({
            images: [firstPage, geometryAndMeasures, mathsBuilderProfile]
          })
        ])
      ])
    ]
  )
}

MathsBuilders.propTypes = {
  match: PropTypes.object.isRequired
}

export default hh(withRouter(MathsBuilders))

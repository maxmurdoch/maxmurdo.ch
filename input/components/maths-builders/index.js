import {withRouter} from 'react-router'
import PropTypes from 'prop-types'
import {hh, h, div} from 'react-hyperscript-helpers'
import {css} from 'glamor'
import Media from 'react-media'

import firstPage from '../../images/first-page.svg'
import geometryAndMeasures from '../../images/maths-builder-geometry-and-measures-1.svg'
import mathsBuilderProfile from '../../images/maths-builder-profile.svg'

import screenImage from '../screen-image'
import imageRow from '../image-row'
import link from '../link'
import grid from '../grid'
import cell from '../cell'
import text from '../text'
import {smallWidth} from '../../constants/media'

const MathsBuildersText = () => {
  return grid({align: 'baseline', justify: 'between'}, [
    cell(
      {
        small: {column: 1, of: 1},
        medium: {column: 1, of: 3},
        large: {column: 1, of: 3},
        bottomGutter: true
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
                size: 3,
                className: css({margin: 0})
              },
              'Maths Builders'
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
            'data-aos-anchor-placement': 'top-bottom',
            className: css({
              display: 'flex',
              flexWrap: 'wrap'
            })
          },
          [
            text(
              {
                tag: 'p',
                size: 3,
                shade: 2,
                className: css({margin: 0})
              },
              [
                'I worked with the ',
                link(
                  {target: 'external', to: 'http://www.eng.cam.ac.uk/'},
                  'University of Cambridge'
                ),
                ' to design a way to teach GCSE maths on a phone.'
              ]
            )
          ]
        )
      ]
    )
  ])
}

const MathsBuilders = () => {
  return div(
    {
      className: css({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start'
      })
    },
    [
      h(Media, {query: smallWidth}, [
        matches => {
          return matches
            ? grid({justify: 'center'}, [
                cell(
                  {
                    align: 'center',
                    topGutter: true,
                    bottomGutter: true,
                    small: {column: 1, of: 2},
                    medium: {column: 1, of: 2},
                    large: {column: 1, of: 2}
                  },
                  [screenImage({src: firstPage})]
                ),
                cell([h(MathsBuildersText)])
              ])
            : grid([
                cell([h(MathsBuildersText)]),
                cell([
                  imageRow({
                    to: '/maths-builders',
                    images: [
                      firstPage,
                      geometryAndMeasures,
                      mathsBuilderProfile
                    ]
                  })
                ])
              ])
        }
      ])
    ]
  )
}

MathsBuilders.propTypes = {
  match: PropTypes.object.isRequired
}

export default hh(withRouter(MathsBuilders))

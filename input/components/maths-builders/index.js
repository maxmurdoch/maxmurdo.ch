import {withRouter} from 'react-router'
import PropTypes from 'prop-types'
import {hh, div} from 'react-hyperscript-helpers'
import {css} from 'glamor'

import firstPage from '../../images/first-page.svg'
import geometryAndMeasures from '../../images/maths-builder-geometry-and-measures-1.svg'
import mathsBuilderProfile from '../../images/maths-builder-profile.svg'

import imageRow from '../image-row'
import link from '../link'
import grid from '../grid'
import cell from '../cell'
import text from '../text'

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
      grid({align: 'baseline', justify: 'between'}, [
        cell(
          {
            small: {column: 1, of: 1},
            medium: {column: 2, of: 6},
            large: {column: 2, of: 6},
            bottomGutter: true
          },
          [
            text(
              {
                tag: 'h1',
                size: 3,
                largeSize: 3,
                className: css({margin: 0})
              },
              'Maths Builders'
            )
          ]
        ),
        cell(
          {
            small: {column: 1, of: 1},
            medium: {column: 1, of: 2},
            large: {column: 1, of: 2},
            bottomGutter: true
          },
          [
            text(
              {
                tag: 'p',
                size: 3,
                largeSize: 3,
                shade: 2,
                className: css({margin: 0})
              },
              [
                'I worked with the ',
                link(
                  {target: 'external', to: 'http://www.eng.cam.ac.uk/'},
                  'University of Cambridge'
                ),
                ' to design an app teaches maths on a phone.'
              ]
            )
          ]
        )
      ]),
      grid([
        cell([
          imageRow({
            to: '/maths-builders',
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

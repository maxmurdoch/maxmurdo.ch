import {withRouter} from 'react-router'
import R from 'ramda'
import PropTypes from 'prop-types'
import {hh, h, div} from 'react-hyperscript-helpers'
import {css} from 'glamor'

import firstPage from '../../images/mayhem-journal.png'

import container from '../site-container'
import homePageProjectSection from '../home-page-project-section'
import imageRow from '../image-row'
import {lightGrey} from '../../constants/colour'
import grid from '../grid'
import space from '../../constants/space'
import cell from '../cell'
import text from '../text'

const MayhemText = () => {
  return grid({align: 'baseline', justify: 'between'}, [
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
            'data-aos-delay': 100,
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
              'Mayhem'
            )
          ]
        )
      ]
    ),
    cell(
      {
        small: {column: 1, of: 1},
        medium: {column: 2, of: 3},
        large: {column: 2, of: 3}
      },
      [
        div(
          {
            'data-aos': 'fade-in',
            'data-aos-delay': 200,
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
                smallSize: 2,
                size: 3,
                shade: 2,
                className: css({margin: 0})
              },
              ['Branding and website design for a british film makers studio.']
            )
          ]
        )
      ]
    )
  ])
}

const Mayhem = () => {
  return homePageProjectSection([
    div(
      {
        className: css({
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start'
        })
      },
      [
        grid([
          cell([
            container(
              {
                top: true,
                className: css({
                  backgroundColor: lightGrey
                })
              },
              [imageRow({images: [firstPage]})]
            )
          ]),
          cell({className: css({marginTop: R.nth(3, space)})}, [h(MayhemText)])
        ])
      ]
    )
  ])
}

Mayhem.propTypes = {
  match: PropTypes.object.isRequired
}

export default hh(withRouter(Mayhem))

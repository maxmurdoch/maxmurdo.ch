import {withRouter} from 'react-router'
import PropTypes from 'prop-types'
import R from 'ramda'
import {hh, h, div} from 'react-hyperscript-helpers'
import {css} from 'glamor'

import firstPage from '../../images/adaptive-lab-intro.png'
import homePageProjectSection from '../home-page-project-section'

import container from '../site-container'
import space from '../../constants/space'
import imageRow from '../image-row'
import grid from '../grid'
import cell from '../cell'
import text from '../text'
import blurLink from '../../components/blur-link'
import {lightGrey} from '../../constants/colour'

const AdaptiveLabText = () => {
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
              'Adaptive Lab'
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
              [
                'Leading development and helping out with the design on a new site for the London based digital product studio.'
              ]
            )
          ]
        )
      ]
    )
  ])
}

const AdaptiveLab = () => {
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
              [
                blurLink(
                  {
                    text: 'View website',
                    target: 'external',
                    to: 'https://adaptivelab.studio'
                  },
                  [imageRow({images: [firstPage]})]
                )
              ]
            )
          ]),
          cell({className: css({marginTop: R.nth(3, space)})}, [
            h(AdaptiveLabText)
          ])
        ])
      ]
    )
  ])
}

AdaptiveLab.propTypes = {
  match: PropTypes.object.isRequired
}

export default hh(withRouter(AdaptiveLab))

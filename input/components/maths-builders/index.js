import {withRouter} from 'react-router'
import PropTypes from 'prop-types'
import {hh, h, div} from 'react-hyperscript-helpers'
import {css} from 'glamor'
import {Media} from 'react-media'

import firstPage from '../../images/sign-in-one.png'
import signInOne from '../../images/sign-in-two.png'
import signInTwo from '../../images/sign-in-three.png'
import homeScreen from '../../assets/maths-builders-home-screen.svg'

import screenImage from '../screen-image'
import imageRow from '../image-row'
import grid from '../grid'
import cell from '../cell'
import text from '../text'
import blurLink from '../../components/blur-link'
import {smallWidth} from '../../constants/media'

const MathsBuildersText = () => {
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
                smallSize: 2,
                size: 3,
                shade: 2,
                className: css({margin: 0})
              },
              [
                'Research, brand, design and a prototype for a new app that teaches maths on a phone.'
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
      grid([
        cell({bottomGutter: true}, [
          blurLink({to: '/maths-builders'}, [
            h(Media, {query: smallWidth}, [
              matches =>
                matches
                  ? screenImage({src: homeScreen})
                  : imageRow({
                      images: [firstPage, signInOne, signInTwo]
                    })
            ])
          ])
        ]),
        cell([h(MathsBuildersText)])
      ])
    ]
  )
}

MathsBuilders.propTypes = {
  match: PropTypes.object.isRequired
}

export default hh(withRouter(MathsBuilders))

import {h, hh, div} from 'react-hyperscript-helpers'
import R from 'ramda'
import {css} from 'glamor'
import Media from 'react-media'

import codeAtUni1 from '../../images/code-at-uni-1.png'
import codeAtUni2 from '../../images/code-at-uni-2.png'

import space from '../../constants/space'
import container from '../site-container'
import cell from '../cell'
import homePageProjectSection from '../home-page-project-section'
import grid from '../grid'
import screenImage from '../screen-image'
import imageRow from '../image-row'
import text from '../text'
import {lightGrey} from '../../constants/colour'

import {smallWidth} from '../../constants/media'

const CodeAtUniText = () => {
  return grid([
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
                largeSize: 4,
                className: css({margin: 0})
              },
              'Code at Uni'
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
                'MVP brand and website for a new education startup that teaches uni students to code'
              ]
            )
          ]
        )
      ]
    )
  ])
}

const CodeAtUniImages = () =>
  container(
    {
      top: true,
      className: css({
        backgroundColor: lightGrey
      })
    },
    [
      grid({align: 'start'}, [
        cell(
          {
            small: {column: 1, of: 1},
            medium: {column: 2, of: 3},
            large: {column: 2, of: 3},
            bottomGutter: true,
            'data-aos': 'fade-up',
            'data-aos-delay': 150
          },
          [screenImage({src: codeAtUni1})]
        ),
        cell(
          {
            small: {column: 1, of: 1},
            medium: {column: 1, of: 3},
            large: {column: 1, of: 3},
            bottomGutter: true,
            'data-aos': 'fade-up',
            'data-aos-delay': 300
          },
          [screenImage({src: codeAtUni2})]
        )
      ])
    ]
  )

const CodeAtUni = () => {
  return homePageProjectSection([
    div(
      {
        className: css({
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        })
      },
      [
        h(Media, {query: smallWidth}, [
          matches =>
            matches
              ? grid({align: 'start'}, [
                  cell([
                    container(
                      {
                        top: true,
                        className: css({
                          backgroundColor: lightGrey
                        })
                      },
                      [imageRow({images: [codeAtUni1]})]
                    )
                  ]),
                  cell({className: css({marginTop: R.nth(3, space)})}, [
                    h(CodeAtUniText)
                  ])
                ])
              : grid({align: 'start'}, [
                  cell([h(CodeAtUniImages)]),
                  cell({className: css({marginTop: R.nth(3, space)})}, [
                    h(CodeAtUniText)
                  ])
                ])
        ])
      ]
    )
  ])
}

export default hh(CodeAtUni)

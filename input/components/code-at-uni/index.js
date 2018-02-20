import {h, hh, div} from 'react-hyperscript-helpers'
import {css} from 'glamor'
import R from 'ramda'
import Media from 'react-media'

import codeAtUni1 from '../../images/code-at-uni-1.png'
import codeAtUni2 from '../../images/code-at-uni-2.png'

import cell from '../cell'
import grid from '../grid'
import link from '../link'
import screenImage from '../screen-image'
import text from '../text'

import {smallWidth} from '../../constants/media'
import space from '../../constants/space'

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
                'MVP brand and website for a new education startup that teaches uni students to code.'
              ]
            )
          ]
        )
      ]
    )
  ])
}

const CodeAtUniImages = () =>
  grid({align: 'start'}, [
    cell(
      {
        small: {column: 1, of: 1},
        medium: {column: 2, of: 3},
        large: {column: 2, of: 3},
        bottomGutter: true,
        'data-aos': 'fade-up',
        'data-aos-delay': 200
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
        'data-aos-delay': 400
      },
      [screenImage({src: codeAtUni2})]
    )
  ])

const CodeAtUni = () => {
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
    [
      h(Media, {query: smallWidth}, [
        matches =>
          matches
            ? grid({align: 'start'}, [
                cell({bottomGutter: true}, [screenImage({src: codeAtUni1})]),
                cell([h(CodeAtUniText)])
              ])
            : grid({align: 'start'}, [
                cell([h(CodeAtUniImages)]),
                cell([h(CodeAtUniText)])
              ])
      ])
    ]
  )
}

export default hh(CodeAtUni)

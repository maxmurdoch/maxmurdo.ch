import {hh, div} from 'react-hyperscript-helpers'

import codeAtUni1 from '../../images/code-at-uni-1.png'
import codeAtUni2 from '../../images/code-at-uni-2.png'
import screenImage from '../screen-image'
import blurLink from '../blur-link'
import grid from '../grid'
import cell from '../cell'

const CodeAtUniImages = () =>
  blurLink([
    grid({align: `start`}, [
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
              'data-aos': `fade-up`,
              'data-aos-delay': 200,
              'data-aos-offset': 100,
              'data-aos-anchor-placement': `top-bottom`
            },
            [screenImage({src: codeAtUni1})]
          )
        ]
      ),
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
              'data-aos': `fade-up`,
              'data-aos-delay': 400,
              'data-aos-offset': 100,
              'data-aos-anchor-placement': `top-bottom`
            },
            [screenImage({src: codeAtUni2})]
          )
        ]
      )
    ])
  ])

export default hh(CodeAtUniImages)

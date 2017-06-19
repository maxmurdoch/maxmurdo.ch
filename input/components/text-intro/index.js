import R from 'ramda'
import {hh, div} from 'react-hyperscript-helpers'
import {v4} from 'uuid'
import {css} from 'glamor'

import {black} from '../../constants/colour'
import text from '../text'
import grid from '../grid'
import cell from '../cell'

const random = n => Math.floor(R.multiply(Math.random(), n))

const textIntroCell = (alignFn, justifyFn, text) =>
  cell(
    {
      small: {column: 1, of: 1},
      medium: {column: 1, of: 3},
      large: {column: 1, of: 3},
      align: alignFn(),
      justifyFn: justifyFn()
    },
    [text]
  )

const TextIntro = () => {
  const scales = [
    `#F3E5F5`,
    `#E3F2FD`,
    `#E8F5E9`,
    `#FCE4EC`,
    `#EDE7F6`,
    `#FFFDE7`
  ]
  const backgroundColor = R.always(R.nth(random(R.length(scales)), scales))
  const color = R.last(black)

  const validAlignments = [`start`, `center`, `end`]
  const randomAlign = () =>
    R.nth(random(R.length(validAlignments)), validAlignments)

  const validJustify = [`start`, `center`, `end`]
  const randomJustify = () =>
    R.nth(random(R.length(validJustify)), validJustify)

  const createText = children =>
    text(
      {
        className: css({
          margin: 0,
          color
        }),
        key: v4(),
        tag: `p`,
        size: 4
      },
      children
    )

  const first = createText(`Hi, I'm Max`)
  const second = createText(`I design &\u00A0build`)
  const third = createText(`digital products`)

  return div(
    {
      className: css({
        backgroundColor: backgroundColor(),
        padding: `5vw`,
        height: `100vh`,
        maxWidth: `100%`,
        boxSizing: `border-box`
      })
    },
    [
      grid([
        textIntroCell(randomAlign, randomJustify, first),
        textIntroCell(randomAlign, randomJustify, second),
        textIntroCell(randomAlign, randomJustify, third)
      ])
    ]
  )
}

export default hh(TextIntro)

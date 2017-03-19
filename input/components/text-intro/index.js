import { hh, div } from 'react-hyperscript-helpers'
import { v4 } from 'uuid'
import R from 'ramda'

import media from '../../constants/media'
import { black } from '../../constants/colour'
import text from '../text'
import style from '../../helpers/style'
import grid from '../grid'
import cell from '../cell'

const random = (n) => Math.floor(Math.random() * n)

const TextIntro = () => {
  const scales = ['#F3E5F5', '#E3F2FD', '#E8F5E9', '#FCE4EC', '#EDE7F6', '#FFFDE7']
  const backgroundColor = R.nth(
    random(R.length(scales)),
    scales)
  const color = R.last(black)

  const validAlignments = ['start', 'center', 'end']
  const randomAlign = () => R.nth(
    random(R.length(validAlignments)),
    validAlignments)

  const validTextAlignments = ['left', 'center', 'right']
  const randomTextAlign = () => R.nth(
    random(R.length(validTextAlignments)),
    validTextAlignments
  )

  const textStyle = {
    margin: 0,
    height: '100%',
    color,
    textAlign: 'left',
  }

  const first = text({
    className: style(R.merge(textStyle, {
      [R.prop('small', media)]: { textAlign: randomTextAlign() },
    })),
    key: v4(),
    tag: 'p',
    size: 4,
  }, 'Hi, I’m Max')

  const second = text({
    className: style(R.merge(textStyle, {
      [R.prop('small', media)]: { textAlign: randomTextAlign() },
    })),
    key: v4(),
    tag: 'p',
    size: 4,
  }, 'I design &\u00A0build')

  const third = text({
    className: style(R.merge(textStyle, {
      [R.prop('small', media)]: { textAlign: randomTextAlign() },
    })),
    key: v4(),
    tag: 'p',
    size: 4,
  }, 'digital products')

  return div({
    className: style({
      backgroundColor,
      padding: '5%',
      height: '100%',
      boxSizing: 'border-box',
    }),
  }, [
    grid([
      cell({
        small: {
          column: 1,
          of: 1,
        },
        medium: {
          column: 1,
          of: 3,
        },
        large: {
          column: 1,
          of: 3,
        },
        alignSelf: randomAlign(),
      }, [first]),
      cell({
        small: {
          column: 1,
          of: 1,
        },
        medium: {
          column: 2,
          of: 3,
        },
        large: {
          column: 2,
          of: 3,
        },
        alignSelf: randomAlign(),
      }, [second]),
      cell({
        small: {
          column: 1,
          of: 1,
        },
        medium: {
          column: 3,
          of: 3,
        },
        large: {
          column: 3,
          of: 3,
        },
        alignSelf: randomAlign(),
      }, [third]),
    ]),
  ])
}

export default hh(TextIntro)

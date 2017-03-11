import { hh, div } from 'react-hyperscript-helpers'
import { v4 } from 'uuid'
import R from 'ramda'

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

  const textClass = style({
    margin: 0,
    height: '100%',
    color,
  })

  const first = text({
    className: textClass,
    key: v4(),
    tag: 'p',
    size: 4,
  }, 'Hi, I’m Max')

  const second = text({
    className: textClass,
    key: v4(),
    tag: 'p',
    size: 4,
  }, 'I design &\u00A0build')

  const third = text({
    className: textClass,
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
        col: 12,
        alignSelf: randomAlign(),
        mediumCol: 4,
      }, [first]),
      cell({
        col: 12,
        alignSelf: randomAlign(),
        mediumCol: 4,
      }, [second]),
      cell({
        col: 12,
        alignSelf: randomAlign(),
        mediumCol: 4,
      }, [third]),
    ]),
  ])
}

export default hh(TextIntro)

import {hh, div} from 'react-hyperscript-helpers'
import {v4} from 'uuid'
import {css} from 'glamor'
import R from 'ramda'

import {black} from '../../constants/colour'
import text from '../text'
import grid from '../grid'
import cell from '../cell'

const random = n => Math.floor(Math.random() * n)

const TextIntro = () => {
  const scales = [
    '#F3E5F5',
    '#E3F2FD',
    '#E8F5E9',
    '#FCE4EC',
    '#EDE7F6',
    '#FFFDE7'
  ]
  const backgroundColor = R.nth(random(R.length(scales)), scales)
  const color = R.last(black)

  const validAlignments = ['start', 'center', 'end']
  const randomAlign = () => R.nth(random(R.length(validAlignments)), validAlignments)

  const validJustify = ['start', 'center', 'end']
  const randomJustify = () => R.nth(random(R.length(validJustify)), validJustify)

  const first = text({
    className: css({
      margin: 0,
      color
    }),
    key: v4(),
    tag: 'p',
    size: 4
  }, 'Hi, I’m Max')

  const second = text({
    className: css({
      margin: 0,
      height: '100%',
      color
    }),
    key: v4(),
    tag: 'p',
    size: 4
  }, 'I design &\u00A0build')

  const third = text({
    className: css({
      margin: 0,
      color
    }),
    key: v4(),
    tag: 'p',
    size: 4
  }, 'digital products')

  return div({
    className: css({
      backgroundColor,
      padding: '5vmin',
      height: '100vmin',
      maxWidth: '100%',
      boxSizing: 'border-box'
    })
  }, [grid([
    cell({
      small: {
        column: 1,
        of: 1
      },
      medium: {
        column: 1,
        of: 3
      },
      large: {
        column: 1,
        of: 3
      },
      alignSelf: randomAlign()
    }, [grid({
      justify: randomJustify()
    }, [cell({
      small: {
        auto: true
      }
    }, [first])])]),
    cell({
      small: {
        column: 1,
        of: 1
      },
      medium: {
        column: 1,
        of: 3
      },
      large: {
        column: 1,
        of: 3
      },
      alignSelf: randomAlign()
    }, [grid({
      justify: randomJustify()
    }, [cell({
      small: {
        auto: true
      }
    }, [second])])]),
    cell({
      small: {
        column: 1,
        of: 1
      },
      medium: {
        column: 1,
        of: 3
      },
      large: {
        column: 1,
        of: 3
      },
      alignSelf: randomAlign()
    }, [grid({
      justify: randomJustify()
    }, [cell({
      small: {
        auto: true
      }
    }, [third])])])
  ])])
}

export default hh(TextIntro)

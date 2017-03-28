import {hh, div} from 'react-hyperscript-helpers'
import R from 'ramda'

import space from '../../constants/space'
import {css} from 'glamor'
import codeAtUni1 from '../../images/code-at-uni-1.png'
import codeAtUni2 from '../../images/code-at-uni-2.png'

import screenImage from '../screen-image'
import grid from '../grid'
import cell from '../cell'
import text from '../text'

const CodeAtUni = () => div({
  className: css({
    paddingTop: R.nth(6, space),
    marginTop: R.nth(6, space),
    paddingBottom: R.nth(6, space),
    marginBottom: R.nth(6, space)
  })
}, [
  grid([
    cell({
      small: {
        column: 1,
        of: 1
      },
      medium: {
        column: 1,
        of: 2
      },
      large: {
        column: 1,
        of: 2
      },
      bottomGutter: true
    }, [text({
      tag: 'h1',
      size: 2,
      className: css({margin: 0})
    }, 'Code at Uni')]),
    cell({
      small: {
        column: 1,
        of: 1
      },
      medium: {
        column: 1,
        of: 2
      },
      large: {
        column: 1,
        of: 2
      },
      bottomGutter: true
    }, [text({
      tag: 'p',
      size: 2,
      shade: 2,
      className: css({margin: 0})
    }, 'I made a v1 of a new brand and website for Code at Uni, the new education startup that wants to teach all students to code.')])]),
  grid({
    align: 'center'
  }, [
    cell({
      small: {
        column: 1,
        of: 1
      },
      medium: {
        column: 2,
        of: 3
      },
      large: {
        column: 2,
        of: 3
      },
      bottomGutter: true
    }, [
      screenImage({src: codeAtUni1})
    ]),
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
      bottomGutter: true
    }, [
      screenImage({src: codeAtUni2})
    ])
  ])
])

export default hh(CodeAtUni)

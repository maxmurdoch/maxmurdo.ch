import { hh, div } from 'react-hyperscript-helpers'
import R from 'ramda'

import space from '../../constants/space'
import style from '../../helpers/style'
import goCardless1 from '../../images/gocardless-1.png'

import screenImage from '../screen-image'
import grid from '../grid'
import cell from '../cell'
import text from '../text'

const GoCardless = () => div({
  className: style({
    paddingTop: R.nth(8, space),
    marginTop: R.nth(8, space),
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
        of: 2,
      },
      large: {
        column: 1,
        of: 2,
      },
    }, [text({
      tag: 'h1',
      size: 3,
    }, 'GoCardless')]),
    cell({
      small: {
        column: 1,
        of: 1,
      },
      medium: {
        column: 2,
        of: 2,
      },
      large: {
        column: 2,
        of: 2,
      },
    }, [text({
      tag: 'p',
      size: 3,
    }, 'I spent 2 years as a designer and software engineer at GoCardless, where I focussed on the second version of the core product, designing and building components for a dashboard or public facing APIs.')]),
    cell({
      col: 12,
    }, [
      screenImage({ src: goCardless1 }),
    ]),
  ]),
])

  export default hh(GoCardless)

import R from 'ramda'
import {hh} from 'react-hyperscript-helpers'
import {css} from 'glamor'

import space from '../../constants/space'
import text from '../text'
import link from '../link'

const className = css({
  display: 'flex',
  paddingTop: R.nth(1, space),
  paddingBottom: R.nth(1, space),
  alignSelf: 'stretch',
  alignItems: 'center',
  lineHeight: 1
})

const Logo = () =>
  link({to: '/'}, [
    text(
      {
        tag: 'h1',
        size: 3,
        className
      },
      'Max Murdoch'
    )
  ])

export default hh(Logo)

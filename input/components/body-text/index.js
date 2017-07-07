import R from 'ramda'
import {css} from 'glamor'
import {hh} from 'react-hyperscript-helpers'

import space from '../../constants/space'

import text from '../text'

const BodyText = ({children, ...props}) =>
  text(
    {
      className: css({
        marginBottom: R.nth(2, space)
      }),
      ...props
    },
    [children]
  )

export default hh(BodyText)

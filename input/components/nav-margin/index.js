import {css} from 'glamor'
import {hh, div} from 'react-hyperscript-helpers'

import {small} from '../../constants/gutter'
import {medium} from '../../constants/media'

const navMargin = hh(() =>
  div({
    className: css({
      marginBottom: small,
      [medium]: {marginBottom: 0}
    })
  })
)

export default navMargin

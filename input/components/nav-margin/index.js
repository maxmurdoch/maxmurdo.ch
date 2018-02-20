import {css} from 'glamor'
import {hh, div} from 'react-hyperscript-helpers'

import {smallDouble} from '../../constants/gutter'
import {medium} from '../../constants/media'

const navMargin = hh(() =>
  div({
    className: css({
      marginBottom: smallDouble,
      [medium]: {marginBottom: 0}
    })
  })
)

export default navMargin

import R from 'ramda'
import {css} from 'glamor'
import {hh, hr} from 'react-hyperscript-helpers'
import {black} from '../../constants/colour'

const LightGreyLine = () =>
  hr({
    className: css({
      margin: 0,
      width: '100%',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: R.nth(1, black)
    })
  })

export default hh(LightGreyLine)

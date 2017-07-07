import R from 'ramda'
import {css} from 'glamor'
import {black} from '../../constants/colour'
import {hh, div} from 'react-hyperscript-helpers'
import {medium, large} from '../../constants/media'

const leftCross = div({
  className: css({
    background: R.last(black),
    position: 'absolute',
    display: 'block',
    transition: 'all 50ms ease-in-out',
    top: 11,
    transform: 'rotate(45deg) translateY(0px)',
    width: 24,
    height: 2,
    [medium]: {
      width: 32,
      top: 15,
      transform: 'rotate(45deg) translateY(0px)'
    },
    [large]: {
      width: 32,
      top: 15,
      transform: 'rotate(45deg) translateY(0px)'
    }
  })
})

const rightCross = div({
  className: css({
    background: R.last(black),
    position: 'absolute',
    display: 'block',
    transition: 'all 50ms ease-in-out',
    top: 11,
    transform: 'rotate(-45deg) translateY(0px)',
    width: 24,
    height: 2,
    [medium]: {
      width: 32,
      top: 15,
      transform: 'rotate(-45deg) translateY(0px)'
    },
    [large]: {
      width: 32,
      top: 15,
      transform: 'rotate(-45deg) translateY(0px)'
    }
  })
})

const Cross = () => div([leftCross, rightCross])

export default hh(Cross)

import {PropTypes} from 'prop-types'
import {hh, div} from 'react-hyperscript-helpers'
import R from 'ramda'
import {css} from 'glamor'
import media from '../../constants/media'
import justifyContentMap from '../../constants/justify-content-map'
import alignItemsMap from '../../constants/align-items-map'
import validJustify from '../../constants/valid-justify'
import flexDirection from '../../helpers/flex-direction'
import {smallHalf, mediumHalf, largeHalf} from '../../constants/gutter'

const Grid = ({
  direction = 'row',
  reverse = false,
  wrap = true,
  smallWrap = true,
  mediumWrap = true,
  largeWrap = true,
  justify = 'start',
  align = 'start',
  gutter = true,
  gridWrapperClassName,
  children
}) => {
  const gridWrapperStyle = css(
    {
      height: '100%',
      width: '100%',
      maxWidth: '100%'
    },
    gridWrapperClassName
  )
  const directionStyle = R.is(String, direction)
    ? {
        flexDirection: flexDirection(direction, reverse)
      }
    : R.reduce(
        (styleObject, [breakpoint, direction]) => {
          return R.assoc(
            breakpoint,
            {flexDirection: flexDirection(direction, reverse)},
            styleObject
          )
        },
        {},
        direction
      )

  const alignStyle = R.is(String, direction)
    ? {
        alignItems: R.prop(align, alignItemsMap)
      }
    : R.reduce(
        (styleObject, [breakpoint, value]) => {
          return R.assoc(
            breakpoint,
            {
              alignItems: R.prop(value, alignItemsMap)
            },
            styleObject
          )
        },
        {},
        align
      )

  const gridStyle = css(
    {
      boxSizing: 'border-box',
      display: 'flex',
      justifyContent: R.prop(justify, justifyContentMap),
      flexWrap: R.and(wrap, smallWrap) ? 'wrap' : 'nowrap',
      height: '100%',
      flexBasis: '100%',
      position: 'relative',
      [R.prop('small', media)]: {
        flexWrap: smallWrap ? 'wrap' : null,
        marginRight: gutter ? `-${smallHalf}` : 0,
        marginLeft: gutter ? `-${smallHalf}` : 0
      },
      [R.prop('medium', media)]: {
        flexWrap: R.and(wrap, mediumWrap) ? 'wrap' : 'nowrap',
        marginRight: gutter ? `-${mediumHalf}` : 0,
        marginLeft: gutter ? `-${mediumHalf}` : 0
      },
      [R.prop('large', media)]: {
        flexWrap: R.and(wrap, largeWrap) ? 'wrap' : 'nowrap',
        marginRight: gutter ? `-${largeHalf}` : 0,
        marginLeft: gutter ? `-${largeHalf}` : 0
      }
    },
    directionStyle,
    alignStyle
  )

  return div({className: gridWrapperStyle}, [
    div({className: gridStyle}, [children])
  ])
}

Grid.propTypes = {
  direction: PropTypes.oneOf(['row', 'column', PropTypes.array]),
  justify: PropTypes.oneOf(validJustify),
  align: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
}

export default hh(Grid)

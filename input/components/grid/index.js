import {PropTypes} from 'prop-types'
import {hh, div} from 'react-hyperscript-helpers'
import R from 'ramda'
import {css} from 'glamor'
import media from '../../constants/media'
import justifyContentMap from '../../constants/justify-content-map'
import alignItemsMap from '../../constants/align-items-map'
import validJustify from '../../constants/valid-justify'
import validAlign from '../../constants/valid-align'
import flexDirection from '../../helpers/flex-direction'
import {smallHalf, mediumHalf, largeHalf} from '../../constants/gutter'

const Grid = ({
  direction = 'row',
  reverse = false,
  wrap = true,
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

  const gridStyle = css({
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: R.prop(justify, justifyContentMap),
    alignItems: R.prop(align, alignItemsMap),
    flexDirection: flexDirection(direction, reverse),
    flexWrap: wrap ? 'wrap' : 'nowrap',
    height: '100%',
    flexBasis: '100%',
    position: 'relative',
    [R.prop('small', media)]: {
      marginRight: gutter ? `-${smallHalf}` : 0,
      marginLeft: gutter ? `-${smallHalf}` : 0
    },
    [R.prop('medium', media)]: {
      marginRight: gutter ? `-${mediumHalf}` : 0,
      marginLeft: gutter ? `-${mediumHalf}` : 0
    },
    [R.prop('large', media)]: {
      marginRight: gutter ? `-${largeHalf}` : 0,
      marginLeft: gutter ? `-${largeHalf}` : 0
    }
  })

  return div({className: gridWrapperStyle}, [
    div({className: gridStyle}, [children])
  ])
}

Grid.propTypes = {
  direction: PropTypes.oneOf(['row', 'column']),
  justify: PropTypes.oneOf(validJustify),
  align: PropTypes.oneOf(validAlign)
}

export default hh(Grid)

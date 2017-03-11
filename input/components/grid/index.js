import { PropTypes } from 'react'
import { hh, div } from 'react-hyperscript-helpers'
import R from 'ramda'
import style from '../../helpers/style'
import justifyContentMap from '../../constants/justify-content-map'
import alignItemsMap from '../../constants/align-items-map'
import validJustify from '../../constants/valid-justify'
import validAlign from '../../constants/valid-align'

const Grid = ({direction = 'row', reverse = false, wrap = true, justify = 'start', align = 'start', children}) => {
  const flexDirection = () => R.equals(reverse, true) ? R.concat(direction, '-reverse') : direction

  const className = style({
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: R.prop(justify, justifyContentMap),
    alignItems: R.prop(align, alignItemsMap),
    flexDirection: flexDirection(),
    flexWrap: wrap ? 'wrap' : 'nowrap',
    height: '100%',
    flexBasis: '100%',
  })

  return div({
    className,
  }, [children])
}

Grid.propTypes = {
  direction: PropTypes.oneOf(['row', 'column']),
  justify: PropTypes.oneOf(validJustify),
  align: PropTypes.oneOf(validAlign),
}

export default hh(Grid)

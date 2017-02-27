import { PropTypes } from 'react'
import { hh, div } from 'react-hyperscript-helpers'
import R from 'ramda'
import cxs from 'cxs'

const justifyContentMap = {
  start: 'flex-start',
  end: 'flex-end',
  center: 'center',
  between: 'space-between',
  apart: 'space-apart',
}

const alignItemsMap = {
  start: 'flex-start',
  end: 'flex-end',
  baseline: 'baseline',
  center: 'center',
  stretch: 'stretch',
}

const Grid = ({
  direction = 'row',
  reverse = false,
  wrap = true,
  justify = 'start',
  align = 'start',
  children,
}) => {
  const flexDirection = () => R.equals(reverse, true) ? R.concat(direction, '-reverse') : direction

  const className = cxs({
    display: 'flex',
    justifyContent: R.prop(justify, justifyContentMap),
    alignItems: R.prop(align, alignItemsMap),
    flexDirection: flexDirection(),
    flexWrap: wrap ? 'wrap' : 'nowrap',
  })

  return div({ className }, [children])
}

Grid.propTypes = {
  direction: PropTypes.oneOf(['row', 'column']),
  justify: PropTypes.oneOf(['start', 'end', 'apart', 'between', 'center']),
  align: PropTypes.oneOf(['start', 'end', 'baseline', 'stretch', 'center']),
}

export default hh(Grid)

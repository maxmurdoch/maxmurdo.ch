import R from 'ramda'
import space from '../../constants/space'
import toFixed from '../../helpers/to-fixed'

const percent = (style = {
  column: 1,
  of: 1,
}) => `${R.pipe(R.divide(100), R.multiply(R.prop('column', style)), toFixed(2))(R.prop('of', style))}%`

const defaultGutter = R.nth(3, space)

const calculateColumn = (column, gutter = defaultGutter) => {
  const flex = {
    flexBasis: `calc(${percent(column)} - (${gutter} - ${gutter} * 1/${column.of}))`,
  }
  const setGutter = R.partialRight(R.assoc, [flex])

  return R.equals(column.column, column.of) ? setGutter('marginRight', 0) : setGutter('marginRight', gutter)
}

export default calculateColumn
export {
  defaultGutter as gutter,
}

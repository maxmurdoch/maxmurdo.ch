import { hh, div } from 'react-hyperscript-helpers'
import R from 'ramda'
import cxs from 'cxs'

const Cell = ({
  col = 12,
  children,
}) => {

  const className = cxs({
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: R.concat(R.toString(R.multiply(col, R.divide(100, 12))), '%'),
  })

  return div({ className }, [children])
}

export default hh(Cell)

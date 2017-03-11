import { PropTypes } from 'react'
import { hh, div } from 'react-hyperscript-helpers'
import R from 'ramda'
import classnames from 'classnames'

import media from '../../constants/media'
import space from '../../constants/space'
import alignMap from '../../constants/align-items-map'
import validAlign from '../../constants/valid-align'

import style from '../../helpers/style'
import percentify from '../../helpers/percentify'
import important from '../../helpers/important'

const columns = (n) => R.multiply(n, R.divide(100, 12))

const calculateFlexBasis = R.ifElse(
  R.equals('auto'),
  R.identity,
  R.pipe(columns, percentify),
)

const flexBasis = (column, defaultColumn) => {
  return R.isNil(column) ? calculateFlexBasis(defaultColumn) : calculateFlexBasis(column)
}

const calculateColumn = (column, defaultColumn = 12) => {
  console.log('column', column)
  console.log('defaultColumn', defaultColumn)
  if (R.or(R.equals(column, 6), R.equals(defaultColumn, 6))) {
    return {
      flexBasis: important(`calc(${flexBasis(column, defaultColumn)} - ${R.nth(3, space)})`),
      marginRight: important(R.nth(3, space)),
      ':nth-of-type(2n + 1)': {
        marginRight: important(0),
      },
    }
  } else if (R.or(R.equals(column, 4), R.equals(defaultColumn, 4))) {
    return {
      flexBasis: important(`calc(${flexBasis(column, defaultColumn)} - ${R.nth(3, space)})`),
      marginRight: important(R.nth(3, space)),
      ':nth-of-type(3n + 3)': {
        marginRight: important(0),
      },
    }
  }

  return {
    marginRight: important(0),
  }
}

const Cell = ({grow = 0, shrink = 0, col = 'auto', smallCol, mediumCol, largeCol, alignSelf = 'start', children}) => {
  const baseClass = style({
    boxSizing: 'border-box',
    alignSelf: R.prop(alignSelf, alignMap),
    flexGrow: grow,
    flexShrink: shrink,
  })

  const columnClass = style({
    flexBasis: flexBasis(smallCol, col),
    [R.prop('small', media)]: calculateColumn(mediumCol, col),
    [R.prop('large', media)]: calculateColumn(largeCol, col),
  })

  return div({
    className: classnames(baseClass, columnClass),
  }, [children])
}

Cell.propTypes = {
  col: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  smallCol: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  mediumCol: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  largeCol: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  alignSelf: PropTypes.oneOf(validAlign),
  grow: PropTypes.number,
}

export default hh(Cell)

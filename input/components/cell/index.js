import { PropTypes } from 'react'
import { hh, div } from 'react-hyperscript-helpers'
import R from 'ramda'
import classnames from 'classnames'

import media from '../../constants/media'
import alignMap from '../../constants/align-items-map'
import validAlign from '../../constants/valid-align'

import style from '../../helpers/style'
import calculateColumn, { gutter } from '../../services/calculate-column'

const Cell = ({
  grow = 0,
  shrink = 0,
  small = {
    column: 1,
    of: 1,
  },
  medium = {
    column: 1,
    of: 1,
  },
  large = {
    column: 1,
    of: 1,
  },
  alignSelf = 'start',
  bottomGutter = false,
  children,
}) => {
  const baseClass = style({
    boxSizing: 'border-box',
    alignSelf: R.prop(alignSelf, alignMap),
    flexGrow: grow,
    flexShrink: shrink,
    marginBottom: bottomGutter ? gutter : 0,
  })

  const columnClass = style({
    [R.prop('small', media)]: calculateColumn(small),
    [R.prop('medium', media)]: calculateColumn(medium),
    [R.prop('large', media)]: calculateColumn(large),
  })

  return div({
    className: classnames(baseClass, columnClass),
  }, [children])
}

Cell.propTypes = {
  small: PropTypes.shape({
    column: PropTypes.number,
    of: PropTypes.number,
  }),
  medium: PropTypes.shape({
    column: PropTypes.number,
    of: PropTypes.number,
  }),
  large: PropTypes.shape({
    column: PropTypes.number,
    of: PropTypes.number,
  }),
  alignSelf: PropTypes.oneOf(validAlign),
  grow: PropTypes.number,
  shrink: PropTypes.number,
}

export default hh(Cell)

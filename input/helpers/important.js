import R from 'ramda'

const appendImportant = a => `${a} !important`
const isObjectOrArray = a =>
  R.or(R.equals(typeof a, 'object'), R.isArrayLike(a))
const mapImportant = R.map(appendImportant)
const important = style =>
  R.map(R.ifElse(isObjectOrArray, mapImportant, R.identity), style)

export default important

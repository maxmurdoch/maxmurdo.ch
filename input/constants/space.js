import R from 'ramda'

const numScale = R.scan(a => R.multiply(a, 1.5), 1, R.range(1, 9))
const appendUnit = R.partialRight(R.concat, ['vmax'])
const space = R.map(appendUnit, R.map(R.toString, numScale))

export default space
export {
  numScale,
  appendUnit
}

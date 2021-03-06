import * as R from 'ramda'

const numScale = R.scan(a => R.multiply(a, 1.5), 0.5, R.range(1, 9))
const appendUnit = R.partialRight(R.concat, ['rem'])
const space = R.map(appendUnit, R.map(R.toString, numScale))

export default space
export {numScale, appendUnit}

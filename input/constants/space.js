import R from 'ramda'

const numScale = R.scan((a) => R.multiply(a, 1.4), 0.4, R.range(1, 9))
const appendRem = R.partialRight(R.concat, ['rem'])
const space = R.map(appendRem, R.map(R.toString, numScale))

export default space

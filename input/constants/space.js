import R from 'ramda'

const numScale = R.scan((a) => R.add(a, 0.25), 0, R.range(1, 7))
const appendRem = R.partialRight(R.concat, ['rem'])
const space = R.map(appendRem, R.map(R.toString, numScale))

export {
  space,
}

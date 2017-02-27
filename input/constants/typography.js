import R from 'ramda'

const lineHeight = 1.5

const sans = 'Graphik, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Helvetica, sans-serif'
const mono = `'Input Mono', monospace`
const family = {
  sans,
  mono,
}

const numScale = R.scan(
  (n) => R.multiply(n, 1.25),
  1,
  R.range(1, 7)
)
const appendVw = R.partialRight(R.concat, ['vw'])
const size = R.map(appendVw, R.map(R.toString, numScale))

export {
  lineHeight,
  size,
  family,
}

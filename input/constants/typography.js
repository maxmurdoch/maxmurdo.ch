import R from 'ramda'

const lineHeight = 1.5

const sans = 'Graphik, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Helvetica, sans-serif'
const mono = `'Space Mono', monospace`
const family = {
  sans,
  mono,
}

const numScale = R.scan(
  (n) => R.multiply(n, 1.4),
  0.8,
  R.range(1, 7)
)
const appendVmax = R.partialRight(R.concat, ['vmax'])
const size = R.map(appendVmax, R.map(R.toString, numScale))

export { lineHeight, size, family }

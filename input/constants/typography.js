import R from 'ramda'
import {css} from 'glamor'
import graphikRegularUrl from '../assets/fonts/graphik/Graphik-Regular-Web.woff'

const lineHeight = 1.5

const graphik = css.fontFace({
  fontFamily: 'Graphik',
  fontStyle: 'normal',
  fontWeight: 400,
  src: `url(${graphikRegularUrl})`
})

const sans = `${graphik}, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Helvetica, sans-serif`
const mono = `'Space Mono', monospace`
const serif = '"Untitled Serif", Times, Times New Roman, serif'
const family = {
  sans,
  mono,
  serif
}

const numScale = R.scan(
  n => R.multiply(n, 1.3),
  0.6,
  R.range(1, 7)
)
const appendRem = R.partialRight(R.concat, ['rem'])
const size = R.map(appendRem, R.map(R.toString, numScale))

export {lineHeight, size, family}

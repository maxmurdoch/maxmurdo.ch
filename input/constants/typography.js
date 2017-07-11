import R from 'ramda'
import {css} from 'glamor'
import graphikRegular from '../assets/fonts/graphik/Graphik-Regular-Web.woff'
import graphikRegularItalicEot from '../assets/fonts/graphik/Graphik-RegularItalic.eot'
import graphikRegularItalicWoff from '../assets/fonts/graphik/Graphik-RegularItalic.woff'
import graphikRegularItalicTtf from '../assets/fonts/graphik/Graphik-RegularItalic.ttf'

const lineHeight = 1.5

css.fontFace({
  fontFamily: 'Graphik',
  fontStyle: 'italic',
  fontWeight: 400,
  src: `url(${graphikRegularItalicEot}) format('eot'),
        url(${graphikRegularItalicWoff}) format('woff'),
        url(${graphikRegularItalicTtf}) format('ttf')`
})

const graphik = css.fontFace({
  fontFamily: 'Graphik',
  fontStyle: 'normal',
  fontWeight: 400,
  src: `url(${graphikRegular})`
})

const sans = `${graphik}, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Helvetica, sans-serif`
const mono = '\'Space Mono\', monospace'
const serif = '"Untitled Serif", Times, Times New Roman, serif'
const family = {
  sans,
  mono,
  serif
}

const numScale = R.scan(n => R.multiply(n, 1.25), 0.9, R.range(1, 10))
const appendRem = R.partialRight(R.concat, ['rem'])
const size = R.map(appendRem, R.map(R.toString, numScale))

export {lineHeight, size, family}

import R from 'ramda'
import {css} from 'glamor'
import graphikRegular from '../assets/fonts/graphik/Graphik-Regular-Web.woff'
import graphikRegularItalicEot from '../assets/fonts/graphik/Graphik-RegularItalic.eot'
import graphikRegularItalicWoff from '../assets/fonts/graphik/Graphik-RegularItalic.woff'
import graphikRegularItalicTtf from '../assets/fonts/graphik/Graphik-RegularItalic.ttf'
import gtAmericaRegularWoff from '../assets/fonts/gt-america/GT-America-Standard-Light.woff'
import gtAmericaExtendedBlackWoff from '../assets/fonts/gt-america/GT-America-Extended-Black.woff'
import gtAmericaMonoWoff from '../assets/fonts/gt-america/GT-America-Mono-Light.woff'

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

const gtAmerica = css.fontFace({
  fontFamily: 'GT America',
  fontStyle: 'normal',
  fontWeight: 400,
  src: `url(${gtAmericaRegularWoff})`
})

const gtAmericaBlack = css.fontFace({
  fontFamily: 'GT America Extended',
  fontStyle: 'normal',
  fontWeight: 900,
  src: `url(${gtAmericaExtendedBlackWoff})`
})

const gtAmericaMono = css.fontFace({
  fontFamily: 'GT America Mono',
  fontStyle: 'normal',
  fontWeight: 300,
  src: `url(${gtAmericaMonoWoff})`
})

const sans = `${graphik}, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Helvetica, sans-serif`
const wide = `${gtAmericaBlack}, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Helvetica, sans-serif`
const mono = `${gtAmericaMono}, monospace`
const serif = 'Times, Times New Roman, serif'
const family = {
  wide,
  sans,
  mono,
  serif
}

const numScale = R.scan(n => R.multiply(n, 1.25), 1, R.range(1, 10))
const appendRem = R.partialRight(R.concat, ['rem'])
const size = R.map(appendRem, R.map(R.toString, numScale))

export {lineHeight, size, family}

import R from 'ramda'
import {injectGlobal} from 'emotion'

import untitled from '../fonts/untitled/Untitled-Sans-Light.woff'
import untitledItalic from '../fonts/untitled/Untitled-Sans-Light-Italic.woff'

injectGlobal`
@font-face {
    font-family: 'Untitled';
    font-style: normal;
    font-weight: 300;
    src: url(${untitled}) format('woff');
  }

@font-face {
    font-family: 'Untitled';
    font-style: italic;
    font-weight: 300;
    src: url(${untitledItalic}) format('woff');
  }
`
const sans =
  'Untitled, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Helvetica, sans-serif'
const wide =
  'Untitled, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Helvetica, sans-serif'
const serif = 'Times, Times New Roman, serif'
const family = {
  wide,
  sans,
  serif
}

const numScale = R.scan(n => R.multiply(n, 1.2), 1, R.range(1, 10))
const appendRem = R.partialRight(R.concat, ['rem'])
const size = R.map(appendRem, R.map(R.toString, numScale))

export {size, family}

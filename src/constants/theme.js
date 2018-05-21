import R from 'ramda'

// breakpoint values
// any array length works with styled-system
const breakpoints = ['40rem', '50rem', '70rem', '90rem']

const colors = {
  text: '#024',
  blue: 'rgba(39, 40, 230, 1.0)',
  black: '#000',
  // nested objects work as well
  dark: {
    blue: '#058'
  },
  // arrays can be used for scales of colors
  gray: ['#333', '#666', '#999', '#ccc', '#eee', '#f6f6f6']
}

// space is used for margin and padding scales
// it's recommended to use powers of two to ensure alignment
// when used in nested elements
// numbers are converted to px

const spaceScale = R.scan(n => R.multiply(n, 1.2), 0.8, R.range(1, 16))
const fixDecimal = R.map(n => n.toFixed(2), spaceScale)
const appendSpaceUnit = R.partialRight(R.concat, ['rem'])
const space = R.prepend(0, R.map(appendSpaceUnit, fixDecimal))

const numScale = R.scan(n => R.multiply(n, 1.1), 1, R.range(1, 16))
const appendFontUnit = R.partialRight(R.concat, ['rem'])
const fontSizes = R.map(appendFontUnit, R.map(R.toString, numScale))

// for any scale, either array or objects will work
const lineHeights = [1, 1.125, 1.25, 1.5]

const fontWeights = {
  light: 300,
  normal: 500,
  bold: 700
}

const letterSpacings = {
  normal: 'normal',
  caps: '0.25em'
}

// border-radius
const radii = [0, 2, 4, 8]

const borders = [0, '1px solid', '2px solid']

const shadows = [`0 1px 2px 0 ${colors.text}`, `0 1px 4px 0 ${colors.text}`]

export {
  breakpoints,
  colors,
  space,
  fontSizes,
  lineHeights,
  fontWeights,
  letterSpacings,
  radii,
  borders,
  shadows
}

const theme = {
  breakpoints,
  colors,
  space,
  fontSizes,
  lineHeights,
  fontWeights,
  letterSpacings,
  radii,
  borders,
  shadows
}

export default theme

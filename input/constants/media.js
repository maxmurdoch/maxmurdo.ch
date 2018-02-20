const smallWidth = '(max-width: 40rem)'
const small = `@media screen and ${smallWidth}`
const mediumWidth = '(min-width: 40rem)'
const medium = `@media screen and ${mediumWidth}`
const largeWidth = '(min-width: 70rem)'
const large = `@media screen and ${largeWidth}`
const xLargeWidth = '(min-width: 90rem)'
const xLarge = `@media screen and ${xLargeWidth}`

const media = {
  small,
  smallWidth,
  medium,
  mediumWidth,
  large,
  largeWidth,
  xLarge,
  xLargeWidth
}

export default media
export {
  small,
  smallWidth,
  medium,
  mediumWidth,
  large,
  largeWidth,
  xLarge,
  xLargeWidth
}

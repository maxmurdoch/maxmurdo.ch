const smallWidth = '(max-width: 40em)'
const small = `@media screen and ${smallWidth}`
const mediumWidth = '(min-width: 40em) and (max-width: 70em)'
const medium = `@media screen and ${mediumWidth}`
const largeWidth = '(min-width: 70em)'
const large = `@media screen and ${largeWidth}`

const media = {
  small,
  smallWidth,
  medium,
  mediumWidth,
  large,
  largeWidth
}

export default media
export {small, smallWidth, medium, mediumWidth, large, largeWidth}

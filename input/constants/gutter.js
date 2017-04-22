import R from 'ramda'
import space, {numScale, appendUnit} from './space'

const small = R.nth(3, space)
const smallHalf = R.pipe(R.divide(R.__, 2), R.toString, appendUnit)(R.nth(3, numScale))
const mediumDouble = R.pipe(R.multiply(R.__, 2), R.toString, appendUnit)(R.nth(3, numScale))
const medium = R.nth(3, space)
const mediumHalf = R.pipe(R.divide(R.__, 2), R.toString, appendUnit)(R.nth(3, numScale))
const largeDouble = R.pipe(R.multiply(R.__, 2), R.toString, appendUnit)(R.nth(4, numScale))
const large = R.nth(4, space)
const largeHalf = R.pipe(R.divide(R.__, 2), R.toString, appendUnit)(R.nth(4, numScale))

const gutter = {
  small,
  medium,
  large
}

export default gutter
export {
  smallHalf,
  small,
  mediumHalf,
  medium,
  mediumDouble,
  largeHalf,
  large,
  largeDouble
}

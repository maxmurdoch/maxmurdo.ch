import R from 'ramda'
import space, {numScale, appendUnit} from './space'

const small = R.nth(3, space)
const smallHalf = R.pipe(R.divide(R.__, 2), R.toString, appendUnit)(
  R.nth(3, numScale)
)
const smallDouble = R.pipe(R.multiply(R.__, 2), R.toString, appendUnit)(
  R.nth(3, numScale)
)

const mediumDouble = R.pipe(R.multiply(R.__, 2), R.toString, appendUnit)(
  R.nth(5, numScale)
)
const medium = R.nth(5, space)
const mediumHalf = R.pipe(R.divide(R.__, 2), R.toString, appendUnit)(
  R.nth(5, numScale)
)

const large = R.nth(6, space)
const largeHalf = R.pipe(R.divide(R.__, 2), R.toString, appendUnit)(
  R.nth(6, numScale)
)
const largeDouble = R.pipe(R.multiply(R.__, 2), R.toString, appendUnit)(
  R.nth(6, numScale)
)

const gutter = {
  small,
  medium,
  large
}

export default gutter
export {
  smallHalf,
  small,
  smallDouble,
  mediumHalf,
  medium,
  mediumDouble,
  largeHalf,
  large,
  largeDouble
}

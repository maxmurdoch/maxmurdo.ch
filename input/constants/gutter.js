import R from 'ramda'
import space, {numScale, appendRem} from './space'

const small = R.nth(3, space)
const smallHalf = R.pipe(R.divide(R.__, 2), R.toString, appendRem)(R.nth(3, numScale))
const medium = R.nth(4, space)
const mediumHalf = R.pipe(R.divide(R.__, 2), R.toString, appendRem)(R.nth(4, numScale))
const large = R.nth(5, space)
const largeHalf = R.pipe(R.divide(R.__, 2), R.toString, appendRem)(R.nth(5, numScale))

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
  largeHalf,
  large
}

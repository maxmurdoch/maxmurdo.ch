import R from 'ramda'

const flexDirection = (direction, reverse = false) =>
  R.ifElse(
    R.always(R.equals(reverse, true)),
    R.partialRight(R.concat, ['-reverse']),
    R.identity
  )(direction)

export default flexDirection

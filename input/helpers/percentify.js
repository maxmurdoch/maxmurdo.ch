import R from 'ramda'

const percentify = R.pipe(R.toString, R.append('%'), R.join(''))

export default percentify

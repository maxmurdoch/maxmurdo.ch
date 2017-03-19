import cxs from 'cxs/monolithic'
import prefixAll from 'inline-style-prefixer/static'
import important from './important'
import R from 'ramda'

const style = R.pipe(prefixAll, important, cxs)

export default style

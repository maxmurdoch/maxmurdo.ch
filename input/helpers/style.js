import cxs from 'cxs'
import prefixAll from 'inline-style-prefixer/static'
import R from 'ramda'

const style = R.pipe(prefixAll, cxs)

export default style

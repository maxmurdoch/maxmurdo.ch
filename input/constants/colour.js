import R from "ramda"
import chroma from "chroma-js"

const alpha = color => a => chroma(color).alpha(a).css()

const alphaBlack = alpha(`#000`)
const black = R.map(value => alphaBlack(R.divide(value, 16)), R.range(0, 17))

const blue = `rgba(39, 40, 230, 1.0)`

export {black, blue}

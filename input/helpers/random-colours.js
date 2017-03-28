import chroma from 'chroma-js'
import R from 'ramda'

const randomScale = () => chroma.scale([chroma.random(), chroma.random()]).colors(8)

const contrastChecker = (scale = randomScale()) => {
  const contrastThreshold = 4.5

  const isValid = R.gt(
    chroma.contrast(
      chroma(R.head(scale)),
      chroma(R.last(scale))),
    contrastThreshold,
  )
  if (isValid) {
    return [R.head(scale), R.last(scale)]
  }
  console.log('Tail function called')
  return contrastChecker(randomScale())
}

export default contrastChecker

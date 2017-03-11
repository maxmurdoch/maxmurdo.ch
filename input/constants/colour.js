import chroma from 'chroma-js'

const alpha = (color) => (a) => chroma(color).alpha(a).css()

const alphaBlack = alpha('#000')

const black = [
  alphaBlack(0),
  alphaBlack(1 / 8),
  alphaBlack(2 / 8),
  alphaBlack(3 / 8),
  alphaBlack(4 / 8),
  alphaBlack(5 / 8),
  alphaBlack(6 / 8),
  alphaBlack(7 / 8),
  alphaBlack(8 / 8),
]

const blue = 'rgba(39, 40, 230, 1.0)'

export { black, blue }

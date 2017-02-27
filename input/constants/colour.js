import chroma from 'chroma-js'

const alpha = (color) => (a) => chroma(color).alpha(a).css()

const darken = alpha('#000')

const shade = [
  darken(0),
  darken(1/8),
  darken(2/8),
  darken(3/8),
  darken(4/8),
  darken(5/8),
  darken(6/8),
  darken(7/8),
  darken(8/8),
]

const blue = 'rgba(39, 40, 230, 1.0)'

export {
  shade,
  blue,
}

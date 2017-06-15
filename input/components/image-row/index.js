import {hh, div} from 'react-hyperscript-helpers'
import R from 'ramda'
import screenImage from '../screen-image'
import grid from '../grid'
import cell from '../cell'

const ImageRow = ({images = []}) => {
  const mapWithIndex = R.addIndex(R.map)
  const cells = mapWithIndex((src, index) => {
    return cell(
      {
        small: {column: 1, of: 1},
        medium: {column: 1, of: 3},
        large: {column: 1, of: 3},
        bottomGutter: true,
        justify: `center`
      },
      [
        div(
          {
            'data-aos': `fade-up`,
            'data-aos-delay': R.pipe(R.inc, R.multiply(200))(index),
            'data-aos-offset': 100,
            'data-aos-anchor-placement': `top-bottom`
          },
          [screenImage({src})]
        )
      ]
    )
  }, images)

  return grid(cells)
}

export default hh(ImageRow)

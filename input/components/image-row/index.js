import { hh, div } from 'react-hyperscript-helpers'
import R from 'ramda'
import space from '../../constants/space'
import media from '../../constants/media'

import style from '../../helpers/style'
import screenImage from '../screen-image'
import grid from '../grid'
import cell from '../cell'

const imageContainerClass = style({
  display: 'flex',
  justifyContent: 'center',
  [R.prop('small', media)]: {
    padding: `${R.nth(3, space)}`,
  },
  [R.prop('medium', media)]: {
    padding: `${R.nth(2, space)}`,
  },
  [R.prop('large', media)]: {
    padding: `${R.nth(4, space)}`,
  },
})

const mapIndexed = R.addIndex(R.map)

const ImageRow = ({images = []}) => {
  const wrappedImages = mapIndexed((src, i) => {
    const index = R.inc(i)
    const of2 = R.equals(R.modulo(index, 2), 0) ? index : R.modulo(index, 2)
    const of3 = R.equals(R.modulo(index, 3), 0) ? index : R.modulo(index, 3)

    return cell({
      bottomGutter: true,
      small: {
        column: 1,
        of: 1,
      },
      medium: {
        column: of2,
        of: 2,
      },
      large: {
        column: of3,
        of: 3,
      },
    }, [div({ className: imageContainerClass }, [screenImage({ src })])])
  }, images)


  return grid(wrappedImages)
}

export default hh(ImageRow)

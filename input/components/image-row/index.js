import { hh, div } from 'react-hyperscript-helpers'
import R from 'ramda'
import space from '../../constants/space'
import { black } from '../../constants/colour'

import style from '../../helpers/style'
import image from '../image'
import grid from '../grid'
import cell from '../cell'

const imageContainerClass = style({
  border: `2px solid ${R.nth(1, black)}`,
  padding: `${R.nth(7, space)} ${R.nth(2, space)}`,
  borderRadius: '24px',
  display: 'flex',
  justifyContent: 'center',
})

const imageClass = style({
  border: `2px solid ${R.nth(1, black)}`,
  width: `100%`,
  height: `100%`,
})

const ImageRow = ({images = []}) => {
  const wrappedImages = R.map((src) => {
    return cell({
      smallCol: 12,
      mediumCol: 4,
      largeCol: 4,
    }, [
      div({
        className: imageContainerClass,
      },
        [
          image({
            className: imageClass,
            src,
          }),
        ]),
    ])
  }, images)


  return grid(wrappedImages)
}

export default hh(ImageRow)

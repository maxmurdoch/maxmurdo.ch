import {hh} from 'react-hyperscript-helpers'
import R from 'ramda'
import screenImage from '../screen-image'
import grid from '../grid'
import cell from '../cell'

const ImageRow = ({images = []}) => {
  const cells = R.map(src => {
    return cell({
      small: {
        column: 1,
        of: 1
      },
      medium: {
        column: 1,
        of: 3
      },
      large: {
        column: 1,
        of: 3
      },
      bottomGutter: true
    }, [screenImage({src})])
  }, images)

  return grid(cells)
}

export default hh(ImageRow)

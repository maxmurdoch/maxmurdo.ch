import grid from '../grid'
import cell from '../cell'
import firstPage from '../../images/first-page.svg'
import screenImage from '../screen-image'

const mathsBuildersCover = () =>
  grid({justify: 'center'}, [
    cell(
      {
        small: {
          column: 1,
          of: 1
        },
        medium: {
          column: 2,
          of: 3
        },
        large: {
          column: 1,
          of: 2
        }
      },
      [screenImage({src: firstPage})]
    )
  ])

export default mathsBuildersCover

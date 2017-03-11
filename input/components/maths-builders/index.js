import { hh } from 'react-hyperscript-helpers'
import firstPage from '../../images/first-page.svg'
import geometryAndMeasures from '../../images/maths-builder-geometry-and-measures-1.svg'
import mathsBuilderProfile from '../../images/maths-builder-profile.svg'
import imageRow from '../image-row'
import grid from '../grid'
import cell from '../cell'
import text from '../text'

const MathsBuilders = () => grid([
  cell({
    col: 12,
  }, [text({
    tag: 'h1',
    size: 4,
  }, 'Maths Builders')]),
  cell({
    col: 12,
  }, [
    imageRow({
      images: [firstPage, geometryAndMeasures, mathsBuilderProfile],
    }),
  ]),
])
export default hh(MathsBuilders)

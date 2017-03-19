import R from 'ramda'
import { hh, div } from 'react-hyperscript-helpers'
import style from '../../helpers/style'
import space from '../../constants/space'
import firstPage from '../../images/first-page.svg'
import geometryAndMeasures from '../../images/maths-builder-geometry-and-measures-1.svg'
import mathsBuilderProfile from '../../images/maths-builder-profile.svg'

import imageRow from '../image-row'
import link from '../link'
import grid from '../grid'
import cell from '../cell'
import text from '../text'

const MathsBuilders = () => div({
  className: style({
    paddingTop: R.nth(4, space),
  }),
}, [
    grid([
      cell({
        small: {
          column: 1,
          of: 1,
        },
        medium: {
          column: 1,
          of: 2,
        },
        large: {
          column: 1,
          of: 2,
        },
      }, [text({
        tag: 'h1',
        size: 3,
      }, 'Maths Builders')]),
      cell({
        small: {
          column: 1,
          of: 1,
        },
        medium: {
          column: 2,
          of: 2,
        },
        large: {
          column: 2,
          of: 2,
        },
      }, [text({
        tag: 'p',
        size: 3,
      }, [
        'I worked with the ',
        link({href: 'http://www.eng.cam.ac.uk/' }, 'University of Cambridge'),
        ' to design an app that brings GCSE maths to mobile.',
      ])]),
      cell({
        col: 12,
      }, [
        imageRow({
          images: [firstPage, geometryAndMeasures, mathsBuilderProfile],
        }),
      ]),
    ]),
  ])

  export default hh(MathsBuilders)

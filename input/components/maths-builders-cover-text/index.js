import {css} from 'glamor'

import grid from '../grid'
import cell from '../cell'
import text from '../text'
import link from '../link'

const mathsBuildersCoverText = () =>
  grid(
    {
      align: 'center'
    },
    [
      cell(
        {
          medium: {
            column: 1,
            of: 2
          },
          large: {
            column: 1,
            of: 2
          }
        },
        [
          text(
            {tag: 'h1', size: 3, className: css({width: '100%', margin: 0})},
            'Maths Builders'
          )
        ]
      ),
      cell(
        {
          medium: {
            column: 1,
            of: 2
          },
          large: {
            column: 1,
            of: 2
          }
        },
        [
          text(
            {tag: 'p', size: 2, className: css({width: '100%', margin: 0})},
            [
              'I worked with the ',
              link(
                {to: 'http://www.eng.cam.ac.uk/'},
                'University of Cambridge'
              ),
              ' to design an app that brings GCSE maths to mobile.'
            ]
          )
        ]
      )
    ]
  )

export default mathsBuildersCoverText

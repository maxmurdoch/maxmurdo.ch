import {css} from 'glamor'
import {hh, div} from 'react-hyperscript-helpers'

import grid from '../grid'
import cell from '../cell'
import text from '../../components/text'

const textClass = css({
  marginBottom: '1em'
})

const InfoWork = () => {
  return div([
    grid([
      cell(
        {
          medium: {column: 1, of: 3},
          large: {column: 1, of: 3}
        },
        [
          text(
            {
              size: 3,
              className: textClass
            },
            'What I do'
          )
        ]
      ),
      cell(
        {
          medium: {column: 2, of: 3},
          large: {column: 2, of: 3}
        },
        [
          div(
            {
              className: css({display: 'flex', flexDirection: 'column'})
            },
            []
          )
        ]
      )
    ])
  ])
}

export default hh(InfoWork)

import {css} from 'glamor'
import {hh, ol, div} from 'react-hyperscript-helpers'

import grid from '../grid'
import cell from '../cell'
import text from '../../components/text'

const textClass = css({
  marginBottom: '1em'
})

const InfoIntro = () => {
  return div([
    grid([
      cell([
        ol(
          {
            className: css({
              display: 'flex',
              flexDirection: 'column',
              paddingLeft: 0,
              margin: 0
            })
          },
          [
            text(
              {tag: 'li', size: 4, className: textClass},
              'To design and build a new product. The project is well defined. You know what the product should do, but you don\'t know how it should look or work.'
            ),
            text(
              {tag: 'li', size: 4, className: textClass},
              'You need to rebuild an old product. It\'s done its job for a while, but not anymore. You need someone to analyse it, decide what should be go and what should stay, then redesign and build it.'
            ),
            text(
              {tag: 'li', size: 4, className: textClass},
              'You need to “go online” but you don’t know how. “Who’s doing good stuff and are like us?”, “What’s cool?”, “How should we position ourselves?”, “Which tech should we use?”'
            )
          ]
        )
      ])
    ])
  ])
}

export default hh(InfoIntro)

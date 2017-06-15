import {css} from 'glamor'
import {hh, div} from 'react-hyperscript-helpers'

import grid from '../grid'
import cell from '../cell'
import text from '../../components/text'

const textClass = css({marginBottom: `1em`})

const InfoIntro = () => {
  return div([
    grid([
      cell([
        div(
          {
            className: css({display: `flex`, flexDirection: `column`}),
            'data-aos': `fade-in`,
            'data-aos-delay': 200,
            'data-aos-anchor-placement': `top-bottom`
          },
          [
            text(
              {size: 4, className: textClass},
              `I’m Max. I design and build digital products.`
            ),
            text(
              {size: 4, className: textClass},
              `To help see if I’d be a good fit for your next project, here’s a bit about how I work and when to hire me.`
            )
          ]
        )
      ])
    ])
  ])
}

export default hh(InfoIntro)

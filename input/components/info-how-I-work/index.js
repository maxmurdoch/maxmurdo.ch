import {css} from 'glamor'
import {hh, div} from 'react-hyperscript-helpers'

import link from '../link'
import grid from '../grid'
import cell from '../cell'
import text from '../../components/text'

const textClass = css({
  marginBottom: '1em'
})

const InfoWork = () => {
  return div([
    grid([
      cell([
        text(
          {
            size: 4,
            style: 'italic',
            className: textClass,
            'data-aos': 'fade-in',
            'data-aos-anchor-placement': 'top-bottom'
          },
          'How I work'
        )
      ]),
      cell([
        div(
          {
            className: css({display: 'flex', flexDirection: 'column'}),
            'data-aos': 'fade-in',
            'data-aos-anchor-placement': 'top-bottom',
            'data-aos-delay': 200
          },
          [
            text(
              {size: 4, className: textClass},
              'I work in cycles of design, build and feedback.'
            ),
            text({size: 4, className: textClass}, [
              'I like to build, launch and iterate rather than ',
              link(
                {
                  to: 'https://m.signalvnoise.com/planning-is-guessing-66fd2cea3f50',
                  target: 'external'
                },
                'plan extensively'
              ),
              '.'
            ]),
            text(
              {size: 4, className: textClass},
              'I use as little process as possible. Enough for you to know what I\'m doing, but not so much it slows me down.'
            )
          ]
        )
      ])
    ])
  ])
}

export default hh(InfoWork)

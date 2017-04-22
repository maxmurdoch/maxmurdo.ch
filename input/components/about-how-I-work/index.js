import {css} from 'glamor'
import {hh, div} from 'react-hyperscript-helpers'

import grid from '../grid'
import cell from '../cell'
import text from '../../components/text'

const textClass = css({
  marginBottom: '1em'
})

const AboutWork = () => {
  return div([
    grid([
      cell({
        medium: {column: 1, of: 3},
        large: {column: 1, of: 3}
      }, [
        text({
          size: 3,
          className: textClass,
          'data-aos': 'fade-in',
          'data-aos-anchor-placement': 'top-bottom'
        }, `How I work`)
      ]),
      cell({
        medium: {column: 2, of: 3},
        large: {column: 2, of: 3}
      }, [
        div({
          className: css({display: 'flex', flexDirection: 'column'}),
          'data-aos': 'fade-in',
          'data-aos-anchor-placement': 'top-bottom',
          'data-aos-delay': 200
        }, [
          text({size: 3, className: textClass}, `I focus on designing, building and shipping. I use enough process so that you know what I'm working on. But I avoid any process that slow me down.`)
        ])
      ])
    ])
  ])
}

export default hh(AboutWork)

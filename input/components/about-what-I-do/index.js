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
          'data-aos-anchor-placement': 'top-bottom',
          'data-aos-delay': 400
        }, `What I do`)
      ]),
      cell({
        medium: {column: 2, of: 3},
        large: {column: 2, of: 3}
      }, [
        div({
          className: css({display: 'flex', flexDirection: 'column'}),
          'data-aos': 'fade-in',
          'data-aos-anchor-placement': 'top-bottom',
          'data-aos-delay': 600
        }, [
          text({size: 3, className: textClass}, `I design and build digital stuff. For lots of projects, The bit I do is how your product looks and works. There's a whole list of things I don't do: running workshops, conducting extensive user research, defining content strategies, designing services, writing copy or making illustrations. If the project needs it, I know great people who do each of those parts. I design and build websites and apps. To do that I meet with you to understand your goals, do enough testing and research to identify what we should make, design how it will look and work, and build it.`),
          text({size: 3, className: textClass}, `That's what I do. But there are plenty of other things that can go into making a digital product I don't do, like .`),
          text({size: 3, className: textClass}, `My work ranges from portfolio websites and educational apps to financial dashboards.`)
        ])
      ])
    ])
  ])
}

export default hh(AboutWork)

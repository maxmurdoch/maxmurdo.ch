import {css} from 'glamor'
import {hh, div} from 'react-hyperscript-helpers'

import {small, medium, large} from '../../constants/media'
import {small as smallGutter, medium as mediumGutter, large as largeGutter} from '../../constants/gutter'
import grid from '../grid'
import cell from '../cell'
import text from '../../components/text'

const textClass = css({
  marginBottom: '1em'
})

const AboutIntro = () => {
  return div({
    className: css({
      [small]: {paddingTop: smallGutter},
      [medium]: {paddingTop: mediumGutter},
      [large]: {paddingTop: largeGutter}
    })
  }, [
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
        }, `Intro`)
      ]),
      cell({
        medium: {column: 2, of: 3},
        large: {column: 2, of: 3}
      }, [
        div({
          className: css({display: 'flex', flexDirection: 'column'}),
          'data-aos': 'fade-in',
          'data-aos-delay': 200,
          'data-aos-anchor-placement': 'top-bottom'
        }, [
          text({size: 3, className: textClass}, `I’m Max, an independent designer and programmer living in London.`),
          text({size: 3, className: textClass}, `I’ve spent 5 years working with tiny startups, growing businesses and established organisations to launch websites and apps.`),
          text({size: 3, className: textClass}, `To help see if you think I’d be a good fit for your next project, here’s a bit about what I do, how I work and why you’d hire me.`)
        ])
      ])
    ])
  ])
}

export default hh(AboutIntro)

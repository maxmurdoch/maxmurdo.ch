import { h, div } from 'react-hyperscript-helpers'
import { StickyContainer } from 'react-sticky'
import container from '../site-container'
import style from '../../helpers/style'

import textIntro from '../text-intro'
import link from '../link'
import header from '../header'
import text from '../text'
import goCardless from '../gocardless'
import mathsBuilders from '../maths-builders'
import grid from '../grid'
import cell from '../cell'

import { v4 } from 'uuid'

const Home = () => {
  const intro = div({
    className: style({
      height: '100vh',
    }),
  }, [textIntro()])

  const contact = text({
    key: v4(),
  }, [
    'I’m booked till March, but if you’d like to work together please ',
    link({
      href: `mailto:max@maxmurdo.ch?subject=Let’s%20work%20together&body=Hi%20Max!%20👋`,
    },
      'get in touch'),
    '.',
  ])

  return h(StickyContainer, [
    grid([
      cell({
        column: 1,
        of: 1,
      }, [intro]),
      cell({
        column: 1,
        of: 1,
      }, [
        container([
          header(),
          mathsBuilders(),
          goCardless(),
          contact,
        ]),
      ]),
    ]),
  ])
}

export default Home

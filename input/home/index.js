import {
  section,
} from 'react-hyperscript-helpers'
import R from 'ramda'
import link from '../link'
import text from '../text'
import header from '../header'
import grid from '../grid'
import cell from '../cell'
import { v4 } from 'uuid'

const Home = () => {
  const intro = text({ key: v4() }, ['Murdoch Studio designs and builds digital products.'])
  const education = link({ key: v4(), href: 'http://www.eng.cam.ac.uk/' }, 'education')
  const government = link({ key: v4(), href: 'https://unido.org' }, 'government')
  const medicine = link({ key: v4(), href: 'https://medium.com/ayuda-heuristics' }, 'medicine')
  const finance = link({ key: v4(), href: 'https://www.gocardless.com' }, 'finance')
  const clientServices = link({ key: v4(), href: 'https://www.adaptivelab.com' }, 'client services')
  const clients = text({ key: v4() }, [
    'I’ve made websites and apps for people working in ',
    R.intersperse(', ', [education, government, medicine, finance]),
    ' and ',  clientServices, '.'])
    const signOff = text({ key: v4() }, 'I’ll make a real portfolio when I have time. (Soon. Promise.)')
    const contact = text({ key: v4() }, ['I’m booked till March, but if you’d like to work together please ',
    link({ href: `mailto:max@maxmurdo.ch?subject=Let’s%20work%20together&body=Hi%20Max!%20👋` },
      'get in touch'),
      '.',
  ])

  return section([
    header(),
    grid([
      cell({ col: 6 }, [intro]),
      grid({ justify: 'end' }, [cell({ col: 6 }, [clients])]),
      contact,
      signOff,
    ]),
  ])
}

export default Home

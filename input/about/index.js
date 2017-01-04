import {
  hr,
  div,
  section,
} from 'react-hyperscript-helpers'
import R from 'ramda'
import link from '../link'
import image from '../image'
import text from '../text'
import styles from './about.css'
import photo from '../images/max.jpg'

const About = () => {
  const first = text('Hi, I’m Max, a digital designer and programmer in London.')
  const education = link({ href: 'http://www.eng.cam.ac.uk/' }, 'education')
  const government = link({ href: 'https://unido.org' }, 'government')
  const medicine = link({ href: 'https://medium.com/ayuda-heuristics' }, 'medicine')
  const finance = link({ href: 'https://www.gocardless.com' }, 'finance')
  const clientServices = link({ href: 'https://www.adaptivelab.com' }, 'client services')
  const second = text([
    'I’ve made websites and apps for people working in ',
    R.intersperse(', ', [education, government, medicine, finance]),
    ' and ',  clientServices, '.'])
    const third = text('I’ll make a proper website when I have time. Promise.')
    const fourth = text(['I’m booked till March, but if you’d like to work together please ',
    link({ href: `mailto:max@maxmurdo.ch?subject=Let’s%20work%20together&body=Hi%20Max!%20👋` },
      'get in touch'),
      '.',
  ])
  const avatar = image({
    position: 'right',
    description: 'Photo of Max',
    src: photo,
  })

  return section({ className: styles.section }, [
    div([
      avatar,
      first,
      hr({className: styles.line }),
      second,
      third,
      fourth,
    ]),
  ])
}

export default About

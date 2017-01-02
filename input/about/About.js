import {
    h,
    p,
    a,
    div,
    section,
} from 'react-hyperscript-helpers'
import R from 'ramda'
import Image from '../image/Image'
import styles from './about.css'
import photo from '../images/max.jpg'

const About = () => {
    const first = p({ className: styles.text }, `Hi, I’m Max.`)
    const education = a({ className: styles.link, href: 'https://www.cam.ac.uk/' }, 'education')
    const government = a({ className: styles.link, href: 'https://unido.org' }, 'government')
    const medicine = a({ className: styles.link, href: 'https://medium.com/ayuda-heuristics' }, 'medicine')
    const finance = a({ className: styles.link, href: 'https://www.gocardless.com' }, 'finance')
    const clientServices = a({ className: styles.link, href: 'https://www.adaptivelab.com' }, 'client services')
    const second = p({ className: styles.text }, [
      `I’m a digital product designer. I’ve made websites and apps for people working in `,
      R.intersperse(', ', [education, government, medicine, finance]),
      ` and `,  clientServices, `.`])
    const third = p({ className: styles.text }, `As an independent I help clients make their digital products simple, clear and useful.`)
    const fourth = p({ className: styles.text }, [`If you’d like to work together, please `,
        a({
            className: styles.link,
            href: `mailto:max@maxmurdo.ch?subject=Let's%20work%20together&body=Hi%20Max!%20👋`,
          },
          `get in touch`),
          `.`,
    ])
    const image = h(Image, {
        position: 'right',
        description: 'Photo of Max',
        src: photo,
    })

    return section({ className: styles.section }, [
        div([image,
            first,
            second,
            third,
            fourth,
        ]),
    ])
}

export default About

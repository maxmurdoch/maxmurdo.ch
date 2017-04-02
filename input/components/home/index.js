import {h} from 'react-hyperscript-helpers'
import {StickyContainer} from 'react-sticky'
import container from '../site-container'

import simpleIntro from '../simple-intro'
import header from '../header'
import footer from '../footer'
import goCardless from '../gocardless'
import codeAtUni from '../code-at-uni'
import mathsBuilders from '../maths-builders'

const Home = () => h(StickyContainer, [
  simpleIntro(),
  header(),
  container([
    mathsBuilders(),
    codeAtUni(),
    goCardless(),
    footer()
  ])
])

export default Home

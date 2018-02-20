import {hh, h} from 'react-hyperscript-helpers'
import colourIntro from '../colour-intro'
import mobileIntro from '../mobile-intro'
import Media from 'react-media'

import {smallWidth} from '../../constants/media'

const Intro = menuIsOpen =>
  h(Media, {query: smallWidth}, [
    matches =>
      matches ? mobileIntro() : colourIntro({stopAnimationIf: menuIsOpen})
  ])

export default hh(Intro)

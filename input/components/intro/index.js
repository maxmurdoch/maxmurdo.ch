import {hh, h, menu} from 'react-hyperscript-helpers'
import colourIntro from '../colour-intro'
import mobileIntro from '../mobile-intro'
import Media from 'react-media'

import {smallWidth} from '../../constants/media'

const Intro = ({menuIsOpen}) => mobileIntro({stopAnimationIf: menuIsOpen})

export default hh(Intro)

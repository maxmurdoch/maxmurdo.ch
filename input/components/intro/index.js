import {hh} from 'react-hyperscript-helpers'
import mobileIntro from '../mobile-intro'

const Intro = ({menuIsOpen}) => mobileIntro({stopAnimationIf: menuIsOpen})

export default hh(Intro)

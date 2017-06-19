import grid from '../grid'
import cell from '../cell'
import {css} from 'glamor'
import {h, div} from 'react-hyperscript-helpers'
import screenImage from '../screen-image'
import firstPage from '../../images/first-page.svg'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import geometryAndMeasures from '../../images/maths-builder-geometry-and-measures-1.svg'
import mathsBuilderProfile from '../../images/maths-builder-profile.svg'

const Gallery = () => {
  return h(
    Slider,
    {
      dots: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      className: css({
        minHeight: 0,
        minWidth: 0
      })
    },
    [
      div(
        {
          className: css({})
        },
        [screenImage({src: firstPage})]
      ),
      div(
        {
          className: css({})
        },
        [screenImage({src: geometryAndMeasures})]
      ),
      div(
        {
          className: css({})
        },
        [screenImage({src: mathsBuilderProfile})]
      )
    ]
  )
}

export default Gallery

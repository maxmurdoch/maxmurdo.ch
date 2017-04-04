import {Component} from 'react'
import R from 'ramda'
import {hh, div} from 'react-hyperscript-helpers'
import {css} from 'glamor'
import aos from 'aos'

import space from '../../constants/space'
import firstPage from '../../images/first-page.svg'
import geometryAndMeasures from '../../images/maths-builder-geometry-and-measures-1.svg'
import mathsBuilderProfile from '../../images/maths-builder-profile.svg'

import imageRow from '../image-row'
import link from '../link'
import grid from '../grid'
import cell from '../cell'
import text from '../text'

class MathsBuilders extends Component {
  componentDidMount() {
    return aos.init()
  }

  render() {
    return div({
      className: css({
        paddingTop: R.nth(2, space),
        marginTop: R.nth(2, space)
      })
    }, [
      grid([
        cell({
          small: {column: 1, of: 1},
          medium: {column: 1, of: 3},
          large: {column: 1, of: 2},
          bottomGutter: true
        }, [
          div({'data-aos': 'fade-in'}, [
            text({tag: 'h1', size: 2, largeSize: 3, className: css({margin: 0})}, 'Maths Builders')])]),
        cell({
          small: {column: 1, of: 1},
          medium: {column: 2, of: 3},
          large: {column: 1, of: 2},
          bottomGutter: true
        }, [
          div({'data-aos': 'fade-in', 'data-aos-delay': 200}, [
            text({tag: 'p', size: 2, largeSize: 3, shade: 2, className: css({margin: 0})}, [
              'I worked with the ',
              link({target: 'external', href: 'http://www.eng.cam.ac.uk/'}, 'University of Cambridge'),
              ' to design an app that brings GCSE maths to mobile.'
            ])])])]),
      div({
        'data-aos': 'fade-up',
        'data-aos-delay': 200
      }, [
        grid([
          cell([imageRow({
            images: [firstPage, geometryAndMeasures, mathsBuilderProfile]
          })])
        ])
      ])
    ])
  }
        }

export default hh(MathsBuilders)

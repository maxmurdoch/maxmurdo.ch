import {Component} from 'react'
import R from 'ramda'
import {hh, div} from 'react-hyperscript-helpers'
import {css} from 'glamor'
import aos from 'aos'

import space from '../../constants/space'

import mathsBuildersCover from '../maths-builders-cover'
import mathsBuildersCoverText from '../maths-builders-cover-text'

import grid from '../grid'
import cell from '../cell'

class MathsBuilders extends Component {
  componentDidMount() {
    return aos.init()
  }

  render() {
    return div({
      'data-aos': 'fade-in',
      'data-aos-delay': 100
    }, [
      div({
        className: css({
          paddingTop: R.nth(6, space),
          marginTop: R.nth(6, space),
          paddingBottom: R.nth(6, space),
          marginBottom: R.nth(6, space)
        })
      }, [
        grid({
          align: 'center'
        }, [
          cell({
            small: {
              column: 1,
              of: 1
            },
            medium: {
              column: 1,
              of: 2
            },
            large: {
              column: 1,
              of: 2
            },
            bottomGutter: true
          }, [mathsBuildersCoverText()]),
          cell({
            small: {
              column: 1,
              of: 1
            },
            medium: {
              column: 1,
              of: 2
            },
            large: {
              column: 1,
              of: 2
            },
            bottomGutter: true
          }, [mathsBuildersCover()])
        ])
      ])
    ])
  }
}

export default hh(MathsBuilders)

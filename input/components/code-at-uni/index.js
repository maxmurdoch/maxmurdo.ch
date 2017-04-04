import {Component} from 'react'
import {hh, div} from 'react-hyperscript-helpers'
import R from 'ramda'
import {css} from 'glamor'
import aos from 'aos'

import space from '../../constants/space'
import codeAtUni1 from '../../images/code-at-uni-1.png'
import codeAtUni2 from '../../images/code-at-uni-2.png'

import link from '../link'
import screenImage from '../screen-image'
import grid from '../grid'
import cell from '../cell'
import text from '../text'

class CodeAtUni extends Component {
  componentDidMount() {
    return aos.init()
  }

  render() {
    return div({
      className: css({
        paddingTop: R.nth(4, space),
        marginTop: R.nth(4, space)
      })
    }, [
      grid([
        cell({
          small: {column: 1, of: 1},
          medium: {column: 1, of: 3},
          large: {column: 1, of: 2},
          bottomGutter: true
        }, [
          div({'data-aos': 'fade-in'},
            [
              text({
                tag: 'h1',
                size: 2,
                largeSize: 3,
                className: css({margin: 0})
              }, 'Code at Uni')
            ])
        ]),
        cell({
          small: {column: 1, of: 1},
          medium: {column: 2, of: 3},
          large: {column: 1, of: 2},
          bottomGutter: true
        }, [
          div({'data-aos': 'fade-in', 'data-aos-delay': 200}, [
            text({
              tag: 'p',
              size: 2,
              largeSize: 3,
              shade: 2,
              className: css({margin: 0})
            }, [
              'I made a v1 of a new brand and website for ',
              link({href: 'http://www.codeatuni.com/'}, ['Code at Uni']),
              ' the new education startup that wants to teach all students to code.'
            ])])])]),
      div({'data-aos': 'fade-up', 'data-aos-delay': 200}, [grid({
        align: 'center'
      }, [
        cell({
          small: {column: 1, of: 1},
          medium: {column: 2, of: 3},
          large: {column: 2, of: 3},
          bottomGutter: true
        }, [
          screenImage({src: codeAtUni1})
        ]),
        cell({
          small: {column: 1, of: 1},
          medium: {column: 1, of: 3},
          large: {column: 1, of: 3},
          bottomGutter: true
        }, [
          screenImage({src: codeAtUni2})
        ])
      ])])
    ])
  }
      }

export default hh(CodeAtUni)

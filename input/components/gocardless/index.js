import {Component} from 'react'
import {hh, div} from 'react-hyperscript-helpers'
import R from 'ramda'
import {css} from 'glamor'
import aos from 'aos'

import space from '../../constants/space'
import goCardless1 from '../../images/gocardless-1.png'

import link from '../link'
import screenImage from '../screen-image'
import grid from '../grid'
import cell from '../cell'
import text from '../text'

class GoCardless extends Component {
  componentDidMount() {
    aos.init()
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
          div({'data-aos': 'fade-in'}, [
            text({tag: 'h1', size: 2, largeSize: 3, className: css({margin: 0})}, 'GoCardless')])
        ]
        ),
        cell({
          small: {column: 1, of: 1},
          medium: {column: 2, of: 3},
          large: {column: 1, of: 2},
          bottomGutter: true
        }, [
          div({'data-aos': 'fade-in', 'data-aos-delay': 200}, [
            text({tag: 'p', size: 2, largeSize: 3, shade: 2, className: css({margin: 0})}, [
              'I spent 2 years as a designer and software engineer at ',
              link({href: 'https://gocardless.com'}, ['GoCardless']),
              ' where I focussed on the second version of the core product, designing and building components for a dashboard or public facing APIs.'
            ])])
        ])]),
      grid([
        cell({bottomGutter: true}, [
          div({'data-aos': 'fade-up', 'data-aos-delay': 200}, [
            screenImage({src: goCardless1})])
        ])
      ])
    ])
  }
}

export default hh(GoCardless)

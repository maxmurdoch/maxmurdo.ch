import {Component} from 'react'
import R from 'ramda'
import {hh, div, br} from 'react-hyperscript-helpers'
import {css} from 'glamor'
import Rellax from 'rellax'
import aos from 'aos'

import container from '../site-container'
import text from '../text'
import grid from '../grid'
import cell from '../cell'

class SimpleIntro extends Component {
  constructor(props) {
    super(props)
    this.handleScroll = this.handleScroll.bind(this)
    this.state = {
      opacity: 1,
      rellax: ''
    }
  }

  componentWillMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentDidMount() {
    aos.init()
    this.setState({
      rellax: new Rellax('.rellax')
    })
  }

  componentWillUnmount() {
    this.state.rellax.destroy()
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll() {
    const scrollTop = document.body.scrollTop
    const speed = R.divide(scrollTop, R.divide(window.innerHeight, 2))
    this.setState({
      opacity: R.subtract(1, speed)
    })
  }

  render() {
    return div({
      className: 'rellax',
      'data-rellax-speed': -5
    }, [
      container(
        [
          div({
            className: css({
              height: '100vh',
              maxWidth: '100%',
              boxSizing: 'border-box'
            }),
            'data-aos': 'fade-in'
          }, [
            div({
              className: css({
                height: '100%'
              }),
              style: {
                opacity: this.state.opacity
              }
            }, [
              grid({
                align: 'center'
              }, [
                cell([
                  text({size: 4}, [
                    `Hi`,
                    br(),
                    `I’m Max`,
                    br(),
                    `I design and build digital\u00A0products`
                  ])
                ])
              ])
            ])
          ])
        ])
    ])
  }
}

export default hh(SimpleIntro)

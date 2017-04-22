import {Component} from 'react'
import R from 'ramda'
import {hh, div} from 'react-hyperscript-helpers'
import {css} from 'glamor'
import Rellax from 'rellax'

import container from '../site-container'
import text from '../text'
import grid from '../grid'

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
    this.setState({
      rellax: new Rellax('.rellax')
    })
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
    this.state.rellax.destroy()
  }

  handleScroll() {
    const scrollTop = document.body.scrollTop
    const speed = R.divide(scrollTop, R.divide(window.innerHeight, 2))
    this.setState({opacity: R.subtract(1, speed)})
  }

  render() {
    return container(
      [
        div({
          className: css({height: '100vh', maxWidth: '100%', boxSizing: 'border-box'}),
          style: {opacity: this.state.opacity}
        }, [
          grid({align: 'center'}, [
            div({
              className: css({
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                justifyContent: 'center'
              })
            }, [
              div({className: 'rellax', 'data-rellax-speed': -1}, [
                text({
                  tag: 'h1',
                  smallSize: 3,
                  mediumSize: 4,
                  largeSize: 5,
                  'data-aos': 'fade-in',
                  'data-aos-duration': 1000,
                  'data-aos-anchor-placement': 'top-bottom'
                }, `Hi`),
                text({
                  tag: 'h1',
                  smallSize: 3,
                  mediumSize: 4,
                  largeSize: 5,
                  'data-aos': 'fade-in',
                  'data-aos-duration': 1000,
                  'data-aos-anchor-placement': 'top-bottom',
                  'data-aos-delay': 500
                }, `I’m Max`),
                text({
                  tag: 'h1',
                  smallSize: 3,
                  mediumSize: 4,
                  largeSize: 5,
                  'data-aos-anchor-placement': 'top-bottom',
                  'data-aos': 'fade-in',
                  'data-aos-duration': 1000,
                  'data-aos-delay': 1000
                }, `I design and build digital\u00A0products`)
              ])
            ])
          ])
        ])
      ])
  }
}

export default hh(SimpleIntro)

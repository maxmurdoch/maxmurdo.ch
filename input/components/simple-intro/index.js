import {Component} from 'react'
import R from 'ramda'
import {hh, div} from 'react-hyperscript-helpers'
import {css} from 'glamor'

import container from '../site-container'
import text from '../text'
import grid from '../grid'
import cell from '../cell'

class SimpleIntro extends Component {
  constructor(props) {
    super(props)
    this.state = {
      opacity: 1
    }
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentWillMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll() {
    const scrollTop = document.body.scrollTop
    const speed = R.divide(scrollTop, R.divide(window.innerHeight, 2))
    const opacity = R.subtract(0.8, speed)
    if (R.gte(opacity, 0)) {
      this.setState({opacity})
    }
  }

  render() {
    return container([
      div(
        {
          className: css({
            boxSizing: 'border-box',
            overflowX: 'hidden',
            height: '90vh',
            maxWidth: '100%',
            width: '100vw'
          }),
          style: {opacity: this.state.opacity}
        },
        [
          grid({align: 'center'}, [
            cell({align: 'center'}, [
              div({className: 'rellax', 'data-rellax-speed': -4}, [
                text(
                  {
                    tag: 'h1',
                    smallSize: 4,
                    mediumSize: 5,
                    largeSize: 6
                  },
                  'Hi'
                ),
                text(
                  {
                    tag: 'h1',
                    smallSize: 4,
                    mediumSize: 5,
                    largeSize: 6
                  },
                  'I’m Max'
                ),
                text(
                  {
                    tag: 'h1',
                    smallSize: 4,
                    mediumSize: 5,
                    largeSize: 6
                  },
                  'I make digital\u00A0products'
                )
              ])
            ])
          ])
        ]
      )
    ])
  }
}

export default hh(SimpleIntro)

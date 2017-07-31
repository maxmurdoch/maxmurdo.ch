import R from 'ramda'
import {Component} from 'react'
import {hh, div} from 'react-hyperscript-helpers'
import {css} from 'glamor'

import text from '../text'
import container from '../site-container'
import grid from '../grid'
import cell from '../cell'
import {HEADER_HEIGHT} from '../header'

import {medium, large} from '../../constants/media'

const getRandom = list =>
  R.nth(Math.floor(R.multiply(R.length(list), Math.random())), list)
class ColourIntro extends Component {
  constructor(props) {
    super(props)
    this.state = {
      backgroundColor: '',
      firstPosition: 0,
      secondPosition: 0,
      thirdPosition: 0,
      transitionTimingFunction: 'cubic-bezier(.1, .2, .1, 1)'
    }
    this.updateColour = R.bind(this.updateColour, this)
    this.updatePosition = R.bind(this.updatePosition, this)
  }

  componentWillMount() {
    setInterval(this.updateColour, 2000)
    setInterval(this.updatePosition, 4000)
    setTimeout(this.updatePosition, 0)
    this.updateColour()

    window.addEventListener('resize', this.updatePosition)
  }

  updatePosition() {
    const operands = ['-', '']
    const divisors = R.range(0, 45)

    const random = () => `${getRandom(operands)}${getRandom(divisors)}`

    this.setState({
      firstPosition: `translateY(${random()}%)`,
      secondPosition: `translateY(${random()}%)`,
      thirdPosition: `translateY(${random()}%)`
    })
  }

  updateColour() {
    const colours = [
      '#FFFBE5',
      '#FFF7F5',
      '#F0FFF6',
      '#F0FAFF',
      '#F1F0FF',
      '#FFF0F7'
    ]
    const colourSet = R.filter(
      backgroundColor =>
        R.not(R.equals(backgroundColor, this.state.backgroundColor)),
      colours
    )
    const backgroundColor = getRandom(colourSet)
    this.setState({backgroundColor})
  }

  render() {
    const {backgroundColor, transitionTimingFunction} = this.state
    return div(
      {
        className: css({
          width: '100vw',
          height: '100vh',
          display: 'flex',
          transition: 'background-color 2s',
          transitionTimingFunction,
          willChange: 'background-color',
          backgroundColor,
          [medium]: {paddingTop: HEADER_HEIGHT},
          [large]: {paddingTop: HEADER_HEIGHT}
        })
      },
      [
        container([
          grid({wrap: false}, [
            cell(
              {
                topGutter: true,
                bottomGutter: true,
                grow: 1,
                align: 'center',
                className: css({
                  willChange: 'transform',
                  transform: this.state.firstPosition,
                  transition: 'all 1s',
                  transitionTimingFunction
                })
              },
              [text({size: 4}, 'Hi, I’m Max')]
            ),
            cell(
              {
                topGutter: true,
                bottomGutter: true,
                grow: 1,
                align: 'center',
                className: css({
                  willChange: 'transform',
                  transform: this.state.secondPosition,
                  transition: 'all 1s',
                  transitionTimingFunction
                })
              },
              [text({size: 4}, 'I design & build')]
            ),
            cell(
              {
                topGutter: true,
                bottomGutter: true,
                grow: 1,
                align: 'center',
                className: css({
                  willChange: 'transform',
                  transform: this.state.thirdPosition,
                  transition: 'all 1s',
                  transitionTimingFunction
                })
              },
              [text({size: 4}, 'digital products')]
            )
          ])
        ])
      ]
    )
  }
}

export default hh(ColourIntro)

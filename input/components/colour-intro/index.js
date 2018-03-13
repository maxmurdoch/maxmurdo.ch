import R from 'ramda'
import {Component} from 'react'
import {hh, div} from 'react-hyperscript-helpers'
import {css} from 'glamor'

import text from '../text'
import container from '../site-container'
import grid from '../grid'
import cell from '../cell'
import wordCycle from '../word-cycle'
import {HEADER_HEIGHT} from '../header'

import {medium, large} from '../../constants/media'

const getRandomFromList = list =>
  R.nth(Math.floor(R.multiply(R.length(list), Math.random())), list)

class ColourIntro extends Component {
  constructor(props) {
    super(props)
    this.state = {
      operands: ['-', ''],
      divisors: R.range(5, 30),
      isPlaying: false,
      firstPosition: 0,
      secondPosition: 0,
      thirdPosition: 0,
      transitionTimingFunction: 'cubic-bezier(.1, .2, .1, 1)',
      stopColourInterval: () => null,
      stopPositionInterval: () => null
    }
    this.updateColour = this.updateColour.bind(this)
    this.updatePosition = this.updatePosition.bind(this)
    this.startAnimation = this.startAnimation.bind(this)
    this.stopAnimation = this.stopAnimation.bind(this)
  }

  componentWillMount() {
    this.startAnimation()

    window.addEventListener('resize', this.updatePosition)
  }

  componentWillUpdate(nextProps) {
    if (R.not(R.equals(nextProps, this.props))) {
      nextProps.stopAnimationIf ? this.stopAnimation() : this.startAnimation()
    }
  }

  componentWillUnmount() {
    this.stopAnimation()
  }

  startAnimation() {
    if (this.state.isPlaying) {
      return
    }
    const updateColourId = setInterval(this.updateColour, 2000)
    const updatePositionId = setInterval(this.updatePosition, 4000)
    setTimeout(this.updatePosition, 0)
    setTimeout(this.updateColour, 0)

    this.setState({
      isPlaying: true,
      stopColourInterval: () => clearInterval(updateColourId),
      stopPositionInterval: () => clearInterval(updatePositionId)
    })

    window.addEventListener('resize', this.updatePosition)
  }

  stopAnimation() {
    if (R.equals(this.state.isPlaying, false)) {
      return
    }

    this.setState({isPlaying: false})
    this.state.stopColourInterval()
    this.state.stopPositionInterval()

    window.removeEventListener('resize', this.updatePosition)
  }

  updatePosition() {
    const random = () =>
      `${getRandomFromList(this.state.operands)}${getRandomFromList(
        this.state.divisors
      )}`

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
    const backgroundColor = getRandomFromList(colourSet)
    this.setState({backgroundColor})
  }

  render() {
    const {transitionTimingFunction} = this.state
    return div(
      {
        className: css({
          width: '100%',
          height: '100vh',
          display: 'flex',
          transitionTimingFunction,
          [medium]: {paddingTop: HEADER_HEIGHT},
          [large]: {paddingTop: HEADER_HEIGHT}
        })
      },
      [
        container([
          grid(
            {
              wrap: false
            },
            [
              cell(
                {
                  topGutter: true,
                  bottomGutter: true,
                  grow: 1,
                  align: 'center',
                  className: css({
                    willChange: 'transform',
                    transitionProperty: 'all',
                    transitionDuration: '2000ms',
                    transitionDelay: 0,
                    transitionTimingFunction
                  }),
                  style: {transform: this.state.firstPosition}
                },
                [text({size: 4, family: 'wide'}, 'Hi, I’m Max')]
              ),
              cell(
                {
                  topGutter: true,
                  bottomGutter: true,
                  grow: 1,
                  align: 'center',
                  justify: 'center',
                  className: css({
                    willChange: 'transform',
                    transitionProperty: 'all',
                    transitionDuration: '2000ms',
                    transitionDelay: '250ms',
                    transitionTimingFunction
                  }),
                  style: {transform: this.state.secondPosition}
                },
                [
                  wordCycle({words: ['brand', 'design', 'build']}, [
                    word => text({family: 'wide', size: 4}, `I ${word}`)
                  ])
                ]
              ),
              cell(
                {
                  topGutter: true,
                  bottomGutter: true,
                  grow: 1,
                  align: 'center',
                  justify: 'end',
                  className: css({
                    willChange: 'transform',
                    transitionProperty: 'all',
                    transitionDuration: '2000ms',
                    transitionDelay: '500ms',
                    transitionTimingFunction
                  }),
                  style: {transform: this.state.thirdPosition}
                },
                [text({size: 4, family: 'wide'}, 'digital products')]
              )
            ]
          )
        ])
      ]
    )
  }
}

export default hh(ColourIntro)

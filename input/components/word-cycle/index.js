import PropTypes from 'prop-types'
import {Component} from 'react'
import R from 'ramda'
import {hh, div} from 'react-hyperscript-helpers'

class WordCycle extends Component {
  constructor() {
    super()
    this.state = {
      word: null,
      stopUpdatingWord: R.F,
      wordIsCycling: false
    }
    this.updateWord = this.updateWord.bind(this)
    this.startCycling = this.startCycling.bind(this)
    this.stopCycling = this.stopCycling.bind(this)
  }

  updateWord() {
    const {words} = this.props
    const {word} = this.state
    const currentIndex = R.findIndex(R.equals(word))(words)
    const nextWord = R.or(R.nth(R.inc(currentIndex), words), R.head(words))
    this.setState({
      word: nextWord
    })
  }

  startCycling() {
    this.updateWord()
    const updateWordIntervalId = setInterval(
      this.updateWord,
      this.props.updateInterval
    )
    this.setState({
      word: R.head(this.props.words),
      stopUpdatingWord: () => clearInterval(updateWordIntervalId),
      isCycling: true
    })
  }

  stopCycling() {
    this.state.stopUpdatingWord()
    this.setState({
      isCycling: false
    })
  }

  componentWillMount() {
    this.startCycling()
  }

  componentDidUpdate() {
    if (this.props.stopAnimationIf && this.state.isCycling) {
      this.stopCycling()
    } else if (!this.props.stopAnimationIf && !this.state.isCycling) {
      this.startCycling()
    }
  }

  componentWillUnmount() {
    this.stopCycling()
  }

  render() {
    return div([this.props.children(this.state.word)])
  }
}

WordCycle.propTypes = {
  words: PropTypes.array.isRequired,
  children: PropTypes.func.isRequired,
  updateInterval: PropTypes.number,
  stopAnimationIf: PropTypes.bool
}

WordCycle.defaultProps = {
  updateInterval: 500
}

export default hh(WordCycle)

import PropTypes from 'prop-types'
import {Component} from 'react'
import R from 'ramda'
import {hh, div} from 'react-hyperscript-helpers'

class WordCycle extends Component {
  constructor() {
    super()
    this.state = {
      word: null,
      stopUpdatingWord: R.F
    }
    this.updateWord = this.updateWord.bind(this)
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

  componentWillMount() {
    this.updateWord()
    const updateWordIntervalId = setInterval(
      this.updateWord,
      this.props.updateInterval
    )
    this.setState({
      word: R.head(this.props.words),
      stopUpdatingWord: () => clearInterval(updateWordIntervalId)
    })
  }

  componentWillUnmount() {
    this.state.stopUpdatingWord()
  }

  render() {
    return div([this.props.children(this.state.word)])
  }
}

WordCycle.propTypes = {
  words: PropTypes.array.isRequired,
  children: PropTypes.func.isRequired,
  updateInterval: PropTypes.number
}

WordCycle.defaultProps = {
  updateInterval: 500
}

export default hh(WordCycle)

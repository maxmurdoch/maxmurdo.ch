import R from 'ramda'
import {Component} from 'react'
import {hh, div} from 'react-hyperscript-helpers'
import {css} from 'glamor'

import text from '../text'
import containerBox from '../site-container-box'
import {HEADER_HEIGHT} from '../header'

import {medium, large} from '../../constants/media'

class MobileIntro extends Component {
  constructor() {
    super()
    this.state = {
      words: ['design', 'build'],
      word: 'design',
      stopUpdatingWord: null
    }
    this.updateWord = this.updateWord.bind(this)
  }

  updateWord() {
    const {word, words} = this.state
    const currentIndex = R.findIndex(R.equals(word))(words)
    const nextWord = R.or(R.nth(R.inc(currentIndex), words), R.head(words))
    this.setState({
      word: nextWord
    })
  }

  componentWillMount() {
    this.updateWord()
    const updateWordIntervalId = setInterval(this.updateWord, 500)
    this.setState({
      stopUpdatingWord: () => clearInterval(updateWordIntervalId)
    })
  }

  componentWillUnmount() {
    this.state.stopUpdatingWord()
  }

  render() {
    return div(
      {
        className: css({
          width: '100%',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          [medium]: {paddingTop: HEADER_HEIGHT},
          [large]: {paddingTop: HEADER_HEIGHT}
        })
      },
      [
        containerBox([
          text({size: 3}, 'Hi'),
          text({size: 3}, 'I’m Max'),
          text({size: 3}, `I ${this.state.word} digital products`)
        ])
      ]
    )
  }
}

export default hh(MobileIntro)

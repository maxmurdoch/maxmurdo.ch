import R from 'ramda'
import {Component} from 'react'
import {hh, div} from 'react-hyperscript-helpers'
import {css} from 'glamor'

import text from '../text'
import containerBox from '../site-container-box'
import {HEADER_HEIGHT} from '../header'
import wordCycle from '../word-cycle'

import {medium, large} from '../../constants/media'

const MobileIntro = () => {
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
        wordCycle(
          {
            words: ['brand', 'design', 'build']
          },
          [word => text({size: 3}, `I ${word} digital products`)]
        )
      ])
    ]
  )
}

export default hh(MobileIntro)

import R from 'ramda'
import {Component} from 'react'
import {hh, div} from 'react-hyperscript-helpers'
import {css} from 'glamor'

import text from '../text'
import containerBox from '../site-container-box'
import {HEADER_HEIGHT} from '../header'
import wordCycle from '../word-cycle'

import {medium, large} from '../../constants/media'

const MobileIntro = ({stopAnimationIf}) => {
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
        text({size: 4}, 'Hi'),
        text({size: 4}, 'I’m Max'),
        wordCycle(
          {
            words: ['brand', 'design', 'build'],
            stopAnimationIf
          },
          [word => text({size: 4}, `I ${word} digital products`)]
        )
      ])
    ]
  )
}

export default hh(MobileIntro)

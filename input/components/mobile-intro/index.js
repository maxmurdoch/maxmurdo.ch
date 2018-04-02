import {hh, div} from 'react-hyperscript-helpers'
import {css} from 'glamor'

import text from '../text'
import containerBox from '../site-container-box'
import wordCycle from '../word-cycle'
import cursorDown from '../../assets/cursor-down.svg'

const MobileIntro = ({stopAnimationIf}) => {
  return div(
    {
      className: css({
        width: '100%',
        height: '100vh',
        display: 'flex',
        cursor: `url(${cursorDown}), default`,
        flexDirection: 'column'
      })
    },
    [
      containerBox([
        text(
          {
            size: 3,
            largeSize: 5
          },
          'Hi'
        ),
        text(
          {
            size: 3,
            largeSize: 5
          },
          'I’m Max'
        ),
        wordCycle(
          {
            words: ['brand', 'design', 'build'],
            stopAnimationIf
          },
          [
            word =>
              text(
                {
                  size: 3,
                  largeSize: 5
                },
                `I ${word} digital products`
              )
          ]
        )
      ])
    ]
  )
}

export default hh(MobileIntro)

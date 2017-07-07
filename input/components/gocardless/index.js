import {hh, div} from 'react-hyperscript-helpers'
import R from 'ramda'
import {css} from 'glamor'

import space from '../../constants/space'
import goCardless1 from '../../images/gocardless-1.png'

import link from '../link'
import screenImage from '../screen-image'
import grid from '../grid'
import cell from '../cell'
import text from '../text'
import blurLink from '../blur-link'

const GoCardless = () => {
  return div(
    {
      className: css({
        paddingTop: R.nth(4, space),
        marginTop: R.nth(4, space),
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      })
    },
    [
      grid([
        cell(
          {
            small: {column: 1, of: 1},
            medium: {column: 1, of: 3},
            large: {column: 1, of: 2},
            bottomGutter: true
          },
          [
            text(
              {
                tag: 'h1',
                size: 3,
                className: css({margin: 0})
              },
              'GoCardless'
            )
          ]
        ),
        cell(
          {
            small: {column: 1, of: 1},
            medium: {column: 2, of: 3},
            large: {column: 1, of: 2},
            bottomGutter: true
          },
          [
            text(
              {
                tag: 'p',
                size: 3,
                shade: 2,
                className: css({margin: 0})
              },
              [
                'I spent 2 years at ',
                link({to: 'https://gocardless.com'}, ['GoCardless']),
                ' doing a mix of design and full-stack engineering during a major redo of the core product.'
              ]
            )
          ]
        )
      ]),
      blurLink({to: '/gocardless'}, [
        grid([cell({bottomGutter: true}, [screenImage({src: goCardless1})])])
      ])
    ]
  )
}

export default hh(GoCardless)

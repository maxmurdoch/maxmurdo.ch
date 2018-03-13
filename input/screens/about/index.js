import R from 'ramda'
import {div, img, span} from 'react-hyperscript-helpers'
import {css} from 'glamor'

import container from '../../components/site-container'
import headerPadding from '../../components/header-padding'
import navMargin from '../../components/nav-margin'
import text from '../../components/text'
import me from '../../images/max.jpg'
import {medium, large} from '../../constants/media'
import space from '../../constants/space'
import link from '../../components/link'

const About = () => {
  return div([
    container({bottom: true}, [
      headerPadding(),
      div([
        img({
          src: me,
          className: css({
            maxWidth: '100%',
            width: '100%',
            marginBottom: R.nth(3, space),
            [medium]: {
              float: 'right',
              width: '50%',
              marginLeft: R.nth(3, space)
            },
            [large]: {
              width: 'calc(100% / 3)'
            }
          })
        }),
        text(
          {
            size: 3,
            marginBottom: true
          },
          'I’m Max, a digital product designer and engineer with 5 years experience branding, designing and building websites and apps.'
        ),
        text(
          {
            size: 1,
            className: css({
              marginTop: R.nth(4, space),
              marginBottom: R.nth(0, space)
            })
          },
          'What type of work do you do?'
        ),
        text(
          {
            size: 3,
            marginBottom: true
          },
          [
            'I focus on projects that involve design ',
            span({className: css({fontStyle: 'italic'})}, 'and'),
            ' development. I’ve done projects that focus on one or the other, but you’ll get the most out of working with me if I do both.'
          ]
        ),
        text(
          {
            size: 1,
            className: css({
              marginTop: R.nth(4, space),
              marginBottom: R.nth(0, space)
            })
          },
          'When should you involve me?'
        ),
        text(
          {
            size: 3,
            marginBottom: true
          },
          'As soon as you can. Now, if possible. Yesterday would be best. Most digital products have a key message or idea. If you pull me in early, the design and development will be done with that in mind. It’s harder to do retrospectively.'
        ),
        text(
          {
            size: 1,
            className: css({
              marginTop: R.nth(4, space),
              marginBottom: R.nth(0, space)
            })
          },
          'How can we work together?'
        ),
        text(
          {
            size: 3,
            marginBottom: true
          },
          [
            'If you’d like to work together, send me an ',
            link(
              {
                to: 'mailto:max@maxmurdo.ch',
                target: 'external'
              },
              'email'
            ),
            ' and we can set up a call. If I’d be a good fit for your project, great! If not, I have a network of cool, smart, lovely people I can connect you to.'
          ]
        ),
        text(
          {
            size: 1,
            className: css({
              marginTop: R.nth(4, space),
              marginBottom: R.nth(0, space)
            })
          },
          'What else have you done?'
        ),
        text(
          {size: 3},
          'I’ve taught an intro to web design/development course for Code at Uni, sat on a panel for Code First Girls, and hosted JAM, a digital product conference in London.'
        )
      ])
    ]),
    navMargin()
  ])
}

export default About

import {css} from 'glamor'
import R from 'ramda'

import cell from '../cell'
import grid from '../grid'
import text from '../text'
import {div, hh} from 'react-hyperscript-helpers'
import {small, medium} from '../../constants/media'
import space from '../../constants/space'

const HomePageSectionText = ({name, description}) => {
  return grid(
    {
      gridWrapperClassName: css({
        [small]: {
          marginTop: R.nth(3, space)
        },
        [medium]: {
          marginTop: R.nth(5, space)
        }
      }),
      align: 'baseline',
      justify: 'between'
    },
    [
      cell(
        {
          small: {column: 1, of: 1},
          medium: {column: 1, of: 3},
          large: {column: 1, of: 3}
        },
        [
          div(
            {
              'data-aos': 'fade-in',
              'data-aos-delay': 100,
              'data-aos-anchor-placement': 'top-bottom'
            },
            [
              text(
                {
                  tag: 'h1',
                  smallSize: 2,
                  size: 3,
                  className: css({margin: 0})
                },
                [name]
              )
            ]
          )
        ]
      ),
      cell(
        {
          small: {column: 1, of: 1},
          medium: {column: 2, of: 3},
          large: {column: 2, of: 3}
        },
        [
          div(
            {
              'data-aos': 'fade-in',
              'data-aos-delay': 200,
              'data-aos-anchor-placement': 'top-bottom',
              className: css({
                display: 'flex',
                flexWrap: 'wrap'
              })
            },
            [
              text(
                {
                  tag: 'p',
                  smallSize: 2,
                  size: 3,
                  shade: 2,
                  className: css({margin: 0})
                },
                [description]
              )
            ]
          )
        ]
      )
    ]
  )
}

export default hh(HomePageSectionText)

import {Component} from "react"
import {hh, footer, address, br, ul, li} from "react-hyperscript-helpers"
import R from "ramda"
import {css} from "glamor"

import space from "../../constants/space"
import link from "../link"
import text from "../text"
import grid from "../grid"
import cell from "../cell"
import {small, medium, large} from "../../constants/media"
import {
  small as smallGutter,
  medium as mediumGutter,
  large as largeGutter
} from "../../constants/gutter"

class Footer extends Component {
  render() {
    return footer(
      {
        className: css({
          [small]: {height: smallGutter},
          [medium]: {height: mediumGutter},
          [large]: {height: largeGutter}
        })
      },
      [
        grid([
          cell({medium: {column: 1, of: 3}, large: {column: 1, of: 3}}, [
            ul(
              {
                className: css({listStyle: `none`, padding: 0, margin: 0}),
                "data-aos": `fade-in`,
                "data-aos-duration": 600
              },
              [
                li([
                  link({target: `external`, href: `mailto:max@maxmurdo.ch`}, [
                    text({size: 1, className: css({margin: 0})}, [
                      `max@maxmurdo.ch`
                    ])
                  ])
                ])
              ]
            )
          ]),
          cell({medium: {column: 1, of: 3}, large: {column: 1, of: 3}}, [
            ul(
              {
                className: css({listStyle: `none`, padding: 0, margin: 0}),
                "data-aos": `fade-in`,
                "data-aos-delay": 200,
                "data-aos-duration": 600
              },
              [
                li(
                  {
                    className: css({paddingBottom: R.nth(0, space)})
                  },
                  [
                    link(
                      {
                        target: `external`,
                        href: `https://twitter.com/maxalfiemurdoch`
                      },
                      [
                        text({size: 1, className: css({margin: 0})}, [
                          `Twitter`
                        ])
                      ]
                    )
                  ]
                ),
                li(
                  {
                    className: css({paddingBottom: R.nth(0, space)})
                  },
                  [
                    link(
                      {
                        target: `external`,
                        href: `https://maxmurdoch.tumblr.com/`
                      },
                      [text({size: 1, className: css({margin: 0})}, [`tumblr`])]
                    )
                  ]
                ),
                li(
                  {
                    className: css({paddingBottom: R.nth(0, space)})
                  },
                  [
                    link(
                      {
                        target: `external`,
                        href: `https://medium.com/@max_murdoch`
                      },
                      [text({size: 1, className: css({margin: 0})}, [`Medium`])]
                    )
                  ]
                )
              ]
            )
          ]),
          cell({medium: {column: 1, of: 3}, large: {column: 1, of: 3}}, [
            address(
              {
                className: css({fontStyle: `normal`}),
                "data-aos": `fade-in`,
                "data-aos-delay": 400,
                "data-aos-duration": 600
              },
              [
                text({size: 1, className: css({margin: 0})}, [
                  `Murdoch Studio`,
                  br(),
                  `6A St Andrews Court`,
                  br(),
                  `Thame`,
                  br(),
                  `Oxford`,
                  br(),
                  `OX9 3WT`
                ])
              ]
            )
          ])
        ])
      ]
    )
  }
}

export default hh(Footer)
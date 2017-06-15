import {PropTypes} from "prop-types"
import R from "ramda"
import {div, h, hh, aside} from "react-hyperscript-helpers"
import {css} from "glamor"
import {Link} from "react-router-dom"

import space from "../../constants/space"
import text from "../text"
import {medium, large} from "../../constants/media"
import {
  medium as mediumGutter,
  large as largeGutter
} from "../../constants/gutter"

const SideLogo = ({isAnimated = true}) => {
  const className = css({
    display: `none`,
    [medium]: {
      display: `block`,
      width: `calc(${mediumGutter} + ${mediumGutter})`,
      position: `fixed`,
      top: 0,
      bottom: 0,
      right: 0,
      backgroundColor: `white`
    },
    [large]: {
      display: `block`,
      position: `fixed`,
      top: 0,
      bottom: 0,
      right: 0,
      backgroundColor: `white`,
      width: `calc(${largeGutter} + ${largeGutter})`
    }
  })

  const aosAttrs = {
    "data-aos": `fade-up`,
    "data-aos-anchor-placement": `top-bottom`,
    "data-aos-delay": 200
  }

  const linkAttrs = {
    to: `/`,
    className: css({
      textDecoration: `none`
    })
  }

  const attrs = R.ifElse(
    () => R.equals(isAnimated, true),
    () => R.merge(aosAttrs, linkAttrs),
    () => linkAttrs
  )

  return aside({className}, [
    div(
      {
        className: css({
          display: `flex`,
          alignItems: `center`,
          justifyContent: `center`,
          height: `100vh`,
          textDecoration: `none`,
          paddingLeft: 0,
          paddingBottom: R.nth(1, space),
          margin: 0,
          flex: `1 1 auto`,
          listStyleType: `none`,
          [medium]: {
            padding: 0
          },
          [large]: {
            padding: 0
          }
        })
      },
      [
        h(Link, attrs(), [
          text(
            {
              size: 2,
              tag: `h1`,
              className: css({
                transform: `rotate(90deg)`,
                transformOrigin: `center`
              })
            },
            [`Max\u00A0Murdoch`]
          )
        ])
      ]
    )
  ])
}

SideLogo.propTypes = {
  isAnimated: PropTypes.bool
}

export default hh(SideLogo)

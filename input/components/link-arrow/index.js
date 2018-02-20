import R from 'ramda'
import {withRouter} from 'react-router'
import {h, hh, span} from 'react-hyperscript-helpers'
import {compose} from 'recompose'
import {css} from 'glamor'
import {Arrow} from 'reline'

import toggleHover from '../toggle-hover'
import linkComponent from '../link'
import textComponent from '../text'
import space from '../../constants/space'

const LinkArrow = ({
  className,
  to,
  isHovered,
  onMouseLeave,
  onMouseEnter,
  children
}) => {
  return linkComponent(
    {
      to,
      onMouseEnter,
      onMouseLeave,
      className: css(
        {
          display: 'inline-flex',
          alignItems: 'center'
        },
        className
      )
    },
    [
      children,
      span(
        {
          style: {
            transform: isHovered ? 'translateX(6px)' : 'translateX(0)'
          },
          className: css({
            WebkitBackfaceVisibility: 'hidden',
            WebkitTransform: 'translateZ(0) scale(1.0, 1.0)',
            marginLeft: R.nth(0, space),
            transition: '250ms transform',
            transformOrigin: 'center',
            willChange: 'transform'
          })
        },
        [h(Arrow, {strokeWidth: 2})]
      )
    ]
  )
}

const enhance = compose(hh, withRouter, toggleHover)

export default enhance(LinkArrow)

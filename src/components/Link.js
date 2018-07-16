import React from 'react'
import * as R from 'ramda'
import PropTypes from 'prop-types'
import {Link} from 'gatsby'
import {css} from 'emotion'

import BodyText from './BodyText'
import internalCursor from '../assets/cursor-internal.svg'
import externalCursor from '../assets/cursor-external.svg'
import defaultCursor from '../assets/cursor-default.svg'
import circle from '../assets/circle.svg'

const cursorFor = R.cond([
  [R.equals('internal'), R.always(`url(${internalCursor}) 8 8, auto`)],
  [R.equals('external'), R.always(`url(${externalCursor}), auto`)],
  [R.T, R.always(`url(${defaultCursor}), auto`)]
])

// const circleActiveStyle = {
//   backgroundImage: `url(${circle})`,
//   position: 'absolute',
//   width: '5rem',
//   maxWidth: 'none',
//   left: '-50%',
//   bottom: '-30%'
// }

const activeStyleFor = style => {
  const styleOptions = {
    default: {
      transform: 'skewX(0)'
    },
    nav: {
      fontWeight: 700
    },
    subtle: {
      transform: 'skewX(-12deg)'
    },
    text: {
      transform: 'skewX(-12deg)'
    }
  }

  return R.prop(style, styleOptions)
}

const hoverStyleFor = (style, type) => {
  const sharedStyle = {
    cursor: cursorFor(type)
  }
  const styleOptions = {
    default: {
      transform: 'skewX(-12deg)',
      ':hover': {
        transform: 'skewX(0)'
      },
      ':active': {
        transform: 'skewX(0)',
        outline: 0
      },
      ':focus': {
        transform: 'skewX(0)'
      }
    },
    none: {},
    nav: {
      transform: 'skewX(0)',
      ':hover': {
        fontWeight: 700
      },
      ':active': {
        fontWeight: 700,
        outline: 0
      },
      ':focus': {
        fontWeight: 700
      }
    },
    subtle: {
      transform: 'skewX(0)',
      ':hover': {
        transform: 'skewX(-12deg)'
      },
      ':active': {
        transform: 'skewX(-12deg)',
        outline: 0
      },
      ':focus': {
        transform: 'skewX(-12deg)'
      }
    },
    text: {
      transform: 'skewX(0)',
      borderBottom: '1px dotted black',
      ':hover': {
        transform: 'skewX(-12deg)',
        borderBottom: '1px solid black'
      },
      ':active': {
        transform: 'skewX(-12deg)',
        borderBottom: '1px solid black',
        outline: 0
      },
      ':focus': {
        transform: 'skewX(-12deg)',
        borderBottom: '1px solid black'
      }
    }
  }

  return {
    ...R.prop(style, styleOptions),
    ...sharedStyle
  }
}

const LinkWrapper = ({
  children,
  className,
  onMouseEnter,
  onClick,
  onMouseLeave,
  type = 'internal',
  hoverStyle = 'default',
  to,
  activeStyle,
  ...props
}) => {
  const linkStyle = css(
    {
      border: 0,
      background: 0,
      display: 'inline-flex',
      flex: '0 1 auto',
      textDecoration: 'none',
      transition: 'all 250ms cubic-bezier(0.2, 1, 0.4, 1)',
      transformOrigin: 'left bottom',
      color: 'inherit',
      padding: 0,
      ':hover': {
        cursor: cursorFor(type)
      },
      ...hoverStyleFor(hoverStyle, type)
    },
    className
  )

  const isEmail = R.test(/mailto/, to)

  if (R.equals(type, 'external')) {
    return (
      <a
        href={to}
        target={isEmail ? '_top' : '_blank'}
        className={linkStyle}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        {...props}
      >
        {children}
      </a>
    )
  } else if (R.equals(type, 'internal')) {
    return (
      <Link
        to={to}
        exact
        activeStyle={activeStyleFor(activeStyle)}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className={linkStyle}
        {...props}
      >
        {children}
      </Link>
    )
  } else if (R.equals(type, 'button')) {
    return (
      <button onClick={onClick} className={linkStyle} {...props}>
        <BodyText>{children}</BodyText>
      </button>
    )
  }
}

LinkWrapper.propTypes = {
  type: PropTypes.oneOf(['internal', 'external', 'button']),
  className: PropTypes.string,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  hoverStyle: PropTypes.string,
  to: PropTypes.string,
  children: PropTypes.node
}

export default LinkWrapper

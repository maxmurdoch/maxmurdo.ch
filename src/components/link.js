import React from 'react'
import R from 'ramda'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import {css} from 'emotion'

import BodyText from './body-text'
import {blue} from '../constants/colour'
import internalCursor from '../assets/cursor-internal.svg'
import externalCursor from '../assets/cursor-external.svg'
import defaultCursor from '../assets/cursor-default.svg'

const cursorFor = R.cond([
  [R.equals('internal'), R.always(`url(${internalCursor}) 8 8, auto`)],
  [R.equals('external'), R.always(`url(${externalCursor}), auto`)],
  [R.T, R.always(`url(${defaultCursor}), auto`)]
])

const activeStyleFor = style => {
  const styleOptions = {
    default: {
      transform: 'skewX(0)'
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
      color: blue,
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
  ...props
}) => {
  const linkStyle = css(
    {
      border: 0,
      background: 0,
      display: 'inline-flex',
      flex: '0 1 auto',
      textDecoration: 'none',
      transition: 'transform 250ms cubic-bezier(0.2, 1, 0.4, 1)',
      transformOrigin: 'left bottom',
      color: 'initial',
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
        activeStyle={activeStyleFor(hoverStyle)}
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
  children: PropTypes.string
}

export default LinkWrapper

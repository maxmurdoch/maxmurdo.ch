import React from 'react'
import * as R from 'ramda'
import {injectGlobal} from 'emotion'
import styled from 'react-emotion'
import PropTypes from 'prop-types'
import gtAmericaMonoLight from '../fonts/gt/GT-America-Mono-Light.woff'
import gtAmericaMonoLightItalic from '../fonts/gt/GT-America-Mono-Light-Italic.woff'
import gtAmericaMonoBold from '../fonts/gt/GT-America-Mono-Medium.woff'
import gtAmericaMonoBoldItalic from '../fonts/gt/GT-America-Mono-Medium-Italic.woff'
import {
  fontSize as styledFontSize,
  fontWeight as styledFontWeight,
  background,
  fontFamily,
  color,
  lineHeight as styledLineHeight,
  space
} from 'styled-system'

injectGlobal`
::selection {
  background-color: blue;
  color: white;
}
`

injectGlobal`
@font-face {
    font-family: 'GT America Mono';
    font-style: normal;
    font-weight: 300;
    src: url(${gtAmericaMonoLight}) format('woff');
  }
@font-face {
    font-family: 'GT America Mono';
    font-style: italic;
    font-weight: 300;
    src: url(${gtAmericaMonoLightItalic}) format('woff');
  }

@font-face {
    font-family: 'GT America Mono';
    font-style: normal;
    font-weight: 700;
    src: url(${gtAmericaMonoBold}) format('woff');
  }

@font-face {
    font-family: 'GT America Mono';
    font-style: italic;
    font-weight: 700;
    src: url(${gtAmericaMonoBoldItalic}) format('woff');
  }
`

injectGlobal`
* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`

const fontFamilies = {
  mono: 'GT America Mono, monospace',
  serif: 'Times'
}
const fontFamilyForType = type => R.prop(type, fontFamilies)

const Text = ({
  tag = 'p',
  fontWeight = 300,
  lineHeight = 1.5,
  fontType = 'mono',
  children,
  ...props
}) => {
  const Component = styled(tag)`
    margin: 0;
     ${styledFontSize} ${fontFamily} ${styledFontWeight}
      ${color} ${styledLineHeight} ${space} ${background}
  `
  return (
    <Component
      fontFamily={fontFamilyForType(fontType)}
      fontWeight={fontWeight}
      lineHeight={lineHeight}
      {...props}
    >
      {children}
    </Component>
  )
}

Text.propTypes = {
  tag: PropTypes.string,
  fontType: PropTypes.oneOf(['sans', 'mono', 'serif']),
  fontWeight: PropTypes.number,
  lineHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
  children: PropTypes.node,
  fontSize: PropTypes.oneOfType([PropTypes.array, PropTypes.string])
}

export default Text

import React from 'react'
import {injectGlobal} from 'emotion'
import styled from 'react-emotion'
import PropTypes from 'prop-types'
import {
  fontSize as styledFontSize,
  fontWeight as styledFontWeight,
  color,
  lineHeight as styledLineHeight,
  space
} from 'styled-system'

injectGlobal`
::selection {
  backgroundColor: 'blue',
  color: 'white'
}
`

injectGlobal`
* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`

const Text = ({tag = 'p', fontWeight = 300, children, ...props}) => {
  const Component = styled(tag)`
  font-family: 'Untitled';
  margin: 0;
  line-height: 1.5;
  ${styledFontSize}
  ${styledFontWeight}
  ${color}
  ${styledLineHeight}
  ${space}
`
  return (
    <Component fontWeight={fontWeight} {...props}>
      {children}
    </Component>
  )
}

Text.propTypes = {
  tag: PropTypes.string,
  fontWeight: PropTypes.number,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.element
  ]),
  fontSize: PropTypes.oneOfType([PropTypes.array, PropTypes.string])
}

export default Text

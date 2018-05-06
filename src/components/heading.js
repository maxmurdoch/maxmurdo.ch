import React from 'react'
import PropTypes from 'prop-types'
import Text from 'text'

const Heading = ({children, tag, fontSize, ...props}) => {
  return (
    <Text fontSize={fontSize} tag={tag} {...props}>
      {children}
    </Text>
  )
}

Heading.propTypes = {
  fontSize: PropTypes.oneOfType([PropTypes.array, PropTypes.number]),
  tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element])
}

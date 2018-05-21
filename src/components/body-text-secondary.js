import React from 'react'
import PropTypes from 'prop-types'
import BodyText from './body-text'

const BodyTextSecondary = ({
  // color = 'rgba(0, 0, 0, 0.6)',
  children,
  ...props
}) => {
  return (
    <BodyText
      fontWeight={300}
      // color={color}
      {...props}
    >
      {children}
    </BodyText>
  )
}

BodyTextSecondary.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.element
  ]),
  color: PropTypes.string
}

export default BodyTextSecondary

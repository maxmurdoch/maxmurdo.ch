import React from 'react'
import PropTypes from 'prop-types'

import BodyText from './BodyText'

const BodyTextSecondary = ({children, ...props}) => {
  return (
    <BodyText fontWeight={300} {...props}>
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

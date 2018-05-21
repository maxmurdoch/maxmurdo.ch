import React from 'react'
import PropTypes from 'prop-types'
import Text from './text'

const SmallText = ({children, color = 'rgba(0, 0, 0, 1)', ...props}) => {
  return (
    <Text fontWeight={300} color={color} fontSize={[6, 4, 2, 1]} {...props}>
      {children}
    </Text>
  )
}

SmallText.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.array
  ]),
  color: PropTypes.string
}

export default SmallText

import React from 'react'
import PropTypes from 'prop-types'
import Text from './text'

const BigText = ({children, color = 'rgba(0, 0, 0, 1)', ...props}) => {
  return (
    <Text
      fontWeight={300}
      color={color}
      fontSize={[0, 2, 5, 8]}
      lineHeight={1.4}
      {...props}
    >
      {children}
    </Text>
  )
}

BigText.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.array
  ]),
  color: PropTypes.string
}

export default BigText

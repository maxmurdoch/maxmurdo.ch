import React from 'react'
import PropTypes from 'prop-types'
import Text from './text'

const BodyText = ({color = 'rgba(0, 0, 0, 0.8)', children, ...props}) => {
  return (
    <Text
      color={color}
      fontSize={[5, 4, 3]}
      fontWeight={300}
      lineHeight={3}
      m={0}
      {...props}
    >
      {children}
    </Text>
  )
}

BodyText.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.element
  ]),
  color: PropTypes.string
}

export default BodyText

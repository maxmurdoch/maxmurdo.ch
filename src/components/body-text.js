import React from 'react'
import PropTypes from 'prop-types'
import Text from './text'

const BodyText = ({color = 'rgba(0, 0, 0, 1)', children, ...props}) => {
  return (
    <Text
      color={color}
      fontSize={[0, 0, 0, 2]}
      fontWeight={700}
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

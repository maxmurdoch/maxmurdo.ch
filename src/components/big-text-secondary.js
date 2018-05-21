import React from 'react'
import PropTypes from 'prop-types'
import BigText from './big-text'

const BigTextSecondary = ({
  children,
  color = 'rgba(0, 0, 0, 0.6)',
  ...props
}) => {
  return (
    <BigText color={color} {...props}>
      {children}
    </BigText>
  )
}

BigTextSecondary.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string
}

export default BigTextSecondary

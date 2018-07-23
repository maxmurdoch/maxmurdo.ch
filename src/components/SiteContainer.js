import React from 'react'
import Box from './Box'

const SiteContainer = ({children}) => (
  <Box maxWidth="100%" position="relative">
    {children}
  </Box>
)

export default SiteContainer

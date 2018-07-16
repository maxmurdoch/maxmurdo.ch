import React from 'react'
import PropTypes from 'prop-types'

import Flex from './Flex'
import Box from './Box'
import BodyText from './BodyText'

const InfoSection = ({title, children}) => (
  <Flex
    alignItems="baseline"
    flexWrap={['wrap', 'nowrap']}
    pl={[4, 6, 8]}
    pr={[4, 6, 8]}
  >
    <Box width={['100%', '25%']} pt={[6, 0, 0]} pb={[3, 6]} pr={[5, 6]}>
      <BodyText>{title}</BodyText>
    </Box>
    <Box width={['100%', '75%']} maxWidth="50em" pt={[0, 6, 7]}>
      {children}
    </Box>
  </Flex>
)

InfoSection.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
}

export default InfoSection

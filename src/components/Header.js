import React from 'react'

import Link from './Link'
import BodyText from './BodyText'
import BodyTextSecondary from './BodyTextSecondary'
import Flex from './Flex'
import Box from './Box'

const Header = () => (
  <Flex
    justifyContent={'space-between'}
    background="white"
    position={'relative'}
    zIndex={5}
  >
    <Box width={[1, 1 / 2]} p={[4, 6, 8]}>
      <BodyText>
        <Link to="/" hoverStyle="none">
          Max Murdoch
        </Link>
      </BodyText>
    </Box>
    <Box width={[1, 1 / 2]} p={[4, 6, 8]}>
      <Flex justifyContent={'flex-end'}>
        <Box position="relative">
          <BodyTextSecondary>
            <Link to="/" hoverStyle="nav">
              Work
            </Link>
          </BodyTextSecondary>
        </Box>
        <Box pl={6}>
          <BodyTextSecondary>
            <Link to="/info" hoverStyle="nav">
              Info
            </Link>
          </BodyTextSecondary>
        </Box>
      </Flex>
    </Box>
  </Flex>
)

export default Header

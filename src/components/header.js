import React from 'react'
import Link from './link.js'
import Text from './text'
import Flex from './flex'
import Box from './box'

const Header = () => (
  <Flex justifyContent={'space-between'}>
    <Box width={[1, 1 / 2]} p={[3, 4, 4]}>
      <Text fontSize={[4, 5, 6]}>
        <Link to="/" hoverStyle="subtle">
          Work
        </Link>
      </Text>
    </Box>
    <Box width={[1, 1 / 2]} p={[3, 4, 4]}>
      <Flex justifyContent={'flex-end'}>
        <Box pl={4}>
          <Text fontSize={[4, 5, 6]}>
            <Link to="/info" hoverStyle="subtle">
              Info
            </Link>
          </Text>
        </Box>
      </Flex>
    </Box>
  </Flex>
)

export default Header

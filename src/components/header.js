import React from 'react'
import Link from './link.js'
import BodyText from './body-text'
import BodyTextSecondary from './body-text-secondary'
import WordCycle from './word-cycle'
import Flex from './flex'
import Box from './box'

const Header = () => (
  <Flex justifyContent={'space-between'}>
    <Box width={[1, 1 / 2]} p={[4, 6, 8]}>
      <BodyText>
        <Link to="/" hoverStyle="none">
          Max
          <WordCycle words={['Design', 'Code']}>
            {({word}) => (
              <BodyTextSecondary tag="span">
                &nbsp;/&nbsp;{word}
              </BodyTextSecondary>
            )}
          </WordCycle>
        </Link>
      </BodyText>
    </Box>
    <Box width={[1, 1 / 2]} p={[4, 6, 8]}>
      <Flex justifyContent={'flex-end'}>
        <BodyTextSecondary>
          <Link to="/" hoverStyle="subtle">
            Work
          </Link>
        </BodyTextSecondary>
        <Box pl={6}>
          <BodyTextSecondary>
            <Link to="/info" hoverStyle="subtle">
              Info
            </Link>
          </BodyTextSecondary>
        </Box>
      </Flex>
    </Box>
  </Flex>
)

export default Header

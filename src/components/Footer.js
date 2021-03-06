import React from 'react'
import {scroller} from 'react-scroll'

import BodyText from './BodyText'
import Flex from './Flex'
import Box from './Box'

const Footer = () => {
  return (
    <Flex>
      <Box background="black" flexBasis="100%" p={[3, 4, 4]}>
        <BodyText
          onClick={() => {
            scroller.scrollTo('work', {
              duration: 3000,
              smooth: true
            })
          }}
          color="white"
        >
          Back to top
        </BodyText>
      </Box>
    </Flex>
  )
}

export default Footer

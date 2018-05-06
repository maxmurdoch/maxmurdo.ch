import React from 'react'
import {scroller} from 'react-scroll'
import BodyText from '../components/body-text'
import Flex from '../components/flex'
import Box from '../components/box'

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

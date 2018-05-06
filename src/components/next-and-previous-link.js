import React from 'react'
import PropTypes from 'prop-types'
import {scroller} from 'react-scroll'
import Flex from './flex'
import Box from './box'
import BodyText from './body-text'
import Link from './link'

const NextAndPreviousLink = ({previousProjectId, nextProjectId}) => {
  return (
    <Flex justifyContent="space-between">
      <Box>
        {previousProjectId ? (
          <BodyText>
            <Link
              onClick={() => {
                scroller.scrollTo(previousProjectId, {
                  duration: 500,
                  smooth: true
                })
              }}
              hoverStyle="subtle"
            >
              Previous
            </Link>
          </BodyText>
        ) : null}
      </Box>
      <Box>
        {nextProjectId ? (
          <BodyText>
            <Link
              onClick={() => {
                scroller.scrollTo(nextProjectId, {
                  duration: 500,
                  smooth: true
                })
              }}
              hoverStyle="subtle"
            >
              Next
            </Link>
          </BodyText>
        ) : null}
      </Box>
    </Flex>
  )
}

NextAndPreviousLink.propTypes = {
  previousProjectId: PropTypes.string,
  nextProjectId: PropTypes.string
}

export default NextAndPreviousLink

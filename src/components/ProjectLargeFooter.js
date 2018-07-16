import React from 'react'
import {inc} from 'ramda'
import PropTypes from 'prop-types'

import BodyTextSecondary from './BodyTextSecondary'
import Flex from './Flex'
import Box from './Box'
import UpDownArrows from './UpDownArrows'

const ProjectLargeInfoFooter = ({
  previousProjectId,
  nextProjectId,
  index,
  total
}) => {
  return (
    <Flex width="100%" justifyContent="space-between" alignItems="center">
      <Box>
        <BodyTextSecondary>
          {inc(index)}/{total}
        </BodyTextSecondary>
      </Box>
      <UpDownArrows previousId={previousProjectId} nextId={nextProjectId} />
    </Flex>
  )
}

export default ProjectLargeInfoFooter

ProjectLargeInfoFooter.propTypes = {
  previousProjectId: PropTypes.string,
  nextProjectId: PropTypes.string,
  index: PropTypes.number,
  total: PropTypes.number
}

import React from 'react'
import {css} from 'react-emotion'
import {capitalize} from 'voca'
import PropTypes from 'prop-types'
import * as R from 'ramda'
import MediaQuery from 'react-responsive'

import ProjectLargeFooter from './ProjectLargeFooter'
import BodyText from './BodyText'
import BodyTextSecondary from './BodyTextSecondary'
import Flex from './Flex'
import Box from './Box'
import {breakpoints} from '../constants/theme'

const mapIndex = R.addIndex(R.map)
const ProjectLarge = ({
  index,
  shapes,
  total,
  client,
  tools,
  services,
  brief,
  nextProjectId,
  previousProjectId
}) => {
  return (
    <MediaQuery minWidth={R.nth(1, breakpoints)}>
      <Flex height="100%" justifyContent="space-between" flexDirection="column">
        <Box>
          <Flex
            pt={[4, 6, 8]}
            pb={[4, 6, 8]}
            pr={[4, 6, 8]}
            pl={[4, 6, 8]}
            flexDirection="column"
            position="relative"
          >
            <Box>
              <BodyText tag="h2">Client</BodyText>
            </Box>
            <Box>
              <BodyTextSecondary>{client}</BodyTextSecondary>
            </Box>
            <img
              className={css({
                position: 'absolute',
                marginBottom: 0,
                bottom: 0,
                width: '80%',
                left: '10%',
                transform: 'rotate(-10deg)',
                opacity: 0.8,
                [`@media screen and (min-width: ${R.nth(1, breakpoints)})`]: {
                  bottom: '15%',
                  transform: 'none',
                  width: '14rem',
                  right: '40%',
                  left: '10%'
                },
                [`@media screen and (min-width: ${R.nth(2, breakpoints)})`]: {
                  bottom: '10%',
                  width: '16rem'
                }
              })}
              src={R.nth(index, shapes)}
            />
          </Flex>
          <Flex
            pb={[4, 6, 8]}
            pr={[4, 6, 8]}
            pl={[4, 6, 8]}
            flexDirection="column"
          >
            <Box>
              <BodyText>Job</BodyText>
            </Box>
            <Box>
              <BodyTextSecondary>{brief}</BodyTextSecondary>
            </Box>
          </Flex>
          {R.and(R.isEmpty(services), R.isEmpty(tools)) ? null : (
            <Flex pr={[4, 6, 8]} pl={[4, 6, 8]} flexWrap="wrap">
              {R.isEmpty(services) ? null : (
                <Flex
                  pr={2}
                  flexDirection="column"
                  width={['100%', '100%', '100%', '50%']}
                >
                  <Box>
                    <BodyText tag="h3">Services</BodyText>
                  </Box>
                  <ul className={style.list}>
                    {mapIndex(
                      (service, key) => (
                        <li key={key} className={style.listItem}>
                          <Box pr={2}>
                            <BodyTextSecondary>
                              {capitalize(service)}
                            </BodyTextSecondary>
                          </Box>
                        </li>
                      ),
                      services
                    )}
                  </ul>
                </Flex>
              )}
              {R.isEmpty(tools) ? null : (
                <Flex
                  flexDirection="column"
                  width={['100%', '100%', '100%', '50%']}
                >
                  <Box>
                    <BodyText tag="h3">Tools</BodyText>
                  </Box>
                  <ul className={style.list}>
                    {mapIndex(
                      (tool, key) => (
                        <li key={key} className={style.listItem}>
                          <Box pr={2}>
                            <BodyTextSecondary>
                              {capitalize(tool)}
                            </BodyTextSecondary>
                          </Box>
                        </li>
                      ),
                      tools
                    )}
                  </ul>
                </Flex>
              )}
            </Flex>
          )}
        </Box>
        <Box pr={[4, 6, 8]} pl={[4, 6, 8]} pt={[4, 6]} pb={[4, 6]}>
          <ProjectLargeFooter
            total={total}
            index={index}
            previousProjectId={previousProjectId}
            nextProjectId={nextProjectId}
          />
        </Box>
      </Flex>
    </MediaQuery>
  )
}

const style = {
  list: css({
    listStyleType: 'none',
    marginLeft: 0
  }),
  listItem: css({
    marginBottom: 0
  })
}

ProjectLarge.propTypes = {
  index: PropTypes.number,
  total: PropTypes.number,
  client: PropTypes.string,
  brief: PropTypes.string,
  title: PropTypes.string,
  tools: PropTypes.array,
  shapes: PropTypes.array,
  services: PropTypes.array,
  description: PropTypes.string,
  nextProjectId: PropTypes.string,
  previousProjectId: PropTypes.string
}

export default ProjectLarge

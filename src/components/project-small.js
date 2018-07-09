import React, {Component} from 'react'
import {capitalize} from 'voca'
import {css} from 'react-emotion'
import PropTypes from 'prop-types'
import Collapse from 'react-collapse'
import * as R from 'ramda'
import MediaQuery from 'react-responsive'

import UpDownArrows from './UpDownArrows'
import Flex from './flex'
import Box from './box'
import BodyText from './body-text'
import BodyTextSecondary from './body-text-secondary'
import plusIcon from '../assets/plus-icon.svg'
import {breakpoints, space} from '../constants/theme'

const mapIndex = R.addIndex(R.map)

class ProjectSmall extends Component {
  state = {
    infoIsOpen: false
  }

  render() {
    const {
      client,
      brief,
      shapes,
      index,
      total,
      tools,
      services,
      nextProjectId,
      previousProjectId
    } = this.props

    return (
      <MediaQuery maxWidth={R.nth(1, breakpoints)}>
        <Flex flexDirection="column" background="white">
          <Flex
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            flexBasis="100%"
            pt={[2, 4, 8]}
            pr={[4, 6, 8]}
            pb={[2, 4, 8]}
            pl={[4, 6, 8]}
          >
            <Box>
              <button
                onClick={() => {
                  this.setState({
                    infoIsOpen: !this.state.infoIsOpen
                  })
                }}
                className={css({
                  background: 0,
                  display: 'flex',
                  padding: R.nth(1, space),
                  marginLeft: `-${R.nth(1, space)}`,
                  justifyContent: 'center',
                  alignItems: 'center',
                  border: 0,
                  outline: 0
                })}
              >
                <img
                  style={{
                    transform: this.state.infoIsOpen ? 'rotate(45deg)' : 'none'
                  }}
                  className={css({
                    transition: '200ms transform cubic-bezier(0, 0.2, 1, 0.8)',
                    flex: 1,
                    width: R.nth(2, space),
                    marginBottom: 0
                  })}
                  src={plusIcon}
                />
              </button>
            </Box>
            <Flex alignItems="center" justifyContent="flex-end">
              <BodyTextSecondary mr={1}>
                {R.inc(index)}/{total}
              </BodyTextSecondary>
              <UpDownArrows
                previousId={previousProjectId}
                nextId={nextProjectId}
              />
            </Flex>
          </Flex>
          <Collapse isOpened={this.state.infoIsOpen}>
            <Flex pr={[4, 6, 8]} pl={[4, 6, 8]} flexDirection="column">
              <Box pb={[4, 6, 8]} position="relative">
                <BodyText tag="h2">Client</BodyText>
                <BodyTextSecondary>{client}</BodyTextSecondary>
                <img
                  className={css({
                    position: 'absolute',
                    marginBottom: 0,
                    bottom: 0,
                    width: '12rem',
                    left: '0',
                    opacity: 0.8,
                    [`@media screen and (min-width: ${R.nth(
                      0,
                      breakpoints
                    )})`]: {
                      bottom: '1rem'
                    }
                  })}
                  src={R.nth(index, shapes)}
                />
              </Box>
              <Box pb={[4, 6, 8]}>
                <BodyText tag="h3">Brief</BodyText>
                <BodyTextSecondary>{brief}</BodyTextSecondary>
              </Box>
              {R.isEmpty(tools) ? null : (
                <Box pb={[4, 6, 8]}>
                  <BodyText tag="h3">Tools</BodyText>
                  <ul className={style.list}>
                    {mapIndex(
                      (tool, key) => (
                        <li className={style.listItem} key={key}>
                          <BodyTextSecondary>{tool}</BodyTextSecondary>
                        </li>
                      ),
                      tools
                    )}
                  </ul>
                </Box>
              )}
              {R.isEmpty(services) ? null : (
                <Box pb={[4, 6, 8]}>
                  <BodyText tag="h3">Services</BodyText>
                  <ul className={style.list}>
                    {mapIndex(
                      (service, key) => (
                        <li className={style.listItem} key={key}>
                          <BodyTextSecondary>
                            {capitalize(service)}
                          </BodyTextSecondary>
                        </li>
                      ),
                      services
                    )}
                  </ul>
                </Box>
              )}
            </Flex>
          </Collapse>
        </Flex>
      </MediaQuery>
    )
  }
}

const style = {
  list: css({
    listStyleType: 'none',
    margin: 0
  }),
  listItem: css({
    paddingLeft: 0,
    marginBottom: 0
  })
}

ProjectSmall.propTypes = {
  client: PropTypes.string,
  brief: PropTypes.string,
  index: PropTypes.number,
  total: PropTypes.number,
  tools: PropTypes.array,
  shapes: PropTypes.array,
  services: PropTypes.array,
  description: PropTypes.string,
  nextProjectId: PropTypes.string,
  previousProjectId: PropTypes.string
}

export default ProjectSmall

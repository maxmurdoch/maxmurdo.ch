import React from 'react'
import R from 'ramda'
import BodyTextSecondary from './body-text-secondary'
import PropTypes from 'prop-types'
import {css, cx} from 'emotion'
import {scroller} from 'react-scroll'
import Flex from './flex'
import Box from './box'
import cursorDown from '../assets/cursor-down.svg'
import {fontSizes, space} from '../constants/theme'

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
          {R.inc(index)}/{total}
        </BodyTextSecondary>
      </Box>
      <Flex>
        <Box position="relative">
          {previousProjectId ? (
            <button
              className={cx(styles.arrow, styles.arrowUp)}
              onClick={() => {
                scroller.scrollTo(previousProjectId, {
                  duration: 500,
                  smooth: true
                })
              }}
            >
              <img
                className={cx(styles.image, css({transform: 'rotate(180deg)'}))}
                src={cursorDown}
              />
            </button>
          ) : null}
        </Box>
        <Box position="relative">
          <button
            className={cx(styles.arrow, styles.arrowDown)}
            onClick={() => {
              scroller.scrollTo(nextProjectId || 'work', {
                duration: 500,
                smooth: true
              })
            }}
          >
            <img className={styles.image} src={cursorDown} />
          </button>
        </Box>
      </Flex>
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

const styles = {
  arrow: css({
    opacity: 0.8,
    background: 0,
    border: 0,
    padding: R.nth(1, space),
    transition: 'transform 100ms ease-in-out',
    outline: 'none',
    transform: 'translate(0)'
  }),
  arrowDown: css({
    '&:hover': {
      transform: 'translateY(6px)'
    }
  }),
  arrowUp: css({
    '&:hover': {
      transform: 'translateY(-6px)'
    }
  }),
  image: css({
    margin: 0,
    width: R.nth(2, fontSizes)
  })
}

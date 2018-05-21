import React from 'react'
import R from 'ramda'
import PropTypes from 'prop-types'
import {css, cx} from 'emotion'
import {scroller} from 'react-scroll'
import Flex from './flex'
import Box from './box'
import cursorDown from '../assets/cursor-down.svg'
import {space} from '../constants/theme'

const ProjectDescriptionFooter = ({previousProjectId, nextProjectId}) => {
  return (
    <Flex justifyContent="center" alignItems="center">
      {previousProjectId ? (
        <Box>
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
        </Box>
      ) : null}
      <Box>
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
  )
}

export default ProjectDescriptionFooter

ProjectDescriptionFooter.propTypes = {
  previousProjectId: PropTypes.string,
  nextProjectId: PropTypes.string
}

const styles = {
  arrow: css({
    opacity: 0.8,
    background: 0,
    display: 'flex',
    outline: 0,
    alignItems: 'center',
    justifyContent: 'center',
    border: 0,
    padding: 0,
    marginLeft: R.nth(2, space),
    transition: 'transform 200ms cubic-bezier(0.2, 1, 0.4, 1)'
  }),
  image: css({
    margin: 0,
    width: R.nth(2, space)
  })
}

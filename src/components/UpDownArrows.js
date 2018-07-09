import React from 'react'
import PropTypes from 'prop-types'
import {nth} from 'ramda'
import {css, cx} from 'emotion'
import {scroller} from 'react-scroll'
import cursorDown from '../assets/cursor-down.svg'

import {fontSizes, space, breakpoints} from '../constants/theme'
import Flex from './Flex'
import Box from './Box'

const UpDownArrows = ({className, previousId, nextId}) => {
  return (
    <Flex>
      <Box position="relative">
        {previousId ? (
          <button
            className={cx(styles.arrow, styles.arrowUp)}
            onClick={() => {
              scroller.scrollTo(previousId, {
                duration: 1000,
                smooth: 'easeInOutQuint'
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
      <Box position="relative" mr={-1}>
        <button
          className={cx(styles.arrow, styles.arrowDown)}
          onClick={() => {
            scroller.scrollTo(nextId || 'work', {
              duration: 1000,
              smooth: 'easeInOutQuint'
            })
          }}
        >
          <img className={styles.image} src={cursorDown} />
        </button>
      </Box>
    </Flex>
  )
}

const styles = {
  arrow: css({
    opacity: 0.8,
    background: 0,
    border: 0,
    paddingTop: nth(1, space),
    paddingRight: nth(1, space),
    paddingBottom: nth(1, space),
    paddingLeft: nth(1, space),
    transition: 'transform 100ms ease-in-out',
    outline: 'none',
    display: 'flex',
    justifyContent: 'center',
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
    width: nth(0, fontSizes),

    [`@media screen and (min-width: ${nth(1, breakpoints)})`]: {
      width: nth(1, fontSizes)
    },
    [`@media screen and (min-width: ${nth(2, breakpoints)})`]: {
      width: nth(2, fontSizes)
    }
  })
}

UpDownArrows.propTypes = {
  previousId: PropTypes.string,
  nextId: PropTypes.string
}
export default UpDownArrows

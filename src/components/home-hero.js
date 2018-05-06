import React from 'react'
import {scroller} from 'react-scroll'
import {css} from 'emotion'
import cursorDown from '../assets/cursor-down.svg'
import Flex from '../components/flex'
import Box from '../components/box'
import Text from '../components/text'
import WordCycle from '../components/word-cycle'
import Header from '../components/header'

const HomeHero = () => (
  <div
    className={css({
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    })}
  >
    <Header />
    <Flex
      flex={1}
      onClick={() => {
        scroller.scrollTo('work', {
          duration: 300,
          smooth: true
        })
      }}
      className={css({
        height: '100%',
        display: 'flex',
        alignItems: 'flex-end',
        cursor: `url(${cursorDown}) 8 16, default`
      })}
    >
      <Box p={[3, 4, 4]}>
        <Flex
          height={'100%'}
          justifyContent={'flex-end'}
          flexDirection={'column'}
        >
          <Text fontSize={[4, 5, 6]} lineHeight={[1.5, 1.3]}>
            Hi
          </Text>
          <Text fontSize={[4, 5, 6]} lineHeight={[1.5, 1.3]}>
            I’m Max
          </Text>
          <Text fontSize={[4, 5, 6]} lineHeight={[1.5, 1.3]}>
            I
            <WordCycle words={['design', 'brand', 'build']}>
              {({word}) => <span> {word} </span>}
            </WordCycle>
            digital products
          </Text>
        </Flex>
      </Box>
    </Flex>
  </div>
)

export default HomeHero

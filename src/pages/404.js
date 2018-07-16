import React, {Component} from 'react'
import {css} from 'react-emotion'

import Flex from '../components/Flex'
import Text from '../components/text'
import BodyText from '../components/BodyText'
import Link from '../components/link'

class NotFoundPage extends Component {
  render() {
    return (
      <Link
        className={css({
          height: '100vh',
          width: '100%'
        })}
        hoverStyle="none"
        to="/"
      >
        <Flex
          width="100%"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Text fontSize={'25vw'} tag="h1">
            404
          </Text>
          <BodyText>Click anywhere</BodyText>
        </Flex>
      </Link>
    )
  }
}

export default NotFoundPage

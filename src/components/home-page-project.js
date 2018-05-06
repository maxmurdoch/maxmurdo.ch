import React, {Component} from 'react'
import MediaQuery from 'react-responsive'
import {scroller} from 'react-scroll'
import R from 'ramda'
import PropTypes from 'prop-types'
import BodyText from './body-text'
import Flex from './flex'
import Box from './box'
import Link from './link'
import Img from 'gatsby-image'
import stickybits from 'stickybits'
import {kebabCase} from 'voca'
import {breakpoints} from '../constants/theme'

const mapIndex = R.addIndex(R.map)

class HomePageProject extends Component {
  constructor() {
    super()

    this.state = {
      infoIsOpen: false
    }
    this.calculateStickyBits = this.calculateStickyBits.bind(this)
  }

  calculateStickyBits() {
    stickybits('#description')
  }

  componentDidMount() {
    window.addEventListener('resize', this.calculateStickyBits)
    this.calculateStickyBits()
  }

  componentDidUpdate() {
    this.calculateStickyBits()
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.calculateStickyBits)
  }

  render() {
    const {
      title,
      images,
      description,
      backgroundColor,
      previousProjectId,
      nextProjectId
    } = this.props
    const id = kebabCase(title)

    return (
      <Flex id={id} flexWrap={true}>
        <Box
          id="description"
          position="relative"
          width={['100%', '100%', '33.33%']}
          height={['auto', 'auto', '100vh']}
          overflow="auto"
          zIndex="3"
          background="white"
        >
          <Flex
            flexDirection="column"
            justifyContent="space-between"
            p={[3, 4, 4]}
            height="100%"
          >
            <Box>
              <BodyText tag={'h2'}>{title}</BodyText>
              <MediaQuery query={`(max-width: ${R.nth(1, breakpoints)}`}>
                <Link
                  type="button"
                  onClick={() => {
                    this.setState({
                      infoIsOpen: !this.state.infoIsOpen
                    })
                  }}
                >
                  Info
                </Link>
              </MediaQuery>
              <MediaQuery query={`(min-width: ${R.nth(1, breakpoints)})`}>
                <BodyText color="grey">{description}</BodyText>
              </MediaQuery>
            </Box>
            <Box>
              <Flex justifyContent="space-between">
                <Box>
                  {previousProjectId ? (
                    <BodyText>
                      <Link
                        type="button"
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
                  <BodyText>
                    <Link
                      type="button"
                      onClick={() => {
                        scroller.scrollTo(nextProjectId || 'work', {
                          duration: 500,
                          smooth: true
                        })
                      }}
                      hoverStyle="subtle"
                    >
                      {nextProjectId ? 'Next' : 'Back to top'}
                    </Link>
                  </BodyText>
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Box>
        <Box
          display="flex"
          flexWrap={true}
          flexDirection="column"
          alignItems="center"
          width={['100%', '100%', '66.66%']}
          background={backgroundColor}
          pt={[3, 4, 5]}
          pb={[3, 4, 5]}
        >
          {mapIndex(({image, type}, key) => {
            const sizes = R.prop('sizes', image)
            const imageEl = R.has('sizes', image) ? (
              <Img
                style={{
                  boxShadow:
                    '0 10px 25px rgba(0, 0, 0, 0.05), 0 0 30px rgba(0, 0, 0, 0.05)'
                }}
                sizes={sizes}
                key={key}
              />
            ) : (
              <img
                style={{
                  boxShadow:
                    '0 10px 25px rgba(0, 0, 0, 0.05), 0 0 30px rgba(0, 0, 0, 0.05)'
                }}
                src={image}
                key={key}
              />
            )

            return (
              <Box
                maxWidth={
                  R.equals(type, 'phone') ? ['80%', '30rem'] : ['100%', '80%']
                }
                width="100%"
                pt={[3, 4, 5]}
                pb={[3, 4, 5]}
                pl={[4, 4, 5]}
                pr={[4, 4, 5]}
              >
                {imageEl}
              </Box>
            )
          }, images)}
        </Box>
      </Flex>
    )
  }
}

HomePageProject.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  images: PropTypes.array,
  slug: PropTypes.string,
  backgroundColor: PropTypes.string,
  previousProjectId: PropTypes.string,
  nextProjectId: PropTypes.string
}

export default HomePageProject

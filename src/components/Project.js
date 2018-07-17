import React, {Component} from 'react'
import {css} from 'emotion'
import {addIndex, map, prop, has, equals} from 'ramda'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import stickybits from 'stickybits'
import {kebabCase} from 'voca'

import Flex from './Flex'
import Box from './Box'
import ProjectSmall from './ProjectSmall'
import ProjectLarge from './ProjectLarge'

const mapIndex = addIndex(map)

import line from '../assets/line.svg'
import line2 from '../assets/line-2.svg'
import line3 from '../assets/line-3.svg'
import line4 from '../assets/line-4.svg'

const shapes = [line2, line, line3, line4]

const getWidthFor = type => {
  const widths = {
    phone: ['100%', '50%'],
    card: ['100%', '50%'],
    laptop: ['100%', '100%']
  }

  return prop(type, widths)
}
const getMaxWidthFor = type => {
  const maxWidths = {
    phone: ['100%', '100%', '100%'],
    laptop: ['100%', '100%', '100%'],
    card: ['100%', '100%', '50%']
  }

  return prop(type, maxWidths)
}
class Project extends Component {
  state = {
    infoIsOpen: false
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
      client,
      brief,
      index,
      total,
      tools,
      services,
      backgroundColor = 'white',
      images,
      previousProjectId,
      nextProjectId
    } = this.props
    const id = kebabCase(client)

    return (
      <Flex id={id} flexWrap={true}>
        <Box
          id="description"
          position="relative"
          width={['100%', '100%', '20rem', '30rem']}
          height={['auto', 'auto', '100vh']}
          overflow="auto"
          zIndex="3"
          className={css({bottom: 0})}
        >
          <Flex
            flexDirection="column"
            justifyContent="space-between"
            height="100%"
          >
            <ProjectSmall
              shapes={shapes}
              brief={brief}
              client={client}
              index={index}
              total={total}
              tools={tools}
              services={services}
              nextProjectId={nextProjectId}
              previousProjectId={previousProjectId}
            />
            <ProjectLarge
              shapes={shapes}
              tools={tools}
              index={index}
              total={total}
              services={services}
              brief={brief}
              client={client}
              nextProjectId={nextProjectId}
              previousProjectId={previousProjectId}
            />
          </Flex>
        </Box>
        <Flex
          flexWrap={true}
          flexDirection="row"
          alignItems="center"
          width={['100%', '100%', 'calc(100% - 20rem)', 'calc(100% - 30rem)']}
          background={backgroundColor ? backgroundColor : 'rgba(0, 0, 0, 0.03)'}
          pr={['6vw', '8vw']}
          pb={['6vw', '8vw']}
        >
          {mapIndex(({image, images, type}, key) => {
            if (equals(type, 'card')) {
              return (
                <Flex
                  width={getWidthFor(type)}
                  maxWidth={getMaxWidthFor(type)}
                  flexDirection="column"
                >
                  {map(({fluid}) => {
                    return (
                      <Box key={key} pt={['6vw', '8vw']} pl={['6vw', '8vw']}>
                        <Img className={style.image} fluid={fluid} />
                      </Box>
                    )
                  }, images)}
                </Flex>
              )
            }

            const fluid = prop('fluid', image)
            const imageEl = has('fluid', image) ? (
              <Img className={style.image} fluid={fluid} />
            ) : (
              <img className={style.image} src={image} />
            )

            return (
              <Box
                width={getWidthFor(type)}
                key={key}
                maxWidth={getMaxWidthFor(type)}
                pt={['6vw', '8vw']}
                pl={['6vw', '8vw']}
              >
                {imageEl}
              </Box>
            )
          }, images)}
        </Flex>
      </Flex>
    )
  }
}

const style = {
  image: css({
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.05), 0 0 30px rgba(0, 0, 0, 0.05)'
  })
}

Project.propTypes = {
  description: PropTypes.string,
  images: PropTypes.array,
  slug: PropTypes.string,
  backgroundColor: PropTypes.string,
  previousProjectId: PropTypes.string,
  nextProjectId: PropTypes.string,
  client: PropTypes.string,
  brief: PropTypes.string,
  index: PropTypes.number,
  total: PropTypes.number,
  tools: PropTypes.array,
  services: PropTypes.array
}

export default Project

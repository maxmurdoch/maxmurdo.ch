import React from 'react'
import * as R from 'ramda'
import Fade from 'react-reveal/Fade'
import {css} from 'react-emotion'
import {Helmet} from 'react-helmet'

import Link from '../components/Link'
import BigText from '../components/BigText'
import BodyTextSecondary from '../components/BodyTextSecondary'
import InfoSection from '../components/InfoSection'
import Header from '../components/Header'
import Flex from '../components/Flex'
import Layout from '../components/Layout'
import Box from '../components/Box'
import SiteContainer from '../components/SiteContainer'

import {breakpoints} from '../constants/theme'

import line from '../assets/line.svg'

const Info = () => {
  return (
    <Layout>
      <div>
        <Helmet>
          <title>Max Murdoch — Info</title>
        </Helmet>
        <SiteContainer>
          <Header />
          <Flex flexDirection="column" pb={[6, 7, 8]}>
            <Flex
              justifyContent="flex-end"
              pl={[4, 6, 8]}
              pr={[4, 6, 8]}
              pt={[4, 6]}
              pb={[4, 6]}
              mb={[4, 6]}
              position="relative"
            >
              <Box width={['100%', '75%']}>
                <BigText>
                  Combining design & code to&nbsp;make
                  <br />simple, honest, quality<br />digital products
                </BigText>
              </Box>
              <img
                className={css({
                  position: 'absolute',
                  bottom: '-7.5%',
                  width: '20em',
                  maxWidth: '100%',
                  marginBottom: 0,
                  left: '10%',
                  right: 0,
                  opacity: 0.8,
                  [`@media screen and (min-width: ${R.nth(0, breakpoints)})`]: {
                    left: '25%',
                    width: '20em',
                    bottom: '-10%'
                  },
                  [`@media screen and (min-width: ${R.nth(1, breakpoints)})`]: {
                    width: '30em',
                    bottom: '-10%'
                  },
                  [`@media screen and (min-width: ${R.nth(2, breakpoints)})`]: {
                    width: '40em',
                    bottom: '-10%'
                  }
                })}
                src={line}
              />
            </Flex>
            <Fade bottom cascade>
              <InfoSection title="Overview">
                <BodyTextSecondary mb={4}>
                  Hi! I’m Max, an independent designer and programmer living and
                  working in London. I’ve worked as both a Digital Product
                  Designer and a Software Engineer. Now I combine the two to
                  take a holistic approach to making digital products.
                </BodyTextSecondary>
              </InfoSection>
              <InfoSection title="Process">
                <BodyTextSecondary mb={4}>
                  My process is simple and I move quite quickly and fluidly
                  between different stages. We’ll identify goals, constraints
                  and a rough scope for the project. I’ll start with pen and
                  paper to explore different approaches. Then I’ll move into
                  Sketch to hone in on a more detailed visual direction. We’ll
                  talk a lot so you can feedback and I can iterate. When the the
                  look and feel of the static design is right, I’ll start
                  writing code, which is where I’ll do the interaction,
                  animation and responsive design as well as the core job of
                  building and shipping the finished product.
                </BodyTextSecondary>
              </InfoSection>
              <InfoSection title="Contact">
                <BodyTextSecondary mb={4}>
                  If you think we could work together, please&nbsp;
                  <Link
                    type="external"
                    to="mailto:max@maxmurdo.ch"
                    hoverStyle="text"
                  >
                    get in touch
                  </Link>. If the project requires other skills, I have a close
                  group of lovely, smart, interesting people who do things like
                  content / brand strategy, illustration, engineering,
                  copywriting, photography, filmmaking etc., so if I’m not the
                  right person for your project or our timelines don’t match,
                  I’ll do my best to introduce you to someone who can help.
                </BodyTextSecondary>
              </InfoSection>
            </Fade>
          </Flex>
        </SiteContainer>
      </div>
    </Layout>
  )
}

export default Info

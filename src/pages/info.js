import React from 'react'
import R from 'ramda'
import {css} from 'react-emotion'
import {Helmet} from 'react-helmet'
import Link from '../components/link'
import BigText from '../components/big-text'
import BodyTextSecondary from '../components/body-text-secondary'
import InfoSection from '../components/info-section'
import Header from '../components/header'
import Flex from '../components/flex'
import Box from '../components/box'
import SiteContainer from '../components/site-container'
import {breakpoints} from '../constants/theme'

import line from '../assets/line.svg'

const Info = () => {
  return (
    <div>
      <Helmet>
        <title>Max Murdoch — Info</title>
      </Helmet>
      <Header />
      <SiteContainer>
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
                bottom: 0,
                width: '40em',
                marginBottom: 0,
                maxWidth: '50%',
                left: '10%',
                right: 0,
                opacity: 0.8,
                [`@media screen and (min-width: ${R.nth(0, breakpoints)})`]: {
                  margin: '0 auto',
                  left: 0,
                  bottom: '-10%',
                  transform: 'rotate(0)'
                }
              })}
              src={line}
            />
          </Flex>
          <InfoSection title="Overview">
            <BodyTextSecondary mb={4}>
              Hi! I’m Max, an independent designer and programmer living and
              working in London. I’ve worked as both a Digital Product Designer
              and a Software Engineer. Now I combine the two to take a holistic
              approach to making digital products.
            </BodyTextSecondary>
          </InfoSection>
          <InfoSection title="Process">
            <BodyTextSecondary mb={4}>
              My process is simple and I move quite quickly and fluidly between
              different stages. We’ll identify goals, constraints and a rough
              scope for the project. I’ll start with pen and paper to explore
              different approaches. Then I’ll move into Sketch to hone in a more
              detailed visual direction. We’ll talk a lot so you can feedback
              and I can iterate. When the the look and feel of the static design
              is right, I’ll start writing code, which is where I’ll do the
              interaction, animation and responsive design as well as the core
              job of building and shipping the finished product.
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
              content / brand strategy, illustration, engineering, copywriting,
              photography, filmmaking etc., so if I’m not the right person for
              your project or our timelines don’t match, I’ll do my best to
              introduce you to someone who can help.
            </BodyTextSecondary>
          </InfoSection>
        </Flex>
      </SiteContainer>
    </div>
  )
}

export default Info

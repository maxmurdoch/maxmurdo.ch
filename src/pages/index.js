import {graphql} from 'gatsby'
import React from 'react'
import PropTypes from 'prop-types'
import {injectGlobal} from 'emotion'

import SiteContainer from '../components/SiteContainer'
import Header from '../components/Header'
import Layout from '../components/Layout'
import Home from '../components/Home'

import cursor from '../assets/cursor-default.svg'

injectGlobal`
  * {
    cursor: url('${cursor}'), auto
  }
`

const IndexPage = ({data, location}) => {
  return (
    <Layout>
      <div>
        <SiteContainer>
          <Header />
          <Home data={data} location={location} />
        </SiteContainer>
      </div>
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.object,
  location: PropTypes.object
}

export default IndexPage

export const query = graphql`
  query AllWorkJson {
    allWorkJson(sort: {fields: [order], order: ASC}) {
      edges {
        node {
          id
          brief
          client
          tools
          services
          backgroundColor
          order
          fields {
            slug
          }
        }
      }
    }
    mayhemFeaturedOne: imageSharp(
      fluid: {originalName: {regex: "/mayhem-featured-one/"}}
    ) {
      fluid {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
    mayhemFeaturedTwo: imageSharp(
      fluid: {originalName: {regex: "/mayhem-featured-two/"}}
    ) {
      fluid {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
    mayhemFeaturedThree: imageSharp(
      fluid: {originalName: {regex: "/mayhem-featured-three/"}}
    ) {
      fluid {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
    mayhemFeaturedFour: imageSharp(
      fluid: {originalName: {regex: "/mayhem-featured-four/"}}
    ) {
      fluid {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
    mayhemFeaturedFive: imageSharp(
      fluid: {originalName: {regex: "/mayhem-featured-five/"}}
    ) {
      fluid {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
    mayhemFeaturedSix: imageSharp(
      fluid: {originalName: {regex: "/mayhem-featured-six/"}}
    ) {
      fluid {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
    mayhemMenu: imageSharp(fluid: {originalName: {regex: "/mayhem-menu/"}}) {
      fluid {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
    mayhemBizCardFrontOne: imageSharp(
      fluid: {originalName: {regex: "/mayhem-biz-card-front-one/"}}
    ) {
      fluid {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
    mayhemBizCardBackOne: imageSharp(
      fluid: {originalName: {regex: "/mayhem-biz-card-back-one/"}}
    ) {
      fluid {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
    mayhemBizCardFrontTwo: imageSharp(
      fluid: {originalName: {regex: "/mayhem-biz-card-front-two/"}}
    ) {
      fluid {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
    mayhemBizCardBackTwo: imageSharp(
      fluid: {originalName: {regex: "/mayhem-biz-card-back-two/"}}
    ) {
      fluid {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
    mayhemBizCardFrontThree: imageSharp(
      fluid: {originalName: {regex: "/mayhem-biz-card-front-three/"}}
    ) {
      fluid {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
    mayhemBizCardBackThree: imageSharp(
      fluid: {originalName: {regex: "/mayhem-biz-card-back-three/"}}
    ) {
      fluid {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
    mayhemBizCardFrontFour: imageSharp(
      fluid: {originalName: {regex: "/mayhem-biz-card-front-four/"}}
    ) {
      fluid {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
    mayhemBizCardBackFour: imageSharp(
      fluid: {originalName: {regex: "/mayhem-biz-card-back-four/"}}
    ) {
      fluid {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
    mayhemPhoneFeaturedSeven: imageSharp(
      fluid: {originalName: {regex: "/mayhem-phone-featured-seven/"}}
    ) {
      fluid {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
    mayhemPhoneMenu: imageSharp(
      fluid: {originalName: {regex: "/mayhem-phone-menu/"}}
    ) {
      fluid {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
    imageChange: imageSharp(
      fluid: {originalName: {regex: "/maths-builders-image-change/"}}
    ) {
      fluid {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
    mathsBuildersHome: imageSharp(
      fluid: {originalName: {regex: "/maths-builders-home-page/"}}
    ) {
      fluid {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
    mathsBuildersSignIn: imageSharp(
      fluid: {originalName: {regex: "/maths-builders-sign-in-three/"}}
    ) {
      fluid {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
    mathsBuildersOrderOne: imageSharp(
      fluid: {originalName: {regex: "/maths-builders-order-one/"}}
    ) {
      fluid {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
    mathsBuildersOrderTwo: imageSharp(
      fluid: {originalName: {regex: "/maths-builders-order-two/"}}
    ) {
      fluid {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
    mathsBuildersOrderThree: imageSharp(
      fluid: {originalName: {regex: "/maths-builders-order-three/"}}
    ) {
      fluid {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
    mathsBuildersNthTermOne: imageSharp(
      fluid: {originalName: {regex: "/maths-builders-nth-term-one/"}}
    ) {
      fluid {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
    mathsBuildersNthTermTwo: imageSharp(
      fluid: {originalName: {regex: "/maths-builders-nth-term-two/"}}
    ) {
      fluid {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
    mathsBuildersNthTermThree: imageSharp(
      fluid: {originalName: {regex: "/maths-builders-nth-term-three/"}}
    ) {
      fluid {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
    mathsBuildersNthTermFour: imageSharp(
      fluid: {originalName: {regex: "/maths-builders-nth-term-four/"}}
    ) {
      fluid {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
    mathsBuildersNthTermFive: imageSharp(
      fluid: {originalName: {regex: "/maths-builders-nth-term-five/"}}
    ) {
      fluid {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
    mathsBuildersNthTermSix: imageSharp(
      fluid: {originalName: {regex: "/maths-builders-nth-term-six/"}}
    ) {
      fluid {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
    mathsBuildersNthTermSeven: imageSharp(
      fluid: {originalName: {regex: "/maths-builders-nth-term-seven/"}}
    ) {
      fluid {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
    mathsBuildersNthTermEight: imageSharp(
      fluid: {originalName: {regex: "/maths-builders-nth-term-eight/"}}
    ) {
      fluid {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
    mathsBuildersNthTermNine: imageSharp(
      fluid: {originalName: {regex: "/maths-builders-nth-term-nine/"}}
    ) {
      fluid {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
    mathsBuildersTutorialOne: imageSharp(
      fluid: {originalName: {regex: "/maths-builders-tutorial-one/"}}
    ) {
      fluid {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
    mathsBuildersTutorialTwo: imageSharp(
      fluid: {originalName: {regex: "/maths-builders-tutorial-two/"}}
    ) {
      fluid {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
    mathsBuildersTutorialThree: imageSharp(
      fluid: {originalName: {regex: "/maths-builders-tutorial-three/"}}
    ) {
      fluid {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
    mathsBuildersTutorialFive: imageSharp(
      fluid: {originalName: {regex: "/maths-builders-tutorial-five/"}}
    ) {
      fluid {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
    mathsBuildersTutorialSix: imageSharp(
      fluid: {originalName: {regex: "/maths-builders-tutorial-six/"}}
    ) {
      fluid {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
    mathsBuildersTutorialSeven: imageSharp(
      fluid: {originalName: {regex: "/maths-builders-tutorial-seven/"}}
    ) {
      fluid {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
    mathsBuildersTutorialNine: imageSharp(
      fluid: {originalName: {regex: "/maths-builders-tutorial-nine/"}}
    ) {
      fluid {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
    mathsBuildersTutorialTen: imageSharp(
      fluid: {originalName: {regex: "/maths-builders-tutorial-ten/"}}
    ) {
      fluid {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
    mathsBuildersTutorialTwelve: imageSharp(
      fluid: {originalName: {regex: "/maths-builders-tutorial-twelve/"}}
    ) {
      fluid {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
    mathsBuildersTutorialFourteen: imageSharp(
      fluid: {originalName: {regex: "/maths-builders-tutorial-fourteen/"}}
    ) {
      fluid {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
    codeAtUniOne: imageSharp(
      fluid: {originalName: {regex: "/code-at-uni-hero/"}}
    ) {
      fluid {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
    codeAtUniTwo: imageSharp(
      fluid: {originalName: {regex: "/code-at-uni-search/"}}
    ) {
      fluid {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
    codeAtUniThree: imageSharp(
      fluid: {originalName: {regex: "/code-at-uni-quote/"}}
    ) {
      fluid {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
    personablyAgenda: imageSharp(fluid: {originalName: {regex: "/agenda/"}}) {
      fluid {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
    personablyComposeMessage: imageSharp(
      fluid: {originalName: {regex: "/compose-message-1/"}}
    ) {
      fluid {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
    personablyComposeMessage2: imageSharp(
      fluid: {originalName: {regex: "/compose-message-2/"}}
    ) {
      fluid {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
    personablyTemplates: imageSharp(
      fluid: {originalName: {regex: "/templates/"}}
    ) {
      fluid {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
    personablyChooseWho1: imageSharp(
      fluid: {originalName: {regex: "/choose-who-1/"}}
    ) {
      fluid {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
    personablyChooseWho2: imageSharp(
      fluid: {originalName: {regex: "/choose-who-2/"}}
    ) {
      fluid {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
    personablyChooseApp: imageSharp(
      fluid: {originalName: {regex: "/choose-app/"}}
    ) {
      fluid {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
    personablyChooseTask: imageSharp(
      fluid: {originalName: {regex: "/choose-task/"}}
    ) {
      fluid {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
    adaptiveLabIntroOne: imageSharp(
      fluid: {originalName: {regex: "/adaptive-lab-1/"}}
    ) {
      fluid {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
    adaptiveLabIntroTwo: imageSharp(
      fluid: {originalName: {regex: "/adaptive-lab-2/"}}
    ) {
      fluid {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
    adaptiveLabIntroThree: imageSharp(
      fluid: {originalName: {regex: "/adaptive-lab-3/"}}
    ) {
      fluid {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
    adaptiveLabFour: imageSharp(
      fluid: {originalName: {regex: "/adaptive-lab-4/"}}
    ) {
      fluid {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
    adaptiveLabClients: imageSharp(
      fluid: {originalName: {regex: "/adaptive-lab-clients/"}}
    ) {
      fluid {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
    adaptiveLabJobs: imageSharp(
      fluid: {originalName: {regex: "/adaptive-lab-jobs/"}}
    ) {
      fluid {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
    adaptiveLabBuildBeta: imageSharp(
      fluid: {originalName: {regex: "/build-you-beta/"}}
    ) {
      fluid {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
    adaptiveLabSmartyCover: imageSharp(
      fluid: {originalName: {regex: "/adaptive-lab-smarty-cover/"}}
    ) {
      fluid {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
`
